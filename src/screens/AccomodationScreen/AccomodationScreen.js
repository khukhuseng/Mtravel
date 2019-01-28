/* @flow */

import React, { PureComponent } from "react";
import { ActivityIndicator } from "react-native";
import { Container, Content, Text, View } from "native-base";
import { connect } from "react-redux";
import { WebView } from "react-native-webview";

type Props = {
  navigation: any,
  token: string,
  lang: string
};

type State = {
  latitude: number | any,
  longitude: number | any,
  error: any
};

class AccomodationScreen extends PureComponent<Props, State> {
  ACCOMODATION_WEB_URL: string = "https://h5-app.mtravelclub.com/accommodation/?source=app&lang=EN&latlng=urlencode(124,123)";
  //ACCOMODATION_WEB_URL: string = "";

  constructor(props: any) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null
    };
  }

  _onPressHeaderLeft = (event: any) => {
    this.props.navigation.goBack();
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
        //ACCOMODATION_WEB_URL = "https://h5-app.mtravelclub.com/accommodation/?source=app&lang=EN&latlng=urlencode(124,123)";
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 }
    );
  }

  _onMessage = (event: Event) => {
    // received your message from web
    //console.log("On Message", event.nativeEvent.data);
  };

  render() {
    const { latitude, longitude } = this.state;
    const latlong = encodeURI(latitude + "," + longitude);
    const { lang, token } = this.props;

    return (
      <Container>
        {latitude && longitude ? (
          <WebView
            originWhitelist={["*"]}
            source={{ uri: `https://h5-app.mtravelclub.com/accommodation/?source=app&lang=${lang}&latlng=${latlong}&webToken=${token}` }}
            onMessage={this._onMessage}
            onLoad={event => {
              //console.log("On Load", event);
            }}
            onError={error => {
              //console.log("On Error", error);
            }}
            useWebKit={true}
          />
        ) : (
            <Content contentContainerStyle={{ flex: 1 }}>
              <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Please turn on your GPS Location</Text>
                <ActivityIndicator color={"#f64f60"} />
              </View>
            </Content>
          )}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { auth, i18n } = state;

  return {
    isLoggedIn: auth && auth.token,
    token: auth.token,
    lang: i18n.lang
  };
};

export default connect(mapStateToProps)(AccomodationScreen);