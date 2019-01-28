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

class Common_Transport extends Component<Props> {

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
                        <View ><Text style={{ fontWeight: 'bold', fontSize: 20 }}> {lang === 'ZH-CN' ? '交通' : lang === 'EN' ? 'Transportation' : lang === 'ZH-TW' ? '交通' : lang === 'JP' ? '輸送' : lang === 'KR' ? '교통' : lang === 'TH' ? 'บริการรถรับส่ง' : '交通'}</Text></View>
                    </View>

                    <Form style={{ marginLeft: 10, marginRight: 10 }}>
                        {lang === 'ZH-CN' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：我想要预订接送服务.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：您可以通过我们的官网 - transport.mtravelclub.com ,或是手机APP进行预订.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：成功下单后，需要多久时间MTravel才会确认我的预订？
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：大多数预订将在接送日期的3个工作日前确认.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：预订已成功，我能否修改我的预订资料？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答：顾客只允许修改联系人的名字以及资料，而不能修改接送日期以及时间.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        这是因为新日期/时间的价格会和旧的有出入。（价格会因为旺季以及繁忙时间有所提升.）
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：我什么时候可以得到司机的资料？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：顾客将在接送日期的前1-2天通过邮件收到司机的资料.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：我能否取消我的交通预定？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答：若该预订依然待定（并在接送日期的三个工作日前），顾客将被允许取消.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        顾客必须填写相关表格并电邮到我们客服的电邮地址: cs@trip4asia.com.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        若该预订已被第三方（负责单位方面）批准，或者MTravel已批准该预订，顾客将无法取消原有的预订.
                                </Text>
                                </View>
                            </View>
                        ) : lang === 'EN' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: I would like to book for pick-up service.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: You may book through our MTravel app or website (https://transport.mtravelclub.com/)
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: How long does it take for my booking to be confirmed?
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: It will usually take around 3 days prior pick-up date. However we would recommend guest to book as soon as possible on their available time.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: Can I make any changes for my successful booking?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A: You're only able to change the guest details but not the pick-up date, due to fluctuating rates.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        这是因为新日期/时间的价格会和旧的有出入。（价格会因为旺季以及繁忙时间有所提升.）
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: Is there any information of my driver?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: Driver's information will be sent to you e-mail within 1-2 days prior to your pick-up date.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: Can I cancel my booking?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A: Booking still can be cancelled before it's a successful booking. Filling the form provided and e-mail to our customer service e-mail address at cs@trip4asia.com in 3 working days prior to pick-up date. However if the reservation has been confirmed by our supplier reservation has been confirmed, the booking can’t be cancelled.
                                </Text>
                                </View>

                            </View>
                        ) : lang === 'ZH-TW' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：我想要預訂接送服務.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：您可以通過我們的官網 - transport.mtravelclub.com ,或是手機APP進行預訂.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：成功下單後，需要多久時間MTravel才會確認我的預訂？
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：大多數預訂將在接送日期的3個工作日前確認.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：預訂已成功，我能否修改我的預訂資料？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答：顧客只允許修改聯繫人的名字以及資料，而不能修改接送日期以及時間.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        這是因為新日期/時間的價格會和舊的有出入。 （價格會因為旺季以及繁忙時間有所提升.）
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：我什麼時候可以得到司機的資料？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：顧客將在接送日期的前1-2天通過郵件收到司機的資料.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：我能否取消我的交通預定？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答：若該預訂依然待定（並在接送日期的三個工作日前），顧客將被允許取消.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        顧客必須填寫相關表格並電郵到我們客服的電郵地址: cs@trip4asia.com.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        若該預訂已被第三方（負責單位方面）批准，或者MTravel已批准該預訂，顧客將無法取消原有的預訂.
                                </Text>
                                </View>
                            </View>
                        ) : lang === 'JP' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:送迎を予約したいです.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:Mtravelアプリ、ウェブサイト(https://transport.mtravelclub.com/)からご予約下さい.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:予約完了するまでどのくらいかかりますか？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:約３営業日ですが、早めの予約をお勧め致します.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:予約完了後の変更はできますか？
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:お客様情報のみ変更できますが、日付変更などはできません.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:運転手の情報はありますか？
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:予約日から１－２日前にEmailにて送ります.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:キャンセルできますか？
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A:予約完了前のキャンセルは可能です。 3日前までにcs@trip4asia.comにご連絡ください。予約完了後のキャンセルはできません.
                            </Text>
                                </View>
                            </View>
                        ) : lang === 'KR' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 픽업 서비스를 예약하고 싶어요.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: - transport.mtravelclub.com사이트를 사용하거나 핸드폰 앱을 통해서 예약하세요.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문:예약을 완료한 후 언제 MTravel에서 저의 예약을 확인하나요?
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변:대부분은 픽업 3 근무일 전에 확인합니다.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문:예약을 완성한 후 예약 정보를 수정할 수 있나요?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변:고객은 연락인의 이름과 자료를 수정할 수 있지만 픽업 날짜와 시간은 수정할 수 없습니다. 날짜/ 시간이 다르면 가격이 달라지기 때문입니다.(계절과 성수기 비수기에 따라 가격이 달라집니다)
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문:기사의 자료를 언제 받을 수 있나요?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변:고객은 픽업 1-2일 전에 이메일을 통해서 기사의 자료를 받을 수 있습니다.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문:교통 예약을 취소할 수 있나요?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        답변:예약이 대기 상태(픽입 3 근무일 전)이면 예약을 취소할 수 있습니다. 고객은 반드시 관련 표를 작성하여 고객 센터에 이메일로 보내야 합니다. cs@trip4asia.com 예약이 제3측(책임 부서) 혹은 MTravel에서 확인되었으면 고객을 예약을 취소할 수 없습니다.
                                </Text>
                                </View>
                            </View>
                        ) : lang === 'TH' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ฉันต้องการจองบริการรถรับส่ง
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        ตอบ: คุณสามารถจองผ่านแอปพลิเคชั่น MTravel หรือเว็บไซต์ของเรา https://transport.mtravelclub.com/
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำตอบ: ระบบใช้เวลานานเท่าไรในการยืนยันการจองของฉัน?
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: ปกติแล้วจะใช้เวลาประมาณ 3 วันก่อนวันใช้บริการรถรับส่ง อย่างไรก็ตามเราขอแนะนำให้คุณจองแต่เนิ่น ๆ หากมีเวลาว่าง
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: หลังจากที่ระบบได้ทำการยืนยันการจองให้ฉัน ฉันสามารถเปลี่ยนแปลงรายละเอียดการจองได้อีกหรือไม่?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: คุณสามารถเปลี่ยนรายละเอียดของผู้ใช้บริการได้ แต่ไม่ใช่วันรับบริการเนื่องจากความผันผวนของราคา
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: มีข้อมูลเกี่ยวกับคนขับให้หรือไม่?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: ข้อมูลของผู้ขับขี่จะถูกส่งถึงคุณทางอีเมล์ภายใน 1-2 วันก่อนวันให้บริการ
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ฉันสามารถยกเลิกการจองได้หรือไม่?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำตอบ: คุณสามารถยกเลิกการจองได้ก่อนที่สถานะการจองจะเปลี่ยนเป็นสำเร็จ กรอกแบบฟอร์มการขอยกเลิกการจองที่จัดเตรียมไว้และอีเมล์ไปที่ฝ่ายบริการลูกค้าของเราที่ cs@trip4asia.com ภายใน 3 วันทำการก่อนวันที่รับบริการ อย่างไรก็ตามหากการจองได้รับการยืนยันโดยตัวแทนของเราแล้วเราไม่สามารถยกเลิกการจองได้
                                </Text>
                                </View>
                            </View>

                        ) : (
                                                    <View >
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：我想要预订接送服务.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：您可以通过我们的官网 - transport.mtravelclub.com ,或是手机APP进行预订.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：成功下单后，需要多久时间MTravel才会确认我的预订？
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：大多数预订将在接送日期的3个工作日前确认.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：预订已成功，我能否修改我的预订资料？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                答：顾客只允许修改联系人的名字以及资料，而不能修改接送日期以及时间.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                这是因为新日期/时间的价格会和旧的有出入。（价格会因为旺季以及繁忙时间有所提升.）
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：我什么时候可以得到司机的资料？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：顾客将在接送日期的前1-2天通过邮件收到司机的资料.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：我能否取消我的交通预定？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                答：若该预订依然待定（并在接送日期的三个工作日前），顾客将被允许取消.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                顾客必须填写相关表格并电邮到我们客服的电邮地址: cs@trip4asia.com.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                若该预订已被第三方（负责单位方面）批准，或者MTravel已批准该预订，顾客将无法取消原有的预订.
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

export default connect(mapStateToProps)(Common_Transport);