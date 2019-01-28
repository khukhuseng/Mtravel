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
class Common_TourPackage extends Component<Props> {

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
                            {lang === 'ZH-CN' ? '旅游配套' : lang === 'EN' ? 'Packages' : lang === 'ZH-TW' ? '旅遊配套' : lang === 'JP' ? 'パッケージ' : lang === 'KR' ? '패키지' : lang === 'TH' ? 'แพคเกจ' : '旅游配套'}
                        </Text></View>
                    </View>

                    <Form style={{ marginLeft: 10, marginRight: 10 }}>
                        {lang === 'ZH-CN' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：网上预订和通过电子邮件/电话预订有什么区别？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：网上预订是一个自助服务设施，所以频台上显示的价格较为优惠。 至于通过电子邮件或电话的预订，每人或每项交易都需收取额外RM60的服务费.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：我该如何预订？
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：会员账号需要预约。 一旦您创建了账号，从频台内搜索和选择你理想的旅游配套。 输入旅客的资料（包括护照资料）和付款资料。 您将及时收到一封电邮通知，确认我们已收到您的预订和付款。接着，您将收到第二封电邮确认您的订单，邮件内将含链接供您下载您的旅游券.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：我还未收到我的预订确认邮件。 我的预订完成了吗？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：每单预定，您将收到两封电邮。第一封电邮是确认我们已收到您的预订和付款。 第二封电邮是确认您的预订，并提供链接供您下载您的旅游券。 如果您没收到任何电邮，请查看你的垃圾邮件。 您也可在会员账号内查看您的预订状态。 备注：旅游配套将需要更长时间确认.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：请问配套内包含了什么？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答：我们有两种旅游配套：
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        1. 旅游配套包括经济舱双程机票，住宿，餐饮，交通，景点观光，机场与酒店接送和导游。 价格不含签证费，旅游保险，导游小费，机场税及可选旅游项目等.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        2.地面配套只包含住宿，餐饮，机场与酒店接送.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        （Trip4Asia Travel Sdn Bhd只是作为上述旅游配套的代理机构代收配套费，因此旅客须遵守相关机构的条款和条件.）
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：请问我需要提前多少天预定旅游配套？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答： 您需在出发前的45天前做预定。建议您在该团出发前的两个月预定，以方便我们为您安排签证申请及旅游配套的安排等.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：我可否在我的订单做出修改？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答： 请联系负责人/客服人员进行预订修改.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        备注：1.如果我们已确认并确认并敲定您的旅游配套，则不允许修改.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        2.一旦您的订单已确认，是不允许修改修改日期/更换配套的.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：我可否取消我的旅游配套预订？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答：请联系负责人/客服预订取消.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        备注：预订核准或确认后，不得取消。否则，将不退還任何費用。请您联系负责人/客服，并提供取消原因（及相关证明文件）.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：我该如何做修改？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答:旅游配套的日期，行程和住宿已经确认的，将无法做任何更改。对于延期请求，请联系负责人/客服。任何偏差请求将视情况而定.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：我该如何支付旅游配套？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：我们将收取押金以为您保留座位。 一旦确认成团，我们将通过电邮或微信发出通知。 您可登录网站，并转移余额付款.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：请问该旅游配套的航班是？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答：航班时间随时会有更改，频台的航班行程也不构成为合同的一部分。以旅客的安全等原因为前提，在政府机关的建议下航班会随时做出修改.
                                </Text>
                                </View>
                            </View>
                        ) : lang === 'EN' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : What is the difference between booking online and through email/phone?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A : We offer the best prices for bookings made online, as it is a self service facility. Booking through email or phone will be charge additional RM60 service fee per person/transaction.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : How do I make reservations?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A : An member account is required to make reservations. Once your account has been created, search and select from our comprehensive travel offerings. Enter the traveller\'s information (including passport information, if required) and payment information. You will receive an email to acknowledge that we have received your reservations request and payment, followed by another email confirming your reservations and a link to download your travel vouchers.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : I have not received my reservations confirmation email. Is my reservation completed?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A : You will receive two emails whenever you make your reservations with us.The first email acknowledges that we have received your reservations request and payment. The second email, confirms your reservations and provides a link to download your travel vouchers. If you do not see the email, you might want to check to ensure the email was not delivered to your junk/spam folder. You may also check the status of your reservations in your member account. Please note: Tour products may take longer to confirm.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : What does package include?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A : We have 2 type package :-
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        1. Tour package will include with return economy class flight air ticket, accommodation, meal, transportation, sightseeing tour, transfers between airport and hotel with tour leader/manager. Excluded visa fees, travel insurance, guide tipping, airport taxes, optional tour and etc.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        2. Ground package only included accommodation , meal , transfer between airport and hotel .
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        (Trip4Asia Travel Sdn Bhd is only acting as an agency to collect the above charges therefore it is subject to the Terms and Conditions of the respective authorities.)
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : How many days do I need to book in advance?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A : Reservation has to be done minimum 45 days prior to departure date. It would be better if the guest can made reservation 2 months in advance. (Reason: time taken for visa application / finalize the tour)
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : Can I make amendment for my booking?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A  : Please contact person in charge / customer service for booking amendment.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        P/s: 1. Amendment is not allowed if we have confirmed and finalize the tour.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        2. Date changes / package changes are not allowed once we process and confirm the new booking.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : Can I cancel my travel package booking?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A : Please contact person in charge / customer service booking cancellation.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        P/s: NO cancellation is allowed after the booking is approved or confirmed. Otherwise, tour fare will be fully forfeited. Please contact person in charge / customer service and provide reason(s) (with supporting document, if available) for the cancellation.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : How can I make changes?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A : The travelling date, itinerary and accommodation for group tour are fixed. These changes are strictly not allowed. For extend stay request, kindly contact the person in charge / customer service. Deviation request is subject to availability.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : How to make payment for the travel package?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A : We will collect deposit for new booking to secure the seat. Once the tour confirmed departure, notification will send to you (email or wechat). You may login to website and transfer the balance payment accordingly.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : What is the flight for the tour?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A : Flight timing and schedules are not guaranteed and do not form part of the contract. They are subject to change at the insistence of the Aviation of Government Authorities for the Tour Member’s safety, security and other reasons.
                            </Text>
                                </View>
                            </View>
                        ) : lang === 'ZH-TW' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：網上預訂和通過電子郵件/電話預訂有什麼區別？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：網上預訂是一個自助服務設施，所以頻台上顯示的價格較為優惠。至於通過電子郵件或電話的預訂，每人或每項交易都需收取額外RM60的服務費.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：我該如何預訂？
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：會員賬號需要預約。一旦您創建了賬號，從頻台內搜索和選擇你理想的旅遊配套。輸入旅客的資料（包括護照資料）和付款資料。您將及時收到一封電郵通知，確認我們已收到您的預訂和付款。接著，您將收到第二封電郵確認您的訂單，郵件內將含鏈接供您下載您的旅遊券.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：我還未收到我的預訂確認郵件。我的預訂完成了嗎？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：每單預定，您將收到兩封電郵。第一封電郵是確認我們已收到您的預訂和付款。第二封電郵是確認您的預訂，並提供鏈接供您下載您的旅遊券。如果您沒收到任何電郵，請查看你的垃圾郵件。您也可在會員賬號內查看您的預訂狀態。備註：旅遊配套將需要更長時間確認.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：請問配套內包含了什麼？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答：我們有兩種旅遊配套：
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        1. 旅遊配套包括經濟艙雙程機票，住宿，餐飲，交通，景點觀光，機場與酒店接送和導遊。價格不含簽證費，旅遊保險，導遊小費，機場稅及可選旅遊項目等.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        2.地面配套只包含住宿，餐飲，機場與酒店接送.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        （Trip4Asia Travel Sdn Bhd只是作為上述旅遊配套的代理機構代收配套費，因此旅客須遵守相關機構的條款和條件.）
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：請問我需要提前多少天預定旅遊配套？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答： 您需在出發前的45天前做預定。建議您在該團出發前的兩個月預定，以方便我們為您安排簽證申請及旅遊配套的安排等.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：我可否在我的訂單做出修改？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答： 請聯繫負責人/客服人員進行預訂修改.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        備註：1.如果我們已確認並確認並敲定您的旅遊配套，則不允許修改.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        2.一旦您的訂單已確認，是不允許修改修改日期/更換配套的.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：我可否取消我的旅遊配套預訂？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答：請聯繫負責人/客服預訂取消.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        備註：預訂核准或確認後，不得取消。否則，將不退還任何費用。請您聯繫負責人/客服，並提供取消原因（及相關證明文件）.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：我該如何做修改？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答:旅遊配套的日期，行程和住宿已經確認的，將無法做任何更改。對於延期請求，請聯繫負責人/客服。任何偏差請求將視情況而定.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：我該如何支付旅遊配套？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：我們將收取押金以為您保留座位。一旦確認成團，我們將通過電郵或微信發出通知。您可登錄網站，並轉移餘額付款.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：請問該旅遊配套的航班是？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答：航班時間隨時會有更改，頻台的航班行程也不構成為合同的一部分。以旅客的安全等原因為前提，在政府機關的建議下航班會隨時做出修改.
                        </Text>
                                </View>
                            </View>
                        ) : lang === 'JP' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:オンライン予約とメール/電話予約の違いは？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:オンライン予約の場合、お客様自身でやっていただくため安値価格で提供致します。メールや電話予約の場合はお一人様一回の取引でサービス料としてRM60かかります.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:どうやって予約する？
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:メンバーアカウントが必要です。アカウント作成後、旅行サービスから検索し選んでください。旅行者の情報（パスポート情報が必要な場合もある）、お支払い方法を入力して下さい。予約と支払いを受け取った事を知らせるメールが届きます。又予約確定メールが別で届くので、リンクを開けバウチャーをダウンロードして下さい.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:予約確定メールが届きません。予約は完了していますか？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:予約をすると、2件のメールが届きます。最初のメールはご予約リクエストとお支払いを受け取った事を確認するもので、次のメールはご予約が確定し、リンクからバウチャーをダウンロードできるものになります。メールが届かない場合、ごみ箱/迷惑メールフォルダにないか確認してください。又、アカウントから予約状況を確認する事もできます。ツアー製品などは確定までに時間を要する場合がございます.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:パッケージに含まれるものは？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A:１：ツアーパッケージにはエコノミークラスの航空券、宿泊、食事、交通機関、観光、ツアーリーダー/マネージャー、空港とホテル間の送迎が含まれます。※ビザ費用、保険、チップ、空港税、オプショナルツアーなどは含まれません.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        ２、グラウンドパッケージには宿泊施設、食事、空港とホテル間の送迎のみが含まれています。（Trip4Asia Travel Sdn Bhdは上記の料金を収集す代理店として、各当局の利用規約に従います）
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:何日前に予約しないといけないですか？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:ご予約はご出発45日前までに行う必要があります。2か月以上前のご予約をお勧めいたします（理由：ビザ申請に要する時間など）
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:予約の訂正、変更はできますか？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A:予約の変更については、担当者またはカスタマーサービスにお問い合わせください。１：ツアー確定後は変更できません.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        2:予約途中、新しい予約の確定後、日付変更、パッケージの変更はできません。
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:旅行パッケージのキャンセルはできますか？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:予約キャンセルについては、担当者またはカスタマーサービスにお問い合わせください。予約完了後のキャンセルはできません。担当者またはカスタマーサービスに連絡し、理由（提出書類があれば）を説明下さい。そうでなければツアー料金は失われます。
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:どうやって変更する？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:旅行日程、宿泊施設などは決められているので、変更できません。長期滞在希望の場合、担当者またはカスタマーサービスにお問い合わせ下さい。空き状況により対応可能です。
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:旅行パッケージの支払い方法は？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:座席を確保するためにデポジットをいただきます。ツアー確定、注意事項などがEmailまたはwe chatにて届いた後、ウェブサイトからログインし差額をお支払い下さい.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:ツアーのフライト何ですか？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:フライト時間やスケジュールは保証できません。航空政府局に従い、ツアーメンバーの安全、セキュリティー、、ほかの理由によって変更します.
                        </Text>
                                </View>
                            </View>
                        ) : lang === 'KR' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: 온라인예약과메일/전화를통한예약의차이가무엇인가요?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: 온라인예약의경우,셀프서비스형식으로가격이가장저렴합니다.메일/전화예약시, 1인당(1회당) 60위안의수수료가추가적으로부과됩니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q. 예약은어떻게해야하나요?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: 홈페이지회원가입후에예약을하실수있습니다.아이디개설후,원하시는여행상품을검색->선택해주세요.여행자정보(필요시,여권정보도포함)와결제정보까지입력을완료하시면,확인메일이발송됩니다.이후,예약내역확인및여행권을다운로드할수있는주소를보내드립니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q. 예약확인메일을받지못하였습니다.예약이완료된건가요?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A. 예약후에는2가지메일이전송됩니다.첫번째는고객님의예약과결제요청에대한승인메일입니다.두번째메일은예약최종확인및다운로드할링크를보내드립니다.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q. 패키지는어떤것들이포함되어있나요?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A. 2가지여행패키지가있습니다.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        1.투어패키지는\'이코노미석왕복항공권,숙박,식사,교통편,관광투어,여행가이드/매니저를동반한공항과호텔간교통편\'을포함합니다.비자발급비,여행자보험,가이드팁,주유비,공항세,선택관광등은불포함.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        2.그라운드패키지는숙박,음식,공항과호텔간교통편만포함합니다.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        (Trip4Asia Travel Sdn Bhd는위의요금을받는대행사역할만담당하므로,각관계자들의이용약관을따릅니다.)
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q. 몇일전까지예약을해야하나요?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A. 예약은출발일기준최소45일전에완료하셔야합니다.비자신청과투어확정에시간이소요되므로, 2달전에예약을하시는것이가장좋습니다.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q. 예약후,변경이가능한가요?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A. 변경은고객서비스담당자에게문의바랍니다.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        p/s 1.여행승인및최종확정후에는변경이불가합니다.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        2.예약진행및승인단계에서는 날짜변경/패키지변경이불가능합니다.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q. 여행패키지예약을취소할수있나요?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A. 취소는고객서비스담당자에게문의바랍니다.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        P.s.예약이승인되거나확인된후에취소할수없습니다.취소시,전액환불불가능합니다.고객서비스담당자와연락하여취소사유(가능시,증거자료와함께)를설명해주십시오.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q. 변경은어떻게해야하나요?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A. 여행일자,여행일정및단체여행의숙박시설은변경이절대불가합니다.숙박일연장시,고객서비스담당자에게연락바랍니다.변경요청은상황이가능할경우에한합니다.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q. 여행패키지는어떻게결제해야하나요?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A. 좌석을확보하기위해예약에대한보증금을받습니다.여행이확정되면이메일이나위챗을통해안내문이전송될예정입니다.안내에따라웹사이트에접속하여잔액을이체해주시면됩니다.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q. 항공편은무엇입니까?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A. 여행시간과일정은보장되지않으며계약의일부가아닙니다.이는여행객의안전,보안및기타이유등으로인한항공정부당국의주장에따라달라질수있습니다.
                        </Text>
                                </View>
                            </View>
                        ) : lang === 'TH' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        ความแตกต่างระหว่างการจองห้องพักทางออนไลน์และผ่านทางอีเมล์ / โทรศัพท์คืออะไร?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        เราเสนอราคาที่ดีที่สุดสำหรับการจองที่ทำออนไลน์เนื่องจากเป็นการทำจองด้วยตนเอง การจองผ่านทางอีเมล์หรือโทรศัพท์จะคิดค่าบริการเพิ่มเติม RM60 ต่อคน / รายการ
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        จะทำการจองได้อย่างไร?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        บัญชีสมาชิกจำเป็นต้องทำการจอง เมื่อบัญชีของคุณถูกสร้างขึ้นแล้วให้ค้นหาและเลือกจากข้อเสนอการท่องเที่ยวที่ครอบคลุมของเรา ป้อนข้อมูลของนักท่องเที่ยว (รวมถึงข้อมูลหนังสือเดินทางถ้าจำเป็น) และข้อมูลการชำระเงิน คุณจะได้รับอีเมลเพื่อรับทราบว่าเราได้รับคำขอจองและการชำระเงินของคุณแล้วตามด้วยอีเมลอื่นที่ยืนยันการจองของคุณและลิงก์เพื่อดาวน์โหลดบัตรกำนัลเดินทางของคุณ
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        ฉันยังไม่ได้รับอีเมลยืนยันการสำรองห้องพักของฉัน การสำรองห้องพักของฉันเสร็จสมบูรณ์หรือไม่?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คุณจะได้รับอีเมลสองฉบับเมื่อใดก็ตามที่คุณทำการจองกับเราอีเมลฉบับแรกรับทราบว่าเราได้รับคำขอจองและการชำระเงินของคุณแล้ว อีเมลฉบับที่สองยืนยันการจองของคุณและระบุลิงก์เพื่อดาวน์โหลดบัตรกำนัลการเดินทางของคุณ ถ้าคุณไม่เห็นอีเมลคุณอาจต้องการตรวจสอบเพื่อให้แน่ใจว่าอีเมลไม่ได้ถูกส่งไปยังโฟลเดอร์ขยะ / สแปมของคุณ นอกจากนี้คุณยังสามารถตรวจสอบสถานะการจองของคุณได้ในบัญชีสมาชิกของคุณ โปรดทราบ: แพคแกจทัวร์อาจใช้เวลานานสำหรับยืนยัน
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        แพคเกจรวมอะไรบ้าง?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        เรามีแพคเกจ 2 แบบคือ: -
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        1. แพคเกจทัวร์จะรวมตั๋วเครื่องบินประหยัดค่าโดยสารตั๋วเครื่องบินที่พักอาหารการเดินทางการท่องเที่ยวการถ่ายโอนระหว่างสนามบินและโรงแรมกับหัวหน้าทัวร์ / ผู้จัดการ ค่าธรรมเนียมวีซ่าไม่รวมประกันการเดินทางการแนะนำการให้ทิปภาษีสนามบินทัวร์เสริมและอื่น ๆ
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        2. แพคเกจดินประกอบด้วยที่พักอาหารการโอนย้ายระหว่างสนามบินและโรงแรม
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        (Trip4Asia Travel Sdn Bhd ทำหน้าที่เป็นตัวแทนในการเรียกเก็บค่าบริการข้างต้นเท่านั้นดังนั้นจึงขึ้นอยู่กับข้อกำหนดและเงื่อนไขของหน่วยงานที่เกี่ยวข้อง)
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        ต้องจองล่วงหน้ากี่วัน?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        ต้องจองล่วงหน้าอย่างน้อย 45 วันก่อนเดินทาง จะดีกว่าถ้าผู้เข้าพักสามารถจองล่วงหน้า 2 เดือน (เหตุผล: เวลาสำหรับการขอวีซ่า / สิ้นสุดการเดินทาง)
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        ฉันสามารถแก้ไขการจองห้องพักได้หรือไม่?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        กรุณาติดต่อฝ่ายบริการลูกค้า / ลูกค้าเพื่อทำการจองห้องพัก
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        1. การแก้ไขไม่ได้รับอนุญาตหากเราได้ยืนยันแล้ว
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        2. การเปลี่ยนแปลงวันที่ / การเปลี่ยนแปลงแพ็คเกจไม่ได้รับอนุญาตเมื่อเราดำเนินการและยืนยันการจองใหม่แล้ว
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        ฉันสามารถยกเลิกการจองแพ็คเกจการเดินทางได้หรือไม่?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        โปรดติดต่อบุคคลที่รับผิดชอบหรือยกเลิกการจองศูนย์บริการลูกค้า
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        P / s: ไม่อนุญาตให้ยกเลิกการจองหลังจากการจองห้องพักได้รับการอนุมัติหรือยืนยัน มิเช่นนั้นค่าเดินทางจะถูกริบอย่างเต็มที่ โปรดติดต่อบุคคลที่รับผิดชอบในการให้บริการ / ลูกค้าและระบุเหตุผล (ถ้ามี) พร้อมยกเลิกเอกสาร
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        ฉันจะเปลี่ยนแปลงได้อย่างไร?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        กำหนดวันเดินทาง รายละเอียดเดินทางและที่พักสำหรับการท่องเที่ยวแบบกลุ่ม การเปลี่ยนแปลงเหล่านี้ไม่ได้รับอนุญาตเอง สำหรับการขอการเปลี่ยนเเปลง โปรดติดต่อผู้รับผิดชอบ / ศูนย์บริการลูกค้า เเละการคำขอเปลี่ยนเเปลงนั้นขึ้นอยู่กับความพร้อมให้บริการ
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        วิธีการชำระเงินสำหรับแพคเกจการเดินทาง?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        เราจะเก็บเงินมัดจำสำหรับการจองใหม่เพื่อรักษาที่นั่งไว้ เมื่อทัวร์ยืนยันการเดินทาง จะมีการแจ้งเตือนจะส่งถึงคุณ (อีเมลหรือ wechat) คุณสามารถเข้าสู่เว็บไซต์และโอนยอดเงินคงเหลือให้เหมาะสม
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        เที่ยวบินสำหรับทัวร์คืออะไร?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        กำหนดการบินและตารางการบินไม่ได้รับการรับประกันและไม่เป็นส่วนหนึ่งของสัญญา อาจมีการเปลี่ยนแปลงเมื่อมีการยืนยันการบินของเจ้าหน้าที่ของรัฐเกี่ยวกับความปลอดภัยและเหตุผลอื่น ๆ ของการท่องเที่ยว
                        </Text>
                                </View>
                            </View>

                        ) : (
                                                    <View >
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：网上预订和通过电子邮件/电话预订有什么区别？
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：网上预订是一个自助服务设施，所以频台上显示的价格较为优惠。 至于通过电子邮件或电话的预订，每人或每项交易都需收取额外RM60的服务费.
                                    </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：我该如何预订？
                                    </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：会员账号需要预约。 一旦您创建了账号，从频台内搜索和选择你理想的旅游配套。 输入旅客的资料（包括护照资料）和付款资料。 您将及时收到一封电邮通知，确认我们已收到您的预订和付款。接着，您将收到第二封电邮确认您的订单，邮件内将含链接供您下载您的旅游券.
                                    </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：我还未收到我的预订确认邮件。 我的预订完成了吗？
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：每单预定，您将收到两封电邮。第一封电邮是确认我们已收到您的预订和付款。 第二封电邮是确认您的预订，并提供链接供您下载您的旅游券。 如果您没收到任何电邮，请查看你的垃圾邮件。 您也可在会员账号内查看您的预订状态。 备注：旅游配套将需要更长时间确认.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：请问配套内包含了什么？
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                答：我们有两种旅游配套：
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                1. 旅游配套包括经济舱双程机票，住宿，餐饮，交通，景点观光，机场与酒店接送和导游。 价格不含签证费，旅游保险，导游小费，机场税及可选旅游项目等.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                2.地面配套只包含住宿，餐饮，机场与酒店接送.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                （Trip4Asia Travel Sdn Bhd只是作为上述旅游配套的代理机构代收配套费，因此旅客须遵守相关机构的条款和条件.）
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：请问我需要提前多少天预定旅游配套？
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                答： 您需在出发前的45天前做预定。建议您在该团出发前的两个月预定，以方便我们为您安排签证申请及旅游配套的安排等.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：我可否在我的订单做出修改？
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                答： 请联系负责人/客服人员进行预订修改.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                备注：1.如果我们已确认并确认并敲定您的旅游配套，则不允许修改.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                2.一旦您的订单已确认，是不允许修改修改日期/更换配套的.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：我可否取消我的旅游配套预订？
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                答：请联系负责人/客服预订取消.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                备注：预订核准或确认后，不得取消。否则，将不退還任何費用。请您联系负责人/客服，并提供取消原因（及相关证明文件）.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：我该如何做修改？
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答:旅游配套的日期，行程和住宿已经确认的，将无法做任何更改。对于延期请求，请联系负责人/客服。任何偏差请求将视情况而定.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：我该如何支付旅游配套？
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：我们将收取押金以为您保留座位。 一旦确认成团，我们将通过电邮或微信发出通知。 您可登录网站，并转移余额付款.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：请问该旅游配套的航班是？
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                答：航班时间随时会有更改，频台的航班行程也不构成为合同的一部分。以旅客的安全等原因为前提，在政府机关的建议下航班会随时做出修改.
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

export default connect(mapStateToProps)(Common_TourPackage);