/* @flow */

import React, { Component } from "react";
import { Container, Content } from "native-base";
import { WebView } from "react-native-webview";

type Props = {
    navigation: any
};
export default class CustomerService extends Component<Props> {

    CS_URL: string = "https://m.mtravelclub.com/home/cs.php";

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentDidMount() { }

    componentWillUnmount() { }

    _onPressHeaderLeft = (event: any) => {
        this.props.navigation.goBack();
    };

    render() {
        return (
            <Container>
                <WebView source={{ uri: this.CS_URL }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                />
            </Container>
        );
    }
}
