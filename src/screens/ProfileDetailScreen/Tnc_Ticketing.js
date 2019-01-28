/* @flow */

import React, { Component } from "react";
import { Container, View, Text, Content, Icon, Button, Form } from "native-base";
import { WebView } from "react-native-webview";

import Styles from "./ProfileDetail.style";
import MHeader from "../../components/mHeader/mHeader";

type Props = {
    navigation: any
};
export default class Tnc_Ticketing extends Component<Props> {

    constructor() {
        super();

    }

    componentDidMount() {
    }

    _onPressGoBack = () => {
        this.props.navigation.goBack();
    };

    render() {
        return (
            <Container style={Styles.container}>
                <MHeader hasBack onPressHeaderLeft={this._onPressGoBack} />
                <View style={Styles.center}>
                    <View ><Text style={{ fontWeight: 'bold', fontSize: 20 }}>MTravel - Terms of Use</Text></View>
                    <View ><Text style={{ fontWeight: 'bold', fontSize: 20 }}>(Ticketing)</Text></View>
                </View>
                <WebView
                    source={{ uri: `https://h5-app.mtravelclub.com/term/term-accommodation.php` }}
                />
            </Container>
        );
    }
}
