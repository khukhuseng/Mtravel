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

class UserGuide extends Component<Props> {

    constructor() {
        super();
        this.state = {
            "Language": 'Sim',
            "email": '',
        }
    }

    componentDidMount() {
    }

    _onPressGoBack = () => {
        this.props.navigation.goBack();
    };

    render() {
        const { lang } = this.props;

        return (
            <Container style={Styles.container}>
                <MHeader hasBack onPressHeaderLeft={this._onPressGoBack} />

                <Content>
                    <View style={[Styles.cardContainer, Styles.center]}>
                        <Icon name="compass" type="FontAwesome" style={{ color: "#f64f60" }} />
                        <View style={{ marginTop: 10 }}><Text note>{lang === 'ZH-CN' ? '用户指南' : lang === 'EN' ? 'Guide' : lang === 'ZH-TW' ? '用戶指南' : lang === 'JP' ? '使用者指南' : lang === 'KR' ? '사용자 안내서' : lang === 'TH' ? 'แนะนำ' : '用户指南'}</Text></View>

                    </View>

                    <Form style={{ marginRight: 10 }}>
                        <Button full style={{ marginLeft: 10, backgroundColor: "#fff", borderRadius: 8, marginBottom: 5 }} >
                            <Text style={{ color: "#000" }}>
                                {lang === 'ZH-CN' ? '应用使用指南' : lang === 'EN' ? 'App Usage Guideline' : lang === 'ZH-TW' ? '應用使用指南' : lang === 'JP' ? 'アプリ使用ガイド' : lang === 'KR' ? '앱 사용 가이드 라인' : lang === 'TH' ? 'หลักเกณฑ์การใช้แอป' : '应用使用指南'}
                            </Text>
                        </Button>
                        <Button full style={{ marginLeft: 10, backgroundColor: "#fff", borderRadius: 8, marginBottom: 5 }}>
                            <Text style={{ color: "#000" }}>
                                {lang === 'ZH-CN' ? '个人资料验证' : lang === 'EN' ? 'App Usage Guideline' : lang === 'ZH-TW' ? '個人資料驗證' : lang === 'JP' ? '個人情報' : lang === 'KR' ? '개인 데이터 확인' : lang === 'TH' ? 'การยืนยันข้อมูลส่วนบุคคล' : '个人资料验证'}
                            </Text>
                        </Button>
                        <Button full style={{ marginLeft: 10, backgroundColor: "#fff", borderRadius: 8, marginBottom: 5 }}>
                            <Text style={{ color: "#000" }}>
                                {lang === 'ZH-CN' ? '付款指南' : lang === 'EN' ? 'Payment Guide' : lang === 'ZH-TW' ? '付款指南' : lang === 'JP' ? '支払いガイド' : lang === 'KR' ? '지불 가이드' : lang === 'TH' ? 'คู่มือการชำระเงิน' : '付款指南'}
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

export default connect(mapStateToProps)(UserGuide);