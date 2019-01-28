/* @flow */

import React, { PureComponent, Component } from "react";
import { NetInfo, ImageBackground, Image, KeyboardAvoidingView } from "react-native";
import { View, Text, Container, Content, Form, Item, Icon, Input, ListItem, Button } from "native-base";
import { connect } from "react-redux";
import MHeader from "../../components/mHeader/mHeader";
import IconInput from "../../components/inputs/IconInput/IconInput";

import { translate } from "../../utils/translation";

type Props = {
    navigation: any,
    lang: string
};
type State = {
    email: string,
    isReady: boolean
};

class ResetPwScreen extends PureComponent<Props, State> {

    emailRef: any = null;

    constructor(props) {
        super(props);

        this.state = {
            email: "",
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

    _onPressGoBack = () => {
        this.props.navigation.goBack();
    };

    _onPressResetPW = () => {

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {

                if (this.state.email == "") {
                    alert("Please input email address!");
                } else if (reg.test(this.state.email) === false) {
                    const invalidemail = translate(this.props.lang, "login.invalidemail");
                    alert(invalidemail);
                } else {
                    fetch("https://mobileapi.mtravelclub.com/account/reset_password.php", {
                        method: 'POST',
                        headers: new Headers({
                            'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
                        }),
                        body: "email=" + this.state.email + "" // <-- Post parameters
                    })
                        .then((response) => response.text())
                        .then((responseText) => {

                            if (responseText == "success" || responseText == "code_sent") {
                                const resetAlert = translate(this.props.lang, "reset.success");
                                alert(resetAlert);

                                this.setState({
                                    email: ""
                                });

                            } else if (responseText == "fail") {
                                alert(responseText);
                            }

                        })
                        .catch((error) => {
                            console.error(error);
                        });
                }

            } else {
                const noInternet = translate(this.props.lang, "internet.noAccess");
                alert(noInternet);
            }
        })
    };

    render() {
        const { lang } = this.props;
        const emailPlaceholder = translate(lang, "input.email");

        return (
            <Container>
                <ImageBackground source={require("../../assets/image/authPage/login.jpg")} style={{ flex: 1 }}>
                    <MHeader hasBack onPressHeaderLeft={this._onPressGoBack} />

                    <Content>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginVertical: 10, marginTop: 20 }}>
                            <Icon name="unlock-alt" type="FontAwesome" style={{ fontSize: 90, color: 'white' }} />
                            <Text style={{ color: 'white', fontSize: 30 }}>{lang === 'ZH-CN' ? '忘记密码' : lang === 'EN' ? 'Forgot Password' : lang === 'ZH-TW' ? '忘記密碼' : lang === 'JP' ? 'パスワードを忘れたら' : lang === 'KR' ? '비밀번호를 잊어버렸어요' : lang === 'TH' ? 'ลืมรหัสผ่าน' : '忘记密码'}</Text>
                        </View>

                        <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 1 }}>
                            <Form style={{ marginRight: 10 }}>
                                <ListItem>
                                    <Text style={{ color: "#fff", marginLeft: 10 }}>{lang === 'ZH-CN' ? '输入与您的帐户相关联的电子邮件地址重置密码' : lang === 'EN' ? 'Enter the email address that associated with your account to reset your password' : lang === 'ZH-TW' ? '輸入與您的帳戶相關聯的電子郵件地址重置密碼' : lang === 'JP' ? 'パスワードをリセットするためにアカウントのメールアドレスを入力してください' : lang === 'KR' ? '비밀번호를  재설정할수 있는 이메일주소를 입력하여 주세요' : lang === 'TH' ? 'ระบุชื่ออีเมล์ที่ผูกกับบัญชีเพื่อตั้งค่ารหัสผ่านใหม่' : '输入与您的帐户相关联的电子邮件地址重置密码'}</Text>
                                </ListItem>

                                <IconInput
                                    onChangeText={this._onChangeEmail}
                                    placeholder={emailPlaceholder}
                                    inputRef={ref => (this.emailRef = ref)}
                                    onSubmitEditing={() => {
                                        this.emailRef && this.emailRef.wrappedInstance.focus();
                                    }}
                                    value={this.state.email}
                                    secureTextEntry={false}
                                />

                                <Button full style={{ backgroundColor: "#f64f60", marginHorizontal: 10, borderRadius: 8 }} onPress={this._onPressResetPW}>
                                    <Text>{lang === 'ZH-CN' ? '提交' : lang === 'EN' ? 'Submit' : lang === 'ZH-TW' ? '提交' : lang === 'JP' ? '送信' : lang === 'KR' ? '등록' : lang === 'TH' ? 'ส่ง' : '提交'}</Text>
                                </Button>
                            </Form>
                        </KeyboardAvoidingView>
                    </Content>
                </ImageBackground>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    const { i18n } = state;
    return {
        lang: i18n.lang
    };
};

export default connect(mapStateToProps)(ResetPwScreen);