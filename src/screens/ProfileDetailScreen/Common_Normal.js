/* @flow */

import React, { Component } from "react";
import { Container, View, Text, Content, Icon, Button, Form } from "native-base";
import { connect } from "react-redux";

import Styles from "./ProfileDetail.style";
import MHeader from "../../components/mHeader/mHeader";

type Props = {
    navigation: any,
    lang: string
};

class Common_Normal extends Component<Props> {

    constructor() {
        super();

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
                        <View ><Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                            {lang === 'ZH-CN' ? '一般疑问' : lang === 'EN' ? 'General' : lang === 'ZH-TW' ? '一般疑問' : lang === 'JP' ? '一般' : lang === 'KR' ? '일반적인' : lang === 'TH' ? 'ทั่วไป' : '一般疑问'}
                        </Text></View>
                    </View>

                    <Form style={{ marginLeft: 10, marginRight: 10 }}>
                        {lang === 'ZH-CN' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问 :MTravel的线上客服工作时间是？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答 :我们的工作时间是：
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        星期一至星期五，上午十点至傍晚七点（马来西亚时间）
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        星期六与星期日，上午九点至傍晚六点（马来西亚时间）
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问 :想注册成为商家。
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答 :关于如何和我们合作，想要注册成为商家的伙伴，请填写表格，并电邮至 merchant@trip4asia.com
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        表格链接如下：合作伙伴申请表格
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问 :我的预订失败，为什么我没有收到分数退款回我的账号？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答 :一旦顾客的预订被取消，最初用以付款的分数将会在一个小时内退款给顾客。如果没有收到退款，请及时截图并联系我们的客服。
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问 :我可以到哪里寻求帮助？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答 :通过M旅游应用，您可以点击客服并选择您适合的语言！我们的客服将在这里帮助您。另外，您可以电邮至cs@trip4asia.com。
                                </Text>
                                </View>
                            </View>
                        ) : lang === 'EN' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : What is our live-chat customer service operating hours?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A : Our operating hours:
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Monday-Friday, 10AM-7PM (Malaysia local time).
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        Saturday & Sunday, 9AM-6PM (Malaysia local time).
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : How can I register as a merchant?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A : Please fill up the form and send to merchant@trip4asia.com
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        The link of the form: Merchant Application Form
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : I have an unsuccessful booking, however my reward points is not refunded yet.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A : Once your booking is cancelled, the initial redeemed points used for the booking will be refunded within 1 hour. Please provide us screenshots of your account transactions if reward points is not refunded within the stated time.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : Where to find more assistance?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A : Just by using MTravel app, click on "CS" and choose your language to initiate a live chat. Alternatively drop us an email at cs@trip4asia.com and our Customer Services team will be there to assist you.
                                </Text>
                                </View>
                            </View>
                        ) : lang === 'ZH-TW' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：MTravel的線上客服工作時間是？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答：我們的工作時間是：
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        星期一至星期五，上午十點至傍晚七點(馬來西亞時間).
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        星期六與星期日，上午九點至傍晚六點（馬來西亞時間).
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：想註冊成為商家.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答：關於如何和我們合作，想要註冊成為商家的伙伴，請填寫表格，並電郵至merchant@trip4asia.com
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        表格鏈接如下：合作夥伴申請表格
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：我的預訂失敗，為什麼我沒有收到分數退款回我的賬號？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：一旦顧客的預訂被取消，最初用以付款的分數將會在一個小時內退款給顧客。如果沒有收到退款，請及時截圖並聯繫我們的客服。
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：我可以到哪裡尋求幫助？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答：通過M旅遊應用，您可以點擊客服並選擇您適合的語言！我們的客服將在這裡幫助您。另外，您可以電郵至cs@trip4asia.com.
                                </Text>
                                </View>
                            </View>
                        ) : lang === 'JP' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q：ライブチェットの営業時間は？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A：月曜日ー金曜日　10:00-19:00(マレーシア時間）
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        土曜日、日曜日　9:00-18:00(マレーシア時間）
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q：商業登録はどのようにできますか？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A：こちらのリンクMerchant Application Formからフォームを記入しmerchant@trip4asia.comまでご連絡下さい。
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q：リワードポイントが返金されません。
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A：予約キャンセル1時間以内にポイントは返金されます。返金されない場合はアカウント処理の画面をスクリーンショットし、ご連絡下さい.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:：アシスタントが必要な時はどこで探せますか？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A：Mtravelアプリのカスタマーサービスからライブチャットがでいます。もしくはcs@trip4asia.comまでご連絡下さい。
                                </Text>
                                </View>
                            </View>
                        ) : lang === 'KR' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : What is our live-chat customer service operating hours?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A : Our operating hours:
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Monday-Friday, 10AM-7PM (Malaysia local time).
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        Saturday & Sunday, 9AM-6PM (Malaysia local time).
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : How can I register as a merchant?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A : Please fill up the form and send to merchant@trip4asia.com
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        The link of the form: Merchant Application Form
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : I have an unsuccessful booking, however my reward points is not refunded yet.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A : Once your booking is cancelled, the initial redeemed points used for the booking will be refunded within 1 hour. Please provide us screenshots of your account transactions if reward points is not refunded within the stated time.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : Where to find more assistance?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A : Just by using MTravel app, click on "CS" and choose your language to initiate a live chat. Alternatively drop us an email at cs@trip4asia.com and our Customer Services team will be there to assist you.
                                </Text>
                                </View>
                            </View>
                        ) : lang === 'TH' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q：คำถาม: เวลาทำการของแผนกบริการลูกค้าในการสนทนาสดคือกี่โมง?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A：คำตอบ: เวลาทำการของเรา:
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        วันจันทร์ - ศุกร์เวลา 10.00 - 19.00 น. (เวลาท้องถิ่นในประเทศมาเลเซีย)
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        วันเสาร์และวันอาทิตย์เวลา 9.00 - 18.00 น (เวลาท้องถิ่นในประเทศมาเลเซีย)
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q：คำถาม: ฉันจะลงทะเบียนเป็นผู้ประกอบการร้านค้าได้อย่างไร?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A：คำตอบ: กรุณากรอกแบบฟอร์มและส่งไปที่ merchant@trip4asia.com
        ลิงค์ของแบบฟอร์ม: ลงทะเบียนผู้ประกอบการค้า
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q：คำถาม: ระบบยืนยันว่าการจองของฉันไม่สำเร็จ แต่คะแนนสะสมยังไม่ได้รับคืน
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A：คำตอบ: เมื่อการจองของท่าถูกยกเลิกแล้วคะแนนสะสมที่ใช้ในการจองจะได้รับคืนภายใน 1 ชั่วโมง โปรดถ่ายภาพหน้าจอของธุรกรรมบัญชีของคุณหากคะแนนสะสมที่ใช้ไปยังไม่ได้รับคืนภายในเวลาดังกล่าว
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q：คำถาม: จะขอความช่วยเหลือเพิ่มเติมได้ที่ไหน?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A：ตอบ: เพียงแค่ใช้แอป MTravel แล้วกดที่ "ฝ่ายบริการลูกค้า" และเลือกภาษาของคุณเพื่อเริ่มการสนทนาสด หรือส่งอีเมลถึงเราที่ cs@trip4asia.com และทีมบริการลูกค้าของเราจะคอยช่วยเหลือคุณ
                                </Text>
                                </View>
                            </View>

                        ) : (
                                                    <View >
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问 :MTravel的线上客服工作时间是？
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                答 :我们的工作时间是：
                                    </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                星期一至星期五，上午十点至傍晚七点（马来西亚时间）
                                    </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                星期六与星期日，上午九点至傍晚六点（马来西亚时间）
                                    </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问 :想注册成为商家。
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                答 :关于如何和我们合作，想要注册成为商家的伙伴，请填写表格，并电邮至 merchant@trip4asia.com
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                表格链接如下：合作伙伴申请表格
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问 :我的预订失败，为什么我没有收到分数退款回我的账号？
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答 :一旦顾客的预订被取消，最初用以付款的分数将会在一个小时内退款给顾客。如果没有收到退款，请及时截图并联系我们的客服。
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问 :我可以到哪里寻求帮助？
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                答 :通过M旅游应用，您可以点击客服并选择您适合的语言！我们的客服将在这里帮助您。另外，您可以电邮至cs@trip4asia.com。
                                </Text>
                                                        </View>
                                                    </View>

                                                )}

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

export default connect(mapStateToProps)(Common_Normal);
