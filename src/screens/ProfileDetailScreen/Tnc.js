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

class Tnc extends Component<Props> {

    constructor() {
        super();

    }

    _onPressGoBack = () => {
        this.props.navigation.goBack();
    };

    _onPressGoTNCAccommodation = () => {
        this.props.navigation.navigate("Tnc_Accommodation");
    };

    _onPressGoTNCLifeStyle = () => {
        this.props.navigation.navigate("Tnc_LifeStyle");
    };

    _onPressGoTNCLogistic = () => {
        this.props.navigation.navigate("Tnc_Logistic");
    };

    _onPressGoTNCTicketing = () => {
        this.props.navigation.navigate("Tnc_Ticketing");
    };

    _onPressGoTNCTourPackage = () => {
        this.props.navigation.navigate("Tnc_TourPackage");
    };

    _onPressGoTNCCashTerm = () => {
        this.props.navigation.navigate("Tnc_CashTerm");
    };

    _onPressGoTNCPDPP = () => {
        this.props.navigation.navigate("Tnc_PDPP");
    };

    render() {
        const { lang } = this.props;

        return (
            <Container style={Styles.container}>
                <MHeader hasBack onPressHeaderLeft={this._onPressGoBack} />

                <Content>
                    <View style={[Styles.cardContainer, Styles.center]}>
                        <Icon name="book" type="FontAwesome" style={{ color: "#f64f60" }} />
                        <View style={{ marginTop: 10 }}><Text note>{lang === 'ZH-CN' ? '条规与条款' : lang === 'EN' ? 'Terms & Conditions' : lang === 'ZH-TW' ? '條规与條款' : lang === 'JP' ? '利用規約' : lang === 'KR' ? '사용조건' : lang === 'TH' ? 'ข้อกำหนดและเงื่อนไข' : '条规与条款'}</Text></View>

                    </View>

                    <Form style={{ marginRight: 10 }}>
                        <Button full style={{ marginLeft: 10, backgroundColor: "#fff", borderRadius: 8, marginBottom: 5 }} onPress={this._onPressGoTNCAccommodation} >
                            <Text style={{ color: "#000" }}>
                                {lang === 'ZH-CN' ? '住宿条例' : lang === 'EN' ? 'Accommodation T&C' : lang === 'ZH-TW' ? '住宿條例' : lang === 'JP' ? '宿泊施設規約' : lang === 'KR' ? '숙소 이용조건' : lang === 'TH' ? 'เงื่อนไขและข้อตกลงสำหรับการจองห้องพัก' : '住宿条例'}
                            </Text>
                        </Button>
                        <Button full style={{ marginLeft: 10, backgroundColor: "#fff", borderRadius: 8, marginBottom: 5 }} onPress={this._onPressGoTNCLifeStyle} >
                            <Text style={{ color: "#000" }}>
                                {lang === 'ZH-CN' ? '生活时尚条例' : lang === 'EN' ? 'Lifestyle T&C' : lang === 'ZH-TW' ? '生活時尚條例' : lang === 'JP' ? 'ライフスタイル規約' : lang === 'KR' ? '라이프스타일 이용조건' : lang === 'TH' ? 'เงื่อนไขและข้อตกลงสำหรับการจองสันทนาการ' : '生活时尚条例'}
                            </Text>
                        </Button>
                        <Button full style={{ marginLeft: 10, backgroundColor: "#fff", borderRadius: 8, marginBottom: 5 }} onPress={this._onPressGoTNCLogistic} >
                            <Text style={{ color: "#000" }}>
                                {lang === 'ZH-CN' ? '物流条例' : lang === 'EN' ? 'Logistic T&C' : lang === 'ZH-TW' ? '物流條例' : lang === 'JP' ? '物流規約' : lang === 'KR' ? '물류 이용조건' : lang === 'TH' ? 'เงื่อนไขและข้อตกลงสำหรับการจองบริการรถรับส่ง' : '物流条例'}
                            </Text>
                        </Button>
                        <Button full style={{ marginLeft: 10, backgroundColor: "#fff", borderRadius: 8, marginBottom: 5 }} onPress={this._onPressGoTNCTicketing} >
                            <Text style={{ color: "#000" }}>
                                {lang === 'ZH-CN' ? '门票条例' : lang === 'EN' ? 'Ticketing T&C' : lang === 'ZH-TW' ? '門票條例' : lang === 'JP' ? 'チケット規約' : lang === 'KR' ? '티케팅 이용조건' : lang === 'TH' ? 'เงื่อนไขและข้อตกลงสำหรับการจองตั๋วเข้าชม' : '门票条例'}
                            </Text>
                        </Button>
                        <Button full style={{ marginLeft: 10, backgroundColor: "#fff", borderRadius: 8, marginBottom: 5 }} onPress={this._onPressGoTNCTourPackage} >
                            <Text style={{ color: "#000" }}>
                                {lang === 'ZH-CN' ? '旅游条例' : lang === 'EN' ? 'Tour T&C' : lang === 'ZH-TW' ? '旅遊條例' : lang === 'JP' ? 'ツアー規約' : lang === 'KR' ? '투어 패키지 이용조건' : lang === 'TH' ? 'เงื่อนไขและข้อตกลงสำหรับการจองทัวร์แพ็คเกจ' : '旅游条例'}
                            </Text>
                        </Button>
                        <Button full style={{ marginLeft: 10, backgroundColor: "#fff", borderRadius: 8, marginBottom: 5 }} onPress={this._onPressGoTNCCashTerm} >
                            <Text style={{ color: "#000" }}>
                                {lang === 'ZH-CN' ? '现金付款条例' : lang === 'EN' ? 'Cash Payment T&C' : lang === 'ZH-TW' ? '現金付款條例' : lang === 'JP' ? '支払規約' : lang === 'KR' ? '현금 결제 이용조건' : lang === 'TH' ? 'ข้อกำหนดและเงื่อนไขการชำระเงินด้วยเงินสด' : '现金付款条例'}
                            </Text>
                        </Button>
                        <Button full style={{ marginLeft: 10, backgroundColor: "#fff", borderRadius: 8, marginBottom: 5 }} onPress={this._onPressGoTNCPDPP} >
                            <Text style={{ color: "#000" }}>
                                {lang === 'ZH-CN' ? '个人资料私隐政策' : lang === 'EN' ? 'Personal Data Privacy Policy' : lang === 'ZH-TW' ? '個人資料隱私政策' : lang === 'JP' ? '個人情報保護' : lang === 'KR' ? '개인정보 이용조건' : lang === 'TH' ? 'นโยบายส่วนบุคคลและข้อมูลส่วนบุคคล' : '个人资料私隐政策'}
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

export default connect(mapStateToProps)(Tnc);