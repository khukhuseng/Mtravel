/* @flow */

import React, { Component } from "react";
import { Container, View, Text, Content, Icon, Button, Form } from "native-base";
import { NetInfo, AsyncStorage } from "react-native";
import { connect } from "react-redux";

import Styles from "./ProfileDetail.style";
import MHeader from "../../components/mHeader/mHeader";

type Props = {
    navigation: any,
    lang: string
};

class CommonQues extends Component<Props> {

    constructor() {
        super();
    }

    componentDidMount() {
    }

    _onPressGoBack = () => {
        this.props.navigation.goBack();
    };

    _onPressGoComNormal = () => {
        this.props.navigation.navigate("Com_Normal");
    };

    _onPressGoComStay = () => {
        this.props.navigation.navigate("Com_Stay");
    };

    _onPressGoComEntertainment = () => {
        this.props.navigation.navigate("Com_Entertainment");
    };

    _onPressGoComLifeStyle = () => {
        this.props.navigation.navigate("Com_LifeStyle");
    };

    _onPressGoComTourPackage = () => {
        this.props.navigation.navigate("Com_TourPackage");
    };

    _onPressGoComTransport = () => {
        this.props.navigation.navigate("Com_Transport");
    };

    _onPressGoComCruise = () => {
        this.props.navigation.navigate("Com_Cruise");
    };

    render() {
        const { lang } = this.props;

        return (
            <Container style={Styles.container}>
                <MHeader hasBack onPressHeaderLeft={this._onPressGoBack} />

                <Content>
                    <View style={[Styles.cardContainer, Styles.center]}>
                        <Icon name="question-circle" type="FontAwesome" style={{ color: "#f64f60" }} />
                        <View style={{ marginTop: 10 }}><Text note>{lang === 'ZH-CN' ? '常见问题' : lang === 'EN' ? 'FAQ' : lang === 'ZH-TW' ? '常見問題' : lang === 'JP' ? 'Q&A' : lang === 'KR' ? 'FAQ' : lang === 'TH' ? 'FAQ' : '常见问题'}</Text></View>

                    </View>

                    <Form style={{ marginRight: 10 }}>
                        <Button full style={{ marginLeft: 10, backgroundColor: "#fff", borderRadius: 8, marginBottom: 5 }} onPress={this._onPressGoComNormal} >
                            <Text style={{ color: "#000" }}>
                                {lang === 'ZH-CN' ? '一般疑问' : lang === 'EN' ? 'General' : lang === 'ZH-TW' ? '一般疑問' : lang === 'JP' ? '一般' : lang === 'KR' ? '일반적인' : lang === 'TH' ? 'ทั่วไป' : '一般疑问'}
                            </Text>
                        </Button>
                        <Button full style={{ marginLeft: 10, backgroundColor: "#fff", borderRadius: 8, marginBottom: 5 }} onPress={this._onPressGoComStay}  >
                            <Text style={{ color: "#000" }}>
                                {lang === 'ZH-CN' ? '住宿' : lang === 'EN' ? 'Accommodation' : lang === 'ZH-TW' ? '住宿' : lang === 'JP' ? '宿泊施設' : lang === 'KR' ? '숙박' : lang === 'TH' ? 'ที่พัก' : '住宿'}
                            </Text>
                        </Button>
                        <Button full style={{ marginLeft: 10, backgroundColor: "#fff", borderRadius: 8, marginBottom: 5 }} onPress={this._onPressGoComEntertainment} >
                            <Text style={{ color: "#000" }}>
                                {lang === 'ZH-CN' ? '休闲娱乐' : lang === 'EN' ? 'Leisure' : lang === 'ZH-TW' ? '休閒娛樂' : lang === 'JP' ? '余暇' : lang === 'KR' ? '레져' : lang === 'TH' ? 'สันทนาการ' : '休闲娱乐'}
                            </Text>
                        </Button>
                        <Button full style={{ marginLeft: 10, backgroundColor: "#fff", borderRadius: 8, marginBottom: 5 }} onPress={this._onPressGoComLifeStyle} >
                            <Text style={{ color: "#000" }}>
                                {lang === 'ZH-CN' ? '生活时尚' : lang === 'EN' ? 'Lifestyle' : lang === 'ZH-TW' ? '休閒娛樂' : lang === 'JP' ? 'ライフスタイル' : lang === 'KR' ? '라이프스타일' : lang === 'TH' ? 'ไลฟ์สไตล์' : '生活时尚'}
                            </Text>
                        </Button>
                        <Button full style={{ marginLeft: 10, backgroundColor: "#fff", borderRadius: 8, marginBottom: 5 }} onPress={this._onPressGoComTourPackage} >
                            <Text style={{ color: "#000" }}>
                                {lang === 'ZH-CN' ? '旅游配套' : lang === 'EN' ? 'Packages' : lang === 'ZH-TW' ? '旅遊配套' : lang === 'JP' ? 'パッケージ' : lang === 'KR' ? '패키지' : lang === 'TH' ? 'แพคเกจ' : '旅游配套'}
                            </Text>
                        </Button>
                        <Button full style={{ marginLeft: 10, backgroundColor: "#fff", borderRadius: 8, marginBottom: 5 }} onPress={this._onPressGoComTransport} >
                            <Text style={{ color: "#000" }}>
                                {lang === 'ZH-CN' ? '交通' : lang === 'EN' ? 'Transportation' : lang === 'ZH-TW' ? '交通' : lang === 'JP' ? '輸送' : lang === 'KR' ? '교통' : lang === 'TH' ? 'บริการรถรับส่ง' : '交通'}
                            </Text>
                        </Button>
                        <Button full style={{ marginLeft: 10, backgroundColor: "#fff", borderRadius: 8, marginBottom: 5 }} onPress={this._onPressGoComCruise} >
                            <Text style={{ color: "#000" }}>
                                {lang === 'ZH-CN' ? '海上之旅' : lang === 'EN' ? 'Cruise' : lang === 'ZH-TW' ? '海上之旅' : lang === 'JP' ? 'クルーズ' : lang === 'KR' ? '크루즈' : lang === 'TH' ? 'เรือครูซ' : '海上之旅'}
                            </Text>
                        </Button>
                    </Form>
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

export default connect(mapStateToProps)(CommonQues);