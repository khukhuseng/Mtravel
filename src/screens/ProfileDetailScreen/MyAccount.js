/* @flow */

import React, { Component } from "react";
import { Container, View, Text, Content, Icon, Button, Form, Picker } from "native-base";
import { NetInfo, AsyncStorage, KeyboardAvoidingView } from "react-native";
import ModalDatePicker from "react-native-datepicker-modal";
import { connect } from "react-redux";

import Styles from "./ProfileDetail.style";
import MHeader from "../../components/mHeader/mHeader";
import IconInput from "../../components/inputs/IconInput/IconInputProfile";

import { translate } from "../../utils/translation";

type Props = {
  navigation: any,
  email: any,
  name: any,
  phone: any,
  dob: any,
  lang: string

};

type State = {
  email: string,
  phoneno: string,
  name: string,
  gender: string,
  dob: string,
  country: string,
  selected: any,
  isReady: boolean
};
class MyAccount extends Component<Props, State> {
  emailRef: any = null;
  phonenoRef: any = null;
  nameRef: any = null;
  genderRef: any = null;
  dobRef: any = null;
  countryRef: any = null;

  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      phoneno: this.props.phone,
      name: this.props.name,
      gender: "",
      dob: this.props.dob,
      country: "",
      selected: undefined,
      isReady: true
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.lang !== prevProps.lang) {
      this.setState(
        () => ({
          isReady: false
        }),
        () => {
          setTimeout(() => {
            this.setState({
              isReady: true
            });
          }, 1000);
        }
      );
    }
  }

  _onChangeEmail = (email: string) => {
    this.setState({
      email
    });
  };

  _onChangePhone = (phoneno: string) => {
    this.setState({
      phoneno
    });
  };

  _onPressChangeProfile = () => { };

  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  _onPressGoBack = () => {
    this.props.navigation.goBack();
  };

  _onChangeName = (name: string) => {
    this.setState({
      name
    });
  };

  render() {
    const { lang } = this.props;
    const contactPlaceholder = translate(lang, "input.contact");
    const namePlaceholder = translate(lang, "input.name");
    const genderPlaceholder = translate(lang, "input.gender");
    const countryPlaceholder = translate(lang, "input.country");
    const dobPlaceholder = translate(lang, "input.DOB");
    const emailPlaceholder = translate(lang, "input.email");

    return (
      <Container style={Styles.container}>
        <MHeader hasBack onPressHeaderLeft={this._onPressGoBack} />

        <Content>
          <View style={[Styles.cardContainer, Styles.center]}>
            <Icon name="address-card" type="FontAwesome" style={{ color: "#f64f60" }} />
            <View style={{ marginTop: 10 }}>
              <Text note> {lang === 'ZH-CN' ? '我的账户' : lang === 'EN' ? 'My Account' : lang === 'ZH-TW' ? '我的賬戶' : lang === 'JP' ? 'マイアカウント' : lang === 'KR' ? '내 계정' : lang === 'TH' ? 'บัญชีของฉัน' : '我的账户'}</Text>
            </View>
          </View>

          <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 1 }}>
            <Form style={{ marginRight: 10 }}>
              <IconInput
                iconName={"envelope"}
                onChangeText={this._onChangeEmail}
                placeholder={emailPlaceholder}
                inputRef={ref => (this.emailRef = ref)}
                onSubmitEditing={() => {
                  this.emailRef && this.emailRef.wrappedInstance.focus();
                }}
                value={this.state.email}
                secureTextEntry={false}
              />
              <IconInput
                iconName={"phone"}
                onChangeText={this._onChangePhone}
                placeholder={contactPlaceholder}
                inputRef={ref => (this.phonenoRef = ref)}
                onSubmitEditing={() => {
                  this.phonenoRef && this.phonenoRef.wrappedInstance.focus();
                }}
                value={this.state.phoneno}
                secureTextEntry={false}
              />
              <IconInput
                iconName={"user"}
                onChangeText={this._onChangeName}
                placeholder={namePlaceholder}
                inputRef={ref => (this.nameRef = ref)}
                onSubmitEditing={() => {
                  this.nameRef && this.nameRef.wrappedInstance.focus();
                }}
                value={this.state.name}
                secureTextEntry={false}
              />
              <View style={{ flexDirection: "row", marginLeft: 15, backgroundColor: "#fff", borderRadius: 8 }}>
                <Icon name={"transgender"} type="FontAwesome" style={{ marginLeft: 5, padding: 5, alignSelf: "center" }} />
                <Picker
                  mode="dropdown"
                  placeholder={genderPlaceholder}
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                  style={{ marginRight: 5 }}
                >
                  <Picker.Item label="男" value="male" />
                  <Picker.Item label="女" value="female" />
                </Picker>
              </View>
              <View style={{ flexDirection: "row", backgroundColor: "#fff", marginLeft: 15, marginTop: 10, marginBottom: 10, borderRadius: 8 }}>
                <View style={{ justifyContent: "center", marginLeft: 10 }}>
                  <Icon name="calendar" style={{ color: "#000" }} />
                </View>
                <ModalDatePicker
                  style={Styles.Datecontainer}
                  renderDate={({ year, month, day, date }) => {
                    if (!date) {
                      return <Text style={[Styles.Datetext, Styles.DateplaceholderText]}>Date of birth</Text>;
                    }

                    const dateStr = `${day}-${month}-${year}`;
                    return <Text style={Styles.Datetext}>{dateStr}</Text>;
                  }}
                />
              </View>
              <View style={{ flexDirection: "row", marginLeft: 15, backgroundColor: "#fff", borderRadius: 8, marginBottom: 10 }}>
                <Icon name={"globe"} type="FontAwesome" style={{ marginLeft: 5, padding: 5, alignSelf: "center" }} />
                <Picker
                  mode="dropdown"
                  placeholder={countryPlaceholder}
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                  style={{ marginRight: 5 }}
                >
                  <Picker.Item label="Malaysia" value="MY" />
                  <Picker.Item label="Singapore" value="SG" />
                </Picker>
              </View>

              <Button full style={{ backgroundColor: "#f64f60", marginLeft: 15, borderRadius: 8 }} onPress={this._onPressChangeProfile}>
                <Text>{lang === 'ZH-CN' ? '提交' : lang === 'EN' ? 'Submit' : lang === 'ZH-TW' ? '休閒娛樂' : lang === 'JP' ? '送信' : lang === 'KR' ? '등록' : lang === 'TH' ? 'ส่ง' : '提交'}</Text>
              </Button>
            </Form>
          </KeyboardAvoidingView>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { auth, i18n } = state;

  return {
    email: (auth && auth.email) || "",
    name: (auth && auth.name) || "Guest",
    phone: (auth && auth.phone) || "",
    dob: (auth && auth.dob) || "",
    lang: i18n.lang
  };
};

export default connect(mapStateToProps)(MyAccount);
