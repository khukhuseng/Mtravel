/* @flow */

import React, { Component } from "react";
import { Container, View, Text, Content } from "native-base";
import { Dimensions } from 'react-native';

import Styles from "./QrCodeScreen.style";
import MHeader from "../../components/mHeader/mHeader";
import QRCodeScanner from 'react-native-qrcode-scanner';

type Props = {
  navigation: any
};

const DEVICE_HEIGHT = Dimensions.get('window').height;

export default class QrCodeScreen extends Component<Props> {
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentDidMount() { }

  componentWillUnmount() { }

  _onPressGoBack = () => {
    this.props.navigation.goBack();
  };

  onSuccess(e) {
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }

  render() {
    return (
      <Container style={Styles.container}>
        <MHeader hasBack onPressHeaderLeft={this._onPressGoBack} />

        <View style={{ height: DEVICE_HEIGHT }}>
          <QRCodeScanner
            onRead={this.onSuccess.bind(this)}
            showMarker={true}
          />
        </View>


      </Container>

    )
  }
}
