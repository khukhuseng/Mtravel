/* @flow */

import React, { Component } from "react";
import { Container, View, Text, Content, ListItem, Icon } from "native-base";
import { NetInfo, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import call from 'react-native-phone-call';

import Styles from "./SupportScreen.style";
import MHeader from "../../components/mHeader/mHeader";

type Props = {
  navigation: any,
  lang: string
};

const InternalCall = {
  number: '1300 03636', // String value with the number to call
  prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
}

const ExternalCall = {
  number: '+603-41319737', // String value with the number to call
  prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
}

type State = {};
class SupportScreen extends Component<Props, State> {

  _onPressOnlineCS = () => {
    this.props.navigation.navigate("Cs");
  };

  _onPressEmail = () => {

  };

  _onPressInternalCountry = () => {
    call(InternalCall).catch(console.error)
  };

  _onPressExternalCountry = () => {
    call(ExternalCall).catch(console.error)
  };

  _onPressFAQ = () => {

  };


  render() {
    const { lang } = this.props;

    return (
      <Container style={Styles.container}>
        <MHeader />

        <Content>
          <View style={[Styles.cardContainer, Styles.center]}>
            <Icon name="headphones" type="FontAwesome" style={{ color: "#f64f60" }} />
            <View style={{ marginTop: 10 }}><Text note>客户服务</Text></View>
          </View>
          <View style={Styles.cardContainer}>
            <ListItem iconLeft onPress={this._onPressOnlineCS} style={{ flexDirection: 'column', alignItems: 'flex-start' }} >
              <View style={{ flexDirection: "row", marginLeft: 10 }} >
                <Icon name="comments" type="FontAwesome" style={{ color: "#f64f60" }} />
                <Text style={{ marginLeft: 10 }}>
                  <Text >线上服务</Text>
                </Text>
              </View>
              <View style={{ flexDirection: "row" }} >
                <Text note style={{ marginLeft: 10 }}>07:00 - 21:00 (GMT+8), 7 Days a Week</Text>
              </View>
            </ListItem>
            <ListItem iconLeft onPress={this._onPressEmail}>
              <Icon name="envelope" type="FontAwesome" style={{ color: "#f64f60", marginLeft: 10 }} />
              <Text style={{ marginLeft: 10 }}>
                <Text >电邮我们</Text>
              </Text>
            </ListItem>
          </View>
          <View style={{ paddingBottom: 10 }}>
            <Text note style={{ textAlign: "center" }}>
              拨打国际长途电话时需要支付国际长途费用
            </Text>
          </View>
          <View style={Styles.cardContainer}>
            <ListItem iconLeft onPress={this._onPressInternalCountry} style={{ flexDirection: 'column', alignItems: 'flex-start' }} >
              <View style={{ flexDirection: "row", marginLeft: 10 }} >
                <Icon name="phone" type="FontAwesome" style={{ color: "#f64f60" }} />
                <Text style={{ marginLeft: 10 }}>1300 80 3636 (国内)</Text>
              </View>
              <View style={{ flexDirection: "row" }} >
                <Text note style={{ marginLeft: 10 }}>07:00 - 21:00 (GMT+8), 7 Days a Week</Text>
              </View>
            </ListItem>
            <ListItem iconLeft onPress={this._onPressExternalCountry} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <View style={{ flexDirection: "row", marginLeft: 10 }} >
                <Icon name="phone" type="FontAwesome" style={{ color: "#f64f60" }} />
                <Text style={{ marginLeft: 10 }}>+603-4131 9737 (海外)</Text>
              </View>
              <View style={{ flexDirection: "row" }} >
                <Text note style={{ marginLeft: 10 }}>07:00 - 21:00 (GMT+8), 7 Days a Week</Text>
              </View>
            </ListItem>
            <ListItem iconLeft onPress={this._onPressFAQ}>
              <Icon name="book" type="FontAwesome" style={{ color: "#f64f60", marginLeft: 10 }} />
              <Text style={{ marginLeft: 10 }}>FAQ</Text>
            </ListItem>
          </View>
        </Content>
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

export default connect(mapStateToProps)(SupportScreen);
