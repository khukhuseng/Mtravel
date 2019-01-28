/* @flow */

import React, { Component } from "react";
import { Container, View, Text, Content } from "native-base";
import { NetInfo, AsyncStorage } from "react-native";

import Styles from "./ProfileScreen.style";
import MHeader from "../../components/mHeader/mHeader";
import SettingsCard from "../../components/cards/SettingsCard/SettingsCard";

type Props = {
  navigation: any
};
export default class ProfileScreen extends Component<Props> {
  //USER_NAME: string = "刚好八个字的姓名";
  //EMAIL: string = "yaowyaow83@gmail.com";
  APP_VERSION: string = "目前版本 2.4.4";

  constructor() {
    super();
    this.state = {
      "username": '',
      "email": '',
    }
  }

  menu_1: Array<any> = [
    {
      icon: "language",
      label: "界面语言"
    },
    {
      icon: "info-circle",
      label: "我的账户"
    },
    {
      icon: "suitcase",
      label: "我的行李"
    },
    {
      icon: "sign-in",
      label: "登入"
    }
  ];
  menu_2: Array<any> = [
    {
      icon: "compass",
      label: "用户指南"
    },
    {
      icon: "question-circle",
      label: "常见问题"
    },
    {
      icon: "book",
      label: "条款和条件"
    },
    {
      icon: "users",
      label: "关于我们"
    },
    {
      icon: "user-plus",
      label: "商家申请"
    }
  ];

  componentDidMount() {
    AsyncStorage.getItem("USERNAME").then((value) => {
      //alert(value);
      this.setState({ "username": value });
    }).done();
    AsyncStorage.getItem("EMAIL").then((value) => {
      this.setState({ "email": value });
    }).done();
  }

  _onPressGoBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <Container style={Styles.container}>
        <MHeader hasBack onPressHeaderLeft={this._onPressGoBack} />

        <Content>
          <View style={[Styles.cardContainer, Styles.center]}>
            <Text>{this.state.username}</Text>
            <Text note>{this.state.email}</Text>
          </View>

          <View style={{ paddingBottom: 10 }}>
            <Text note style={{ textAlign: "center" }}>
              {this.APP_VERSION}
            </Text>
          </View>

          <View style={Styles.cardContainer}>
            <SettingsCard menu={this.menu_1} navigation={this.props.navigation} />
          </View>

          <View style={Styles.cardContainer}>
            <SettingsCard menu={this.menu_2} navigation={this.props.navigation} />
          </View>
        </Content>
      </Container>
    );
  }
}
