/* @flow */

import React, { PureComponent } from "react";
import { NetInfo, ImageBackground, Image, KeyboardAvoidingView, AsyncStorage, TouchableHighlight } from "react-native";
import { View, Text, Container, Content, Form, Button, Icon } from "native-base";
import DeviceInfo from "react-native-device-info";
import { connect } from "react-redux";

import MHeader from "../../components/mHeader/mHeader";
import IconInput from "../../components/inputs/IconInput/IconInput";

import { translate } from "../../utils/translation";

const deviceId = DeviceInfo.getDeviceId();

type Props = {
  navigation: any,
  isLoggedIn: boolean,
  dispatch: any,
  lang: string
};

type State = {
  email: string,
  passwd: string,
  isReady: boolean
};
class LoginScreen extends PureComponent<Props, State> {

  emailRef: any;
  passwdRef: any;

  fromPreviousScreen: any = undefined;

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      passwd: "",
      isReady: true
    };

    this.fromPreviousScreen = this.props.navigation.getParam("from");
  }

  componentDidMount() {
    const { isLoggedIn } = this.props;

    if (isLoggedIn) {
      this.props.navigation.navigate("Home");
    }
  }

  //componentDidUpdate(prevProps, prevState) {
  //  if (this.props.lang !== prevProps.lang) {
  //    this.setState(
  //      () => ({
  //        isReady: false
  //      }),
  //      () => {
  //        setTimeout(() => {
  //          this.setState({
  //            isReady: true
  //          });
  //        }, 1000);
  //      }
  //    );
  //  }
  // }

  _onChangeEmail = (email: string) => {
    this.setState({
      email
    });
  };

  _onChangePasswd = (passwd: string) => {
    this.setState({
      passwd
    });
  };

  _onPressGoBack = () => {
    if (this.fromPreviousScreen) {
      this.props.navigation.pop();
      this.props.navigation.navigate(this.fromPreviousScreen);
    }
    this.props.navigation.goBack();
  };


  _onPressGoResetPW = () => {
    this.props.navigation.navigate("ResetPw");
  };

  _onPressLogin = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        if (this.state.email == "") {
          alert("Please input email address!");
        } else if (reg.test(this.state.email) === false) {

          const invalidemail = switchLanguage(this.props.lang, "login.invalidemail");
          alert(invalidemail);

        } else if (this.state.passwd == "") {
          alert("Please input password!");
        } else {
          fetch("https://mobileapi.mtravelclub.com/account/login.php", {
            method: "POST",
            headers: new Headers({
              "Content-Type": "application/x-www-form-urlencoded" // <-- Specifying the Content-Type
            }),
            body: "email=" + this.state.email + "&password=" + this.state.passwd + "&device_id=" + deviceId + "" // <-- Post parameters
          })
            .then(response => response.json())
            .then(responseJson => {
              if (responseJson.status == "success") {
                //alert(responseJson.id);
                const successAlert = translate(this.props.lang, "login.success");
                alert(responseJson.name + successAlert);

                this.props.dispatch({
                  type: "LOGIN_SUCCESS",
                  id: responseJson.id,
                  username: responseJson.username,
                  name: responseJson.name,
                  email: responseJson.email,
                  token: responseJson.web_access_token
                });

                fetch("https://mobileapi.mtravelclub.com/account/get_profile.php", {
                  method: "POST",
                  headers: new Headers({
                    "Content-Type": "application/x-www-form-urlencoded" // <-- Specifying the Content-Type
                  }),
                  body: "id=" + responseJson.id + "&web_access_token=" + responseJson.web_access_token + "&device_id=" + deviceId + "" // <-- Post parameters
                })
                  .then(response => response.json())
                  .then(responseJson2 => {
                    if (responseJson2.status == "success") {
                      this.props.dispatch({
                        type: "GETPROFILE_SUCCESS",
                        phone: responseJson2.phone,
                        gender: responseJson2.gender,
                        dob: responseJson2.dob,
                        country: responseJson2.country
                      });
                    }
                  })
                  .catch(error => {
                    console.error(error);
                  });

                this.setState({
                  email: "",
                  passwd: ""
                });

                const to = this.fromPreviousScreen || "Home";
                this.props.navigation.navigate(to);
              } else if (responseJson.status == "fail") {
                const invalidAlert = translate(this.props.lang, "login.invalid");
                alert(invalidAlert);
              } else {
                const failAlert = translate(this.props.lang, "login.fail");
                alert(failAlert);
              }
            })
            .catch(error => {
              console.error(error);
            });
        }
      } else {
        const noInternet = translate(this.props.lang, "internet.noAccess");
        alert(noInternet);
      }
    });
  };

  render() {

    const { lang } = this.props;
    const passwdPlaceholder = translate(lang, "input.password");
    const emailPlaceholder = translate(lang, "input.email");

    return (
      <Container>
        <ImageBackground source={require("../../assets/image/authPage/login.jpg")} style={{ flex: 1 }}>
          <MHeader hasBack onPressHeaderLeft={this._onPressGoBack} />

          <Content>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginVertical: 10 }}>

              <Text style={{ fontSize: 50, color: 'white' }}>欢迎</Text>
              <Text style={{ fontSize: 30, color: 'white' }}>优质的旅游 只在M旅游</Text>
            </View>

            <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 1 }}>
              <Form style={{ marginRight: 10 }}>
                <IconInput
                  iconName={"envelope"}
                  onChangeText={this._onChangeEmail}
                  placeholder={emailPlaceholder}
                  inputRef={ref => {
                    this.emailRef = ref;
                  }}
                  onSubmitEditing={() => {
                    this.passwdRef && this.passwdRef.wrappedInstance.focus();
                  }}
                  value={this.state.email}
                  secureTextEntry={false}
                />

                {this.state.isReady ? (
                  <IconInput
                    onChangeText={this._onChangePasswd}
                    placeholder={passwdPlaceholder}
                    inputRef={ref => {
                      this.passwdRef = ref;
                    }}
                    returnKeyType="default"
                    returnKeyLabel="enter"
                    value={this.state.passwd}
                    secureTextEntry={true}
                  />
                ) : null}
                <Button full style={{ marginLeft: 10, backgroundColor: "#f64f60", borderRadius: 8 }} onPress={this._onPressLogin}>
                  <Text>
                    {" "}
                    {lang === "ZH-CN"
                      ? "登入"
                      : lang === "EN"
                        ? "Login"
                        : lang === "ZH-TW"
                          ? "登入"
                          : lang === "JP"
                            ? "ログイン"
                            : lang === "KR"
                              ? "로그인"
                              : lang === "TH"
                                ? "เข้าสู่ระบบ"
                                : "登入"}
                  </Text>
                </Button>
                <TouchableHighlight
                  style={{ marginLeft: 10, justifyContent: "center", alignItems: "center", marginTop: 10 }}
                  onPress={this._onPressGoResetPW}
                >
                  <Text style={{ color: "white", textDecorationLine: "underline" }}>
                    {lang === "ZH-CN"
                      ? "忘记密码"
                      : lang === "EN"
                        ? "Forgot Password"
                        : lang === "ZH-TW"
                          ? "忘記密碼"
                          : lang === "JP"
                            ? "パスワードを忘れたら"
                            : lang === "KR"
                              ? "비밀번호를 잊어버렸어요"
                              : lang === "TH"
                                ? "ลืมรหัสผ่าน"
                                : "忘记密码"}
                  </Text>
                </TouchableHighlight>
              </Form>
            </KeyboardAvoidingView>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { auth, i18n } = state;

  return {
    isLoggedIn: auth && auth.token,
    lang: i18n.lang
  };
};

export default connect(mapStateToProps)(LoginScreen);
