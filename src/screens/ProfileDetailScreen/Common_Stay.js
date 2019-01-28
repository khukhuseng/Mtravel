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

class Common_Stay extends Component<Props> {

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
                            {lang === 'ZH-CN' ? '住宿' : lang === 'EN' ? 'Accommodation' : lang === 'ZH-TW' ? '住宿' : lang === 'JP' ? '宿泊施設' : lang === 'KR' ? '숙박' : lang === 'TH' ? 'ที่พัก' : '住宿'}
                        </Text></View>
                    </View>

                    <Form style={{ marginLeft: 10, marginRight: 10 }}>
                        {lang === 'ZH-CN' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问 : 我应该提前几天预订住宿？
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答 : 所有住宿必须在入住前三天（至少）预订.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问 : 成功下单后，MTravel需要多久才会确认我的订单？
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答 : 大部分订单将在成功预订后的三个工作日内得到回复.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问 : 我能否修改我的预订内容？
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答 : 任何修改只能在遵守以下条件的情况下进行.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        i) 修改必须在入住日期前14天（至少）进行.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        ii) 修改后的入住价格与最初预定的价格必须相同.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        iii) 填写表格并电邮到 cs@trip4asia.com
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        视情况而定.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问 : 我能否取消我的预订？
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答 : 若该订单依然在 "待定" 并在入住日期的前3个工作日（至少）的情况下，将被允许取消.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        若该订单住宿已被预订或被官方批准，顾客将无法取消原有的预订.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问 :我该如何查询订单是否被确认？
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答 : 每次订单确认后，系统将依照顾客预订时填写的资料，发送一封电邮以及手机信息通知顾客.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        邮件内将附上含有确认号码的电子券.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        顾客也可登录手机内的MTravelClub应用程序，去到 “我的预订” 栏目下检查所有的订单状态.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问 : 为何我无法在手机应用程序内搜索到某些住宿？
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答 : 有些住宿尚未与本频台合作.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问 : 预订的过程是怎样的？
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答 : 系统在收到订单的通知之后，我们将联系住宿安排房间.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        在获得住宿的更新详情后，官方会在最短的时间内告知顾客.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问 : 我该如何入住酒店？是否需要准备相关登记文件？
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答 : 请打印出邮件内的电子券附件，或直接将电子券通过通讯器展示给接待处或前台服务员.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问 : 我能否通过MTravel的客服进行房间的预订？
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答 : 很遗憾我们的客服并不提供预订服务，因预订过程需输入顾客的私人账户资料.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        为了保障您的的隐私安全，请自行通过我们的应用进行下单.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问 : 我要求在订单里的房间内加床.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答 : 若预订的住宿没有加床的选项，请在登记入住的时候向接待处或前台服务员提出要求，并且以现金当场付款.
                                    </Text>
                                </View>
                            </View>
                        ) : lang === 'EN' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : How many days in advance do I have to place the booking?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A : All booking must be made by at least 3 days prior to check-in date.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : How long does it takes to get a revert once I made a booking?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A : Most bookings will be reverted within 72 working hours after a booking has been made.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : Can I make amendment for my booking?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A : Amendment only can be made if these criterias are fulfilled.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        i) 14 days before the check-in date.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        ii) Rates are the same or lower than the initial check-in date.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        iii) To fill up this form and submitted to cs@trip4asia.com
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        Amendments are also subjected to availability.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : Can I cancel my booking?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A : Booking can be cancel when its still under "PENDING" status and criteria in 3 working days before check-in date.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        However, if the reservation has been approved to the other party or the reservation has been confirmed, the booking can't be cancelled.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : How do I know if my booking is confirmed?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A : Once your booking confirmed, our system will send a voucher with confirmation number to the e-mail address & mobile SMS which you have keyed in when you placed your booking.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        You may also login to MTravel mobile app to check on status of your booking via "My Booking".
                                </Text>
                                </View>

                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : Why am I unable to search my preferable property?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A : Most likely we have are not partners with that particular property yet.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : What's the process of the booking?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A : Not all property have this option. Kindly request it from the receptionist/front desk and pay by cash upon check-in.
                                </Text>
                                </View>
                            </View>
                        ) : lang === 'ZH-TW' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問 : 我應該提前幾天預訂住宿？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答 : 所有住宿必須在入住前三天（至少）預訂.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問 : 成功下單後，MTravel需要多久才會確認我的訂單？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答 : 大部分訂單將在成功預訂後的三個工作日内得到回复.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問 : 我能否修改我的預訂內容？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答 : 任何修改只能在遵守以下條件的情況下進行。
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        i) 修改必須在入住日期前14天（至少）進行.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        ii) 修改後的入住價格與最初預定的價格必須相同.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        iii) 填寫表格並電郵到 cs@trip4asia.com
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        視情況而定.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問 : 我能否取消我的預訂？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答 : 若該訂單依然在 "待定" 並在入住日期的前3個工作日（至少）的情況下，將被允許取消.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        若該訂單住宿已被預訂或被官方批准，顧客將無法取消原有的預訂.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問 :我該如何查詢訂單是否被確認？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答 : 每次訂單確認後，系統將依照顧客預訂時填寫的資料，發送一封電郵以及手機信息通知顧客.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        郵件內將附上含有確認號碼的電子券.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        顧客也可登錄手機內的MTravelClub應用程序，去到 “我的預訂” 欄目下檢查所有的訂單狀態.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問 : 為何我無法在手機應用程序內搜索到某些住宿？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答 : 有些住宿尚未與本頻台合作.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問 : 預訂的過程是怎樣的？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答 : 系統在收到訂單的通知之後，我們將聯繫住宿安排房間.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        在獲得住宿的更新詳情后，官方會在最短的時間內告知顧客.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問 : 我該如何入住酒店？是否需要準備相關登記文件？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答 : 請打印出郵件內的電子券附件，或直接將電子券通過通訊器展示給接待處或前台服務員.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問 : 我能否通過MTravel的客服進行房間的預訂？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答 : 很遺憾我們的客服並不提供預訂服務，因預訂過程需輸入顧客的私人賬戶資料.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        為了保障您的的隱私安全，請自行通過我們的應用進行下單.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問 : 我要求在訂單裡的房間內加床.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答 : 若預訂的住宿沒有加床的選項，請在登記入住的時候向接待處或前台服務員提出要求，並且以現金當場付款。
                                </Text>
                                </View>
                            </View>
                        ) : lang === 'JP' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:何日前までに予約しないといけないですか？
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:チェックイン3日前までに予約して下さい.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:予約完了はどのくらいかかりますか？
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:予約してから72時間以内には完了致します.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:予約変更できますか？
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A:下記条件を満たした場合のみ変更可能です.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        i) チェックイン14日前
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        ii) 同料金もしくは安い場合
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        iii) cs@trip4asia.comにご連絡下さい.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:キャンセルできますか？
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:3日前もしくわ予約途中の場合のみ、キャンセル可能です。予約完了した場合キャンセル不可です.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:予約完了したか知りたい.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A:予約完了後、メールもしくわSMSにてバウチャーと予約番号をお送りいたします.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        Mtravelモバイルアプリからも予約状況を確認できます.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:なぜ自分でホテル情報の検索ができない？
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:特定のホテルとはまだパートナーではないかため.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:予約の過程は？
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:予約後、こちらがホテルに確認してからお客様に回答します.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:チェックインに必要なものはありますか？
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:プリントアウトもしくはコピーしたバウチャーを提示ください.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:カスタマーサービスから予約できますか？
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:できません。アプリから情報などを入力し、規約を確認後、お客様自身で予約して下さい.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:エクストラベットの追加をしたい.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:全てのホテルがあるわけではありませんが、フロントデスクで確認後、現金でお支払いください.
                                    </Text>
                                </View>
                            </View>
                        ) : lang === 'KR' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 몇일전부터 숙박을 예약해야 하나요?
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 입주하기 3일 전(최소)에 예약해야 합니다.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 예약을 한 후 MTravel 에서 언제 저의 예약을 확인하나요?
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 대부분 예약은 3 근무일 안에 답변을 받을 수 있습니다.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 저의 예약 내용을 변경할 수 있나요?
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        답변: 아래의 조항에 따른 변경은 가능합니다.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        i)변경은 입주 날짜 14일 전에(최소) 진행해야 합니다.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        ii)변경한 입주 가격은 예약한 입주 가격과 동일해야 합니다.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        iii) 변경 신청표를 장성하여  cs@trip4asia.com으로 이메일을 보내야 하며 상황에 따라 다를 수 있습니다.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 예약을 취소할 수 있나요?
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答 : 若该订单依然在 "待定" 并在入住日期的前3个工作日（至少）的情况下，将被允许取消.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 예약 신청이 ""대기"" 상태이고 입주날짜 3 근무일 (최소) 전이면 취소가 가능합니다.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 예약이 확인되었는지를 어떻게 알아봐야 하나요?
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        답변: 예약이 확인되면 시스템은 고객의 예약 신청서 자료를 근거로 고객에게 이메일과 핸드폰 메세시를 보내는 방식으로 알려드립니다.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        이메일에는 번호를 확인한 쿠폰이 들어있습니다.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        고객은 핸드폰으로 MTravelClub을 로그인 하여 "나의 예약"에서 예약 상태를 확인할 수 있습니다.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 왜 저는 핸드폰 앱에서 일부 숙박 자료를 검색할 수 없을까요?
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 일부 숙박업체가 저희들과 합작하지 않은 상태이기 때문입니다.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 어떻게 예약해야 하나요?
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        답변: 시스템이 예약 주문 통지를 받은 후 저희가 숙박 장소와 연락하여 방을 잡을 것입니다.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        상세한 숙박 자료를 획득한 후 저희가 빠르게 고객에게 전해드릴 겁니다.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 어떻게 입주해야 하나요? 관련 등록 서류를 준비해야 하나요?
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 이메일에 든 쿠폰을 인쇄하거나 전자 쿠폰을 핸드폰으로 카운터에 보여주면 됩니다.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: MTravel 고객 센터를 통해서 방을 예약할 수 있나요?
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        답변:  예약 과정에서 고객의 개인 정보를 입력해야 하기 때문에  미안하지만 저희들의 고객 센터는 방을 예약해주지 않습니다.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        고객의 개인 정보 보호를 위해서 앱으로 직접 예약해야 합니다.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 방에 침대를 추가할 수 있나요?
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 예약하는 숙방업체에 침대를 추가하는 선택항이 없으면 체크인할 때 카운터에 신청하고 현금으로 지불하면 됩니다.
                                    </Text>
                                </View>
                            </View>
                        ) : lang === 'TH' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ฉันต้องจองล่วงหน้ากี่วัน?
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: การสำรองห้องพักต้องทำอย่างน้อย 3 วันก่อนวันที่เช็คอิน
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ระบบใช้เวลานานเท่าไหร่ในการตอบกลับหลังจากฉันได้ทำการจองแล้ว
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: การจองส่วนใหญ่ทางระบบจะยืนยันกลับภายใน 72 ชั่วโมงหลังจากทำการจอง
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ฉันสามารถแก้ไขรายละเอียดการจองห้องพักได้หรือไม่?
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำตอบ: การแก้ไขการจองนั้น ๆ สามารถทำได้ภายใต้หลักเกณฑ์เหล่านี้
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        i) 14 วันก่อนวันที่เช็คอิน
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        ii) ราคาเดียวกันหรือต่ำกว่าวันที่เช็คอินครั้งแรก
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        iii) กรอกแบบฟอร์มนี้และส่งไปที่ cs@trip4asia.com
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        การแก้ไขการจองห้องพักต้องคำนึงถึงจำนวนห้องว่างในช่วงนั้น ๆ ของที่พักที่จอง
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ฉันสามารถยกเลิกการจองได้หรือไม่?
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำตอบ: คุณสามารถยกเลิกการจองได้เมื่อสถานะของการจองเป็น " "รอการดำเนินการ" และไม่น้อยกว่า 3 วันทำการก่อนวันที่เช็คอิน "
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        อย่างไรก็ตามหากการจองห้องพักได้รับการอนุมัติไปยังอีกฝ่ายหนึ่งแล้วหรือการจองห้องพักได้รับการยืนยันแล้วจะไม่สามารถยกเลิกการจองได้
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ฉันจะทราบได้อย่างไรว่าการจองห้องพักของฉันได้รับการยืนยันแล้ว?
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำตอบ: เมื่อยืนยันการจองแล้วระบบของเราจะส่งบัตรกำนัลซึ่งมีหมายเลขยืนยันการจองและรายละเอียดการจองไปยังที่อยู่อีเมล์และข้อความไปยังเบอร์มือถือที่คุณได้ให้ไว้เมื่อคุณทำการจอง
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        นอกจากนี้คุณยังสามารถเข้าสู่ระบบ MTravel Mobile App เพื่อตรวจสอบสถานะการจองของคุณผ่าน "การเดินทาง"
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: เหตุใดฉันจึงไม่สามารถค้นหาสถานที่ให้บริการที่ต้องการได้
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: อาจเป็นเพราะเรายังไม่ได้เป็นพันธมิตรกับที่พักใด ๆ ในสถานที่นั้น ๆ
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ขั้นตอนการจองห้องพักมีอะไรบ้าง?
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        เมื่อคุณได้ทำการจองแล้ว ระบบจะส่งรายละเอียดการจองให้ทางโรงแรมทันที
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        ระบบจะทำการตอบกลับการจองของคุณโดยเร็วที่สุดเมื่อมีการตอบกลับจากทีมจองของโรงแรม
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: มีเอกสารใดบ้างที่ต้องใช้ในการเช็คอิน?
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        ตอบ: กรุณาพิมพ์บัตรกำนัลหรือโชว์รูปถ่ายของบัตรกำนัลที่ทางระบบได้ส่งให้ทางอีเมล์ นำให้แผนกต้อนรับของที่พักเช็ครายละเอียด
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ฉันสามารถจองผ่านแผนกบริการลูกค้าโดยตรงได้หรือไม่?
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำตอบ: ต้องขออภัยที่ทางเราไม่สามารถทำได้
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คุณจะต้องทำการจองด้วยตัวคุณเองผ่านแอปพลิเคชั่นของเราเนื่องจากนโยบายด้านความปลอดภัยและการเก็บรักษาข้อมูลส่วนบุคคล
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ฉันต้องการขอเตียงเสริมสำหรับการจองของฉัน
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: ที่พักบางที่ไม่สามารถเสริมเตียงได้ กรุณาแจ้งแผนกต้อนรับของที่พัก และชำระด้วยเงินสดเมื่อเช็คอิน
                                    </Text>
                                </View>
                            </View>

                        ) : (
                                                    <View >
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问 : 我应该提前几天预订住宿？
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答 : 所有住宿必须在入住前三天（至少）预订.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问 : 成功下单后，MTravel需要多久才会确认我的订单？
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答 : 大部分订单将在成功预订后的三个工作日内得到回复.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问 : 我能否修改我的预订内容？
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                答 : 任何修改只能在遵守以下条件的情况下进行.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                i) 修改必须在入住日期前14天（至少）进行.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                ii) 修改后的入住价格与最初预定的价格必须相同.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                iii) 填写表格并电邮到 cs@trip4asia.com
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                视情况而定.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问 : 我能否取消我的预订？
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                答 : 若该订单依然在 "待定" 并在入住日期的前3个工作日（至少）的情况下，将被允许取消.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                若该订单住宿已被预订或被官方批准，顾客将无法取消原有的预订.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问 :我该如何查询订单是否被确认？
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                答 : 每次订单确认后，系统将依照顾客预订时填写的资料，发送一封电邮以及手机信息通知顾客.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                邮件内将附上含有确认号码的电子券.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                顾客也可登录手机内的MTravelClub应用程序，去到 “我的预订” 栏目下检查所有的订单状态.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问 : 为何我无法在手机应用程序内搜索到某些住宿？
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答 : 有些住宿尚未与本频台合作.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问 : 预订的过程是怎样的？
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                答 : 系统在收到订单的通知之后，我们将联系住宿安排房间.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                在获得住宿的更新详情后，官方会在最短的时间内告知顾客.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问 : 我该如何入住酒店？是否需要准备相关登记文件？
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答 : 请打印出邮件内的电子券附件，或直接将电子券通过通讯器展示给接待处或前台服务员.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问 : 我能否通过MTravel的客服进行房间的预订？
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                答 : 很遗憾我们的客服并不提供预订服务，因预订过程需输入顾客的私人账户资料.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                为了保障您的的隐私安全，请自行通过我们的应用进行下单.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问 : 我要求在订单里的房间内加床.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答 : 若预订的住宿没有加床的选项，请在登记入住的时候向接待处或前台服务员提出要求，并且以现金当场付款.
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

export default connect(mapStateToProps)(Common_Stay);