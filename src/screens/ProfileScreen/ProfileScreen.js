/* @flow */

import React, { Component } from "react";
import { Container, View, Text, Content, ListItem, Icon } from "native-base";
import { NetInfo, AsyncStorage } from "react-native";
import { connect } from "react-redux";

import Styles from "./ProfileScreen.style";
import MHeader from "../../components/mHeader/mHeader";

type Props = {
  navigation: any,
  email: string,
  username: string,
  isLoggedIn: boolean,
  lang: string
};

type State = {};
class ProfileScreen extends Component<Props, State> {
  APP_VERSION: string = "目前版本 2.4.4";

  _onPressGoLogIn = () => {
    const { navigation } = this.props;
    this.props.navigation.navigate("Login", { from: navigation.state.routeName, key: navigation.state.key });
  };

  _onPressGoLanguage = () => {
    this.props.navigation.navigate("Language");
  };

  _onPressGoUserGuide = () => {
    this.props.navigation.navigate("UserGuide");
  };

  _onPressGoCommonQues = () => {
    this.props.navigation.navigate("CommonQues");
  };

  _onPressGoTnc = () => {
    this.props.navigation.navigate("Tnc");
  };

  _onPressGoMyAccount = () => {
    this.props.navigation.navigate("MyAccount");
  };

  _onPressGoLogOut = () => {
    this.props.dispatch({ type: "LOGOUT" });
    this.props.navigation.navigate("Home");
  };

  _onPressGoAboutUs = () => {
    this.props.navigation.navigate("AboutUs");
  };

  render() {
    const { isLoggedIn, username, email, lang } = this.props;

    return (
      <Container style={Styles.container}>
        <MHeader />

        <Content>
          <View style={[Styles.cardContainer, Styles.center]}>
            <Text>{username}</Text>
            {isLoggedIn ? <Text note>{email}</Text> : null}
          </View>
          <View style={{ paddingBottom: 10 }}>
            <Text note style={{ textAlign: "center" }}>
              {this.APP_VERSION}
            </Text>
          </View>
          <View style={Styles.cardContainer}>
            <ListItem iconLeft onPress={this._onPressGoLanguage}>
              <Icon name="language" type="FontAwesome" style={{ color: "#f64f60" }} />
              <Text style={{ marginLeft: 10 }}>
                {lang === 'ZH-CN' ? '界面语言' : lang === 'EN' ? 'Interface Language' : lang === 'ZH-TW' ? '界面語言' : lang === 'JP' ? '言語' : lang === 'KR' ? '언어' : lang === 'TH' ? 'ภาษา' : '界面语言'}
              </Text>
            </ListItem>
            {isLoggedIn ? (
              <ListItem iconLeft onPress={this._onPressGoMyAccount}>
                <Icon name="info-circle" type="FontAwesome" style={{ color: "#f64f60" }} />
                <Text style={{ marginLeft: 10 }}>
                  {lang === 'ZH-CN' ? '我的账户' : lang === 'EN' ? 'My Account' : lang === 'ZH-TW' ? '我的賬戶' : lang === 'JP' ? 'マイアカウント' : lang === 'KR' ? '내 계정' : lang === 'TH' ? 'บัญชีของฉัน' : '我的账户'}
                </Text>
              </ListItem>
            ) : null}
            {isLoggedIn ? (
              <ListItem iconLeft>
                <Icon name="suitcase" type="FontAwesome" style={{ color: "#f64f60" }} />
                <Text style={{ marginLeft: 10 }}>
                  {lang === 'ZH-CN' ? '我的行李' : lang === 'EN' ? 'My Luggage' : lang === 'ZH-TW' ? '我的行李' : lang === 'JP' ? 'マイラッゲージ' : lang === 'KR' ? 'My Luggage' : lang === 'TH' ? 'My Luggage' : '我的行李'}
                </Text>
              </ListItem>
            ) : null}
            {isLoggedIn ? (
              <ListItem iconLeft onPress={this._onPressGoLogOut}>
                <Icon name="sign-out" type="FontAwesome" style={{ color: "#f64f60" }} />
                <Text style={{ marginLeft: 10 }}>
                  {lang === 'ZH-CN' ? '登出' : lang === 'EN' ? 'Log Out' : lang === 'ZH-TW' ? '登出' : lang === 'JP' ? 'ログアウト' : lang === 'KR' ? '로그아웃' : lang === 'TH' ? 'ออกจากระบบ' : '登出'}
                </Text>
              </ListItem>
            ) : (
                <ListItem iconLeft onPress={this._onPressGoLogIn}>
                  <Icon name="sign-in" type="FontAwesome" style={{ color: "#f64f60" }} />
                  <Text style={{ marginLeft: 10 }}>
                    {lang === 'ZH-CN' ? '登入' : lang === 'EN' ? 'Login' : lang === 'ZH-TW' ? '登入' : lang === 'JP' ? 'ログイン' : lang === 'KR' ? '로그인' : lang === 'TH' ? 'เข้าสู่ระบบ' : '登入'}
                  </Text>
                </ListItem>
              )}
          </View>

          <View style={Styles.cardContainer}>
            <ListItem iconLeft onPress={this._onPressGoUserGuide}>
              <Icon name="compass" type="FontAwesome" style={{ color: "#f64f60" }} />
              <Text style={{ marginLeft: 10 }}>
                {lang === 'ZH-CN' ? '用户指南' : lang === 'EN' ? 'Guide' : lang === 'ZH-TW' ? '用户指南' : lang === 'JP' ? '使用者指南' : lang === 'KR' ? '사용자 안내서' : lang === 'TH' ? 'แนะนำ' : '用户指南'}
              </Text>
            </ListItem>
            <ListItem iconLeft onPress={this._onPressGoCommonQues}>
              <Icon name="question-circle" type="FontAwesome" style={{ color: "#f64f60" }} />
              <Text style={{ marginLeft: 10 }}>
                {lang === 'ZH-CN' ? '常见问题' : lang === 'EN' ? 'FAQ' : lang === 'ZH-TW' ? '常見問題' : lang === 'JP' ? 'Q&A' : lang === 'KR' ? 'FAQ' : lang === 'TH' ? 'FAQ' : '常见问题'}
              </Text>
            </ListItem>
            <ListItem iconLeft onPress={this._onPressGoTnc}>
              <Icon name="book" type="FontAwesome" style={{ color: "#f64f60" }} />
              <Text style={{ marginLeft: 10 }}>
                {lang === 'ZH-CN' ? '条规与条款' : lang === 'EN' ? 'Terms & Conditions' : lang === 'ZH-TW' ? '條规与條款' : lang === 'JP' ? '利用規約' : lang === 'KR' ? '사용조건' : lang === 'TH' ? 'ข้อกำหนดและเงื่อนไข' : '条规与条款'}

              </Text>
            </ListItem>
            <ListItem iconLeft onPress={this._onPressGoAboutUs} >
              <Icon name="users" type="FontAwesome" style={{ color: "#f64f60" }} />
              <Text style={{ marginLeft: 10 }}>
                {lang === 'ZH-CN' ? '关于我们' : lang === 'EN' ? 'About Us' : lang === 'ZH-TW' ? '關於我們' : lang === 'JP' ? '私たちについて' : lang === 'KR' ? '우리에 대해' : lang === 'TH' ? 'เกี่ยวกับเรา' : '关于我们'}
              </Text>
            </ListItem>
            <ListItem iconLeft>
              <Icon name="user-plus" type="FontAwesome" style={{ color: "#f64f60" }} />
              <Text style={{ marginLeft: 10 }}>商家申请</Text>
            </ListItem>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { auth, i18n } = state;

  return {
    username: (auth && auth.username) || "Guest",
    email: auth && auth.email,
    isLoggedIn: auth && auth.token,
    lang: i18n.lang
  };
};

export default connect(mapStateToProps)(ProfileScreen);
