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

class Common_Entertainment extends Component<Props> {

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
                            {lang === 'ZH-CN' ? '休闲娱乐' : lang === 'EN' ? 'Leisure' : lang === 'ZH-TW' ? '休閒娛樂' : lang === 'JP' ? '余暇' : lang === 'KR' ? '레져' : lang === 'TH' ? 'สันทนาการ' : '休闲娱乐'}
                        </Text></View>
                    </View>

                    <Form style={{ marginLeft: 10, marginRight: 10 }}>
                        {lang === 'ZH-CN' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问: 我想要预定门票
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答: 请浏览我们的网站 https://ticket.mtravelclub.com 或者下载我们的 MTRAVEL APP.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        选择您想要的配套，日期以及人数.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        点击预定并支付订单.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问: 如何使用 MTravel 票卷以及电子门票？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答: 订单确认后，电子门票将会发到您邮箱并需要您打印出来.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        使用方式可以查看电子门票或者产品内容.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问: 应该提前几天预定门票呢？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答: 我们建议提前3天 (72 小时) 下预定.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问: 是否可以取消预定呢？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答: 若该订单已被批准，将无法取消订单.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        如有需要，您能联系客服以更换日期.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问: 预定门票之后，需要多久时间才会收到票卷？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答: 所有活动的回复时间不一，但是都将于72小时内得到回复.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问: 请问我需要在指定日期使用票卷吗？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答: 活动，演唱会或者课程都必须在指定日期使用票卷，否则作废.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        至于游乐园门票都有一段有效日期， 必须要在有效日期使用，否则作废.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问: 如果活动预订之后我一直没有收到确认邮件，该怎么办？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答: 请查看预订是否“待定”或联系我们的客服.
                                </Text>
                                </View>
                            </View>
                        ) : lang === 'EN' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: How can i book an activity?
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A: Please visit our website https://ticket.mtravelclub.com.
                                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Find your preferred activity, select the relevant package, date and quantity.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        Click "Book" and continue to the payment page and start your adventure!
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: How do i use MTravel Voucher or E-Tickets?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A: Once your booking is confirmed and successful, an e-voucher will be sent to your email for you to print.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        Instructions of redeeming voucher will shown inside the voucher or you can refer to the activity info.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: How many days in advance do I have to to make bookings?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: Preferably 3 days prior to activity day.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: Can I cancel my booking?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A: Once your booking confirmed, cancelation process is not allowed.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        You can request for date amendment, please contact our customer service for further clarification.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: After I make a booking, how long will I wait to receive my voucher?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: Activities differs for each product, as well as time needed to revert back. However all activity bookings will be reverted within 72 working hours.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: Do I have to use my voucher on a particular date?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A: For most of the events, concerts and courses, your voucher is only valid on the date selected.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        For most of the attraction tickets you are granted entry to the attraction on any dates before the end of validity date.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: I booked an activity but I have not received a confirmation by e-mail. What should I do?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: Please check your account for pending bookings or contact our customer service for further clarification.
                            </Text>
                                </View>
                            </View>
                        ) : lang === 'ZH-TW' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問: 我想要預定門票
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答: 請瀏覽我們的網站 https://ticket.mtravelclub.com 或者下載我們的 MTRAVEL APP.
                                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        選擇您想要的配套，日期以及人數.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        點擊預定並支付訂單.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問: 如何使用 MTravel 票卷以及電子門票？
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答: 訂單確認後，電子門票將會發到您郵箱並需要您打印出來.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        使用方式可以查看電子門票或者產品內容.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問: 應該提前幾天預定門票呢？
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答: 我們建議提前3天 (72 小時) 下預定.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問: 是否可以取消預定呢？
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答: 若該訂單已被批准，將無法取消訂單.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        如有需要，您能聯繫客服以更換日期.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問: 預定門票之後，需要多久時間才會收到票卷？
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答: 所有活動的回复時間不一，但是都將於72小時內得到回复.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問: 請問我需要在指定日期使用票卷嗎？
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答: 活動，演唱會或者課程都必須在指定日期使用票卷，否則作廢.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        至於遊樂園門票都有一段有效日期， 必須要在有效日期使用，否則作廢.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問: 如果活動預訂之後我一直沒有收到確認郵件，該怎麼辦？
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答: 請查看預訂是否“待定”或聯繫我們的客服.
                            </Text>
                                </View>
                            </View>
                        ) : lang === 'JP' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:アクティビティの予約方法は？
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:ウェブサイト( https://ticket.mtravelclub.com)からお好きなのを選び日付など入力し予約、決済して下さい.
                                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:Mtravelバウチャー、Eチケットはどのように使用できますか？
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A:予約完了後にEmailにてバウチャーをお送りいたしますのでプリントアウトして下さい.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        使い方、商品内容などはバウチャー内もしくわアクティビティインフォメーションで確認下さい.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:何日前に予約しないといけないですか？
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:3日前までには予約して下さい.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:キャンセルできますか？
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A:キャンセルできません.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        日付変更したい場合はカスタマーサービスまでご連絡下さい.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:バウチャーが届くまでどのくらいかかりますか？
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:商品によって異なりますが、72時間以内には完了します.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:日付指定しないといけないですか？
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:イベント、コンサート、コースなどは日付指定されていますが、アトラクションチケットなどは有効期限内ならいつでも使用できます。
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:アクティビティを予約し、確認メールが届かない場合、どうすれば良いですか？
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:予約途中の可能性があります。もしくはカスタマーサービスへご連絡下さい.
                            </Text>
                                </View>
                            </View>
                        ) : lang === 'KR' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 입장권을 예약하고 싶어요?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 사이트  https://ticket.mtravelclub.com을 검색하거나  MTRAVEL 앱을 다운하한 다음 패키지, 날짜와 몇명인지를 선택한다음 금액을 납부하세요.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: MTravel의 입장권과 쿠폰을 어떻게 사용해야 하나요?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        답변: 예약이 확인되면 전자 티켓은 이메일을 통해서 인쇄할 수 있어요.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        상용 방식은 티켓 혹은 상품 내용에서 파악하세요.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 몇 일 전에 예약해야 하나요?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 3일(72시간) 전에 예약하는 것을 추천합니다.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 예약을 취소할 수 있나요?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        답변: 예약이 확인되면 취소할 수 없습니다.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        수요가 있으면 고객 센터로 연락하여 날짜를 바꿀 수 있습니다.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 입장권을 예약한 후 언제 입장권을 받을 수 있나요?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 행사에 따라 확인 시간이 다르지만 일반적으로 72시간 내에 연락을 드릴겁니다.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 지정한 날짜에 입장권을 사용해야 하나요?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        답변: 행사, 콘서트 혹은 과정은 반드시 지정한 날짜에 사용해야 합니다. 시간이 지나면 무효입니다.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        놀이 공원 티켓은 일정한 유효 기간이 있습니다. 유효 기간을 지나면 뮤효입니다.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 행사를 예약한 후 확인 이메일을 받지 못하면 어떻게 해야 하나요?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 예약이 ""대기"" 상태인지를 확인한 후 고객 센터로 연락하세요.
                        </Text>
                                </View>
                            </View>
                        ) : lang === 'TH' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ฉันจะจองกิจกรรมได้อย่างไร?
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำตอบ: คุณสามารถเยี่ยมชมเว็บไซต์ https://ticket.mtravelclub.com ของเรา
                                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        เพื่อค้นหากิจกรรมที่คุณต้องการเลือกแพคเกจวันที่และจำนวนที่ต้องการ
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คลิก "จอง" และไปที่หน้าการชำระเงินต่อไปเพื่อเริ่มต้นการผจญภัยของคุณ!
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ฉันจะใช้บัตรกำนัลที่ทาง Mtravel ส่งให้ทางอีเมล์ได้อย่างไร?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำตอบ: เมื่อการจองได้รับการยืนยันและประสบความสำเร็จแล้วบัตรกำนัลจะถูกส่งไปยังอีเมลของคุณเพื่อให้คุณพิมพ์
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำแนะนำในการแลกของกำนัลจะแสดงอยู่ในคูปองหรือคุณสามารถดูข้อมูลกิจกรรมได้จากทางเว็บไซด์
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ฉันต้องจองล่วงหน้ากี่วัน?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: ควรใช้เวลาอย่างน้อย 3 วันก่อนวันที่ต้องการไปร่วมกิจกรรม
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ฉันสามารถยกเลิกการจองได้หรือไม่?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำตอบ: เมื่อจองห้องพักได้รับการยืนยันแล้วจะไม่สามารถยกเลิกการจองได้
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คุณสามารถขอแก้ไขวันที่จะเข้าร่วมกิจกรรมได้ กรุณาติดต่อฝ่ายบริการลูกค้าเพื่อขอรายละเอียดเพิ่มเติม
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: หลังจากทำการจองแล้วฉันต้องรอการยืนยันนานเท่าไหร่?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: ขึ้นอยู่กับประเภทของกิจกรรมนั้น ๆ รวมถึงเวลาที่ใช้ในการตอบกลับ อย่างไรก็ตามการจองกิจกรรมทั้งหมดจะตอบกลับภายใน 72 ชั่วโมงทำงาน
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ฉันต้องใช้บัตรกำนัลในวันที่ระบุหรือไม่?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำตอบ: สำหรับกิจกรรมคอนเสิร์ตและหลักสูตรส่วนใหญ่บัตรกำนัลของคุณจะใช้ได้เฉพาะวันที่ที่ระบุในบัตรเท่านั้น
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        สำหรับบัตรผ่านประตูสถานที่ท่องเที่ยวส่วนใหญ่คุณจะได้รับสิทธิ์เข้าใช้สถานที่ท่องเที่ยวก่อนวันหมดอายุที่ระบุอยู่บนบัตร
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ฉันทำการจองกิจกรรมไว้ แต่ฉันยังไม่ได้รับการยืนยันทางอีเมล์ ฉันควรทำอย่างไร?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        ตอบ: กรุณาตรวจสอบบัญชีของคุณสำหรับสถานะการจองที่รอดำเนินการหรือติดต่อฝ่ายบริการลูกค้าเพื่อขอรายละเอียดเพิ่มเติม
                            </Text>
                                </View>
                            </View>

                        ) : (
                                                    <View >
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问: 我想要预定门票
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                答: 请浏览我们的网站 https://ticket.mtravelclub.com 或者下载我们的 MTRAVEL APP.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                选择您想要的配套，日期以及人数.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                点击预定并支付订单.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问: 如何使用 MTravel 票卷以及电子门票？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                答: 订单确认后，电子门票将会发到您邮箱并需要您打印出来.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                使用方式可以查看电子门票或者产品内容.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问: 应该提前几天预定门票呢？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答: 我们建议提前3天 (72 小时) 下预定.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问: 是否可以取消预定呢？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                答: 若该订单已被批准，将无法取消订单.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                如有需要，您能联系客服以更换日期.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问: 预定门票之后，需要多久时间才会收到票卷？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答: 所有活动的回复时间不一，但是都将于72小时内得到回复.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问: 请问我需要在指定日期使用票卷吗？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                答: 活动，演唱会或者课程都必须在指定日期使用票卷，否则作废.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                至于游乐园门票都有一段有效日期， 必须要在有效日期使用，否则作废.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问: 如果活动预订之后我一直没有收到确认邮件，该怎么办？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答: 请查看预订是否“待定”或联系我们的客服.
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

export default connect(mapStateToProps)(Common_Entertainment);