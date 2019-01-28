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

class Common_LifeStyle extends Component<Props> {

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
                            {lang === 'ZH-CN' ? '生活时尚' : lang === 'EN' ? 'Lifestyle' : lang === 'ZH-TW' ? '休閒娛樂' : lang === 'JP' ? 'ライフスタイル' : lang === 'KR' ? '라이프스타일' : lang === 'TH' ? 'ไลฟ์สไตล์' : '生活时尚'}
                        </Text></View>
                    </View>

                    <Form style={{ marginLeft: 10, marginRight: 10 }}>
                        {lang === 'ZH-CN' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问 :我不小心买错礼卷了，怎么办？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答 :您可以联络我们的客服已取消您的订单.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        联络号码 : 1 300 80 3636.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        联络电邮 : cs@trip4asia.com
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问 :礼卷过期了，怎么办？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答 :所有过期的礼卷将自动作废并不能退款。
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问 :请问一次最多能买多少张礼卷？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答 :这取决于每个商家的条款与条件。对于批量购买礼卷，我们只接受现金交易，您可以联系我们的客服.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        联络号码 : 1 300 80 3636.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        联络电邮 : cs@trip4asia.com
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问 :我想要取消购买礼卷，请问我可以获得退款吗？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答 :可以，只要您的订单尚未处理.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问 :我可以购买礼卷以赠送给第三方吗？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答 :可以，只需填下第三方的姓名，电话号码与地址.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问 :礼卷的有效期是多长？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答 :所有礼卷的有效期最短是3个月，最多是2年。不同的礼卷，有效期也不一样。请点击并选择您想要的礼卷以查询资料.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问 :礼卷可以在哪里使用？可以网上购物吗？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答 :所有的礼卷可以在相应的商店使用。请点击并选择您想要的礼卷以查询资料.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问 :我想要购买企业用途的礼卷，请问我可以联络谁？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答 :请于办公时间联络我们的客服 1300803636 或电邮至 cs@trip4asia.com
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问 :付款确认后多久内能收到货物？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答 :标准的时间将是：
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        {'<'} 3 个工作日 - 巴生谷内
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        {'<'} 5 个工作日 - 马来西亚半岛
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        {'<'} 7 个工作日 - 沙巴 & 砂劳越
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问 :预订成功后，我能更换日期吗？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答 :任何修改只能在遵守以下条件的情况下进行.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        i) 修改必须在日期前7天（至少）进行.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        ii) 填写表格并电邮到 cs@trip4asia.com
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        视情况而定.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问 :预订成功后，我能更换人数吗？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答 :我们只接受增加人数.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        视情况而定
                                </Text>
                                </View>
                            </View>
                        ) : lang === 'EN' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : I accidentally purchased a voucher what should I do?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A : Please contact our customer service to cancel your purchase.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Tel : 1 300 80 3636.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        Email : cs@trip4asia.com
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : What if I happen to have an expired voucher?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A : All expired vouchers are automatically void and not eligible for any refund.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : How many vouchers can I purchase?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A : It varies based on our suppliers terms and conditions. However for bulk purchases, we only accept CASH terms; if you're interested please contact our customer service for further clarification.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Tel : 1 300 80 3636.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        Email : cs@trip4asia.com
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : I want to cancel my voucher. Can I get a refund?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A : Yes, as long as your voucher booking is not confirmed and successful yet.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : Can I purchase vouchers for a friend?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A : Yes, you may. Just fill in his/her address, name and contact number in the fields provided.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : What is the validity period for vouchers?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A : All our vouchers valid for a minimum of 3 months to a maximum of 2 years. This varies from each voucher. Please check the voucher details for more information.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : Where can I use the Cash Vouchers and is it possible to use for online purchases?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A : All cash vouchers can only be utilized at the designated retail outlet. Please check the voucher details for more information.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : I wish to purchase vouchers for my company or for corporate use, who should I contact?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A : Please contact our customer service during our office operating hours at 1300803636 or email to cs@trip4asia.com
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : What is the delivery turnaround time upon successful booking?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A : Standard turnaround time would be:-
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        {'<'} 3 working days – within Klang Valley
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        {'<'} 5 working days – Peninsular Malaysia
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        {'<'} 7 working days – Sabah & Sarawak
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : Can I change my date of visit stated?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A : Yes, you're able to change if your date of visit if these criterias are fulfilled.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        i) 7 working days before the original date of visit.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        ii) To fill up this form and submitted to cs@trip4asia.com
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        Changes are also subjected to availability.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q : Can I change the number of pax for a successful booking?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A : You can only add-in more pax.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Subject to restaurant availability.
                            </Text>
                                </View>
                            </View>
                        ) : lang === 'ZH-TW' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問 :我不小心買錯禮卷了，怎麼辦？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答 :您可以聯絡我們的客服已取消您的訂單.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        聯絡號碼 : 1 300 80 3636.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        聯絡電郵 : cs@trip4asia.com
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問 :禮卷過期了,怎麼辦?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答 :所有過期的禮卷將自動作廢並不能退款.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問 : 請問一次最多能買多少張禮卷？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答 : 這取決於每個商家的條款與條件。對於批量購買禮卷，我們只接受現金交易，您可以聯繫我們的客服.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        聯絡號碼 : 1 300 80 3636.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        聯絡電郵 : cs@trip4asia.com
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問 : 我想要取消購買禮卷，請問我可以獲得退款嗎？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答 : 可以，只要您的訂單尚未處理.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問 : 我可以購買禮卷以贈送給第三方嗎？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答 :可以，只需填下第三方的姓名，電話號碼與地址.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問 : 禮卷的有效期是多長？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答 : 所有禮卷的有效期最短是3個月，最多是2年。不同的禮卷，有效期也不一樣。請點擊並選擇您想要的禮卷以查詢資料.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問 : 禮卷可以在哪裡使用？可以網上購物嗎？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答 : 所有的禮卷可以在相應的商店使用。請點擊並選擇您想要的禮卷以查詢資料.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問 : 我想要購買企業用途的禮卷，請問我可以聯絡誰？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答 : 請於辦公時間聯絡我們的客服 1300803636 或電郵至 cs@trip4asia.com
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問 :付款確認後多久內能收到貨物？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答 :標準的時間將是：
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        {'<'} 3 個工作日 - 巴生谷內
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        {'<'} 5 個工作日 - 馬來西亞半島
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        {'<'} 7 個工作日 - 沙巴 & 砂勞越
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問： 預訂成功後，我能更換日期嗎？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答 : 任何修改只能在遵守以下條件的情況下進行.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        i) 修改必須在日期前7天（至少）進行.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        ii) 填寫表格並電郵到 cs@trip4asia.com
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        視情況而定.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問： 預訂成功後，我能更換人數嗎？
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答：我們只接受增加人數.
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        視情況而定
                        </Text>
                                </View>
                            </View>
                        ) : lang === 'JP' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:間違って購入してしまいました、どうすればいいですか？
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:電話番号 1300803636、csjp@trip4asia.comに連絡する.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:有効期限が切れてしまいました.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:有効期限切れは予約不成立のため返金されます.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:何個まで購入できますか？
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A:商品によって異なります。一括購入される場合は現金のみ可能です。興味がある方は電話番号 : 1 300 80 3636.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        Email : cs@trip4asia.comまでご連絡下さい.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:キャンセルしたいです。返金できますか？
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:予約完了後はキャンセル不可です。処理中の場合キャンセル可能です.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:友達、お連れ様のために購入できますか？
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:はい。友達、お連れ様の名前、住所、電話番号を用意してください.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:バウチャーの有効な期間はどのくらいですか？
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:3か月から２年まで。詳しくはバウチャー詳細をご確認下さい.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:現金バウチャーはオンライン購入する際に使えますか？
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:決められたアウトレット店舗で使えます。詳しくはバウチャー詳細をご確認下さい.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:会社、法人のために購入したいです。どこに連絡すればよろしいですか？
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:カスタマーサービスセンターに連絡してください。電話番号 1300803636、csjp@trip4asia.com
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:予約完了してから届くまでの期間はどのくらいですか？
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:ご予約商品によって異なります.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:日にち変更できますか？
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:訪問予定日の７日前までならば変更可能な場合もございます。csjp@trip4asia.comまで連絡下さい.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:予約人数の変更は可能ですか？
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A:レストランに空席状況により、可能です.
                            </Text>
                                </View>
                            </View>
                        ) : lang === 'KR' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 상품권을 잘못 구매했으면 어떻게 해야 하나요?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 고객 센터로 연락하여 예약을 취소할 수 있습니다. 연락처: 1300803636. 이메일:  cs@trip4asia.com
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 상품권이 시간이 지났으면 어떻게 해야 하나요?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 시간이 지난 상품권은 무효처리되면 환불할 수 없습니다.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 한번에 몇 장을 살 수 있나요?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        그것은 각 사업의 조건에 달려 있습니다. 대량으로 구매하는 상품권의 경우 현금 거래만 가능하며 고객 서비스 팀에 문의 할 수 있습니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        연락처 : 1 300 80 3636.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        연락 이메일 : cs@trip4asia.com
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 상품권 구매를 취소하면 환불이 되나요?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 가능합니다. 예약이 처리되지 않았으면 취소할 수 있습니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 상품권을 구매하여 다른 사람에게 줄 수 있나요?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 네. 제3자의 이름과 연락처, 그리고 주소가 있으면 됩니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문:상품권의 유효 기간은 얼마인가요?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 모든 상품권의 유효기간은 최소 3개월, 최대 2년 입니다. 상품권이 다르면 유효기간이 다를 수 있습니다.  구매하고 싶은 상품권을 클릭하여 상세한 자료을 알아보세요.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 상품권을 어디에서 사용할 수 있나요? 인터넷 쇼핑에 사용할 수 있나요?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 모든 상품권은 관련 매점에서 사용할 수 있습니다. 구매하고 싶은 상품권을 클릭하여 상세한 자료을 알아보세요.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 기업 용도의 상품권을 구매하려면 어디에 연락해야 하나요?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 운행 기간에 1300803636 혹은 cs@trip4asia.com을 통해서 고객 센터와 연락하세요.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 지불한 후 언제 물건을 받을 수 있나요?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        답변: 표준 시간:
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        {'<'} 3 근무 일- 쿨랑 밸리 내,
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        {'<'} 5 근무 일- 말레이시야반도,
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        {'<'} 7 근무 일- 사바 & 사리왁
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 예약 완료한 후 날짜를 변경할 수 있나요?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        답변: 아래 조건하에 수정을 진행할 수 있습니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        i) 날짜 (최소) 7일 전에 수정해야 합니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        ii) 표를 작성하여  cs@trip4asia.com 으로 이메일을 보내세요. 상황에 따라 다를 수 있습니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 예약을 완료한 후 사람 수를 변경할 수 있나요?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        답변: 우리는 인수 추가 변경만 받아들입니다. 상황에 따라 다를 수 있습니다.
                            </Text>
                                </View>

                            </View>
                        ) : lang === 'TH' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ฉันไม่ได้ตั้งใจกดซื้อบัตรกำนัลฉันควรทำอย่างไร?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำตอบ: โปรดติดต่อฝ่ายบริการลูกค้าเพื่อยกเลิกการสั่งซื้อของคุณ
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        โทรศัพท์: 1 300 80 3636
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        อีเมล: cs@trip4asia.com
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: จะเกิดอะไรขึ้นถ้าฉันมีบัตรกำนัลที่หมดอายุแล้ว?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: บัตรกำนัลที่หมดอายุแล้วจะถือเป็นโมฆะโดยอัตโนมัติและไม่มีสิทธิ์ได้รับเงินคืน
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม : ฉันสามารถซื้อบัตรกำนัลได้กี่ใบ?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำตอบ: ขึ้นอยู่กับข้อกำหนดและเงื่อนไขในการให้บริการของแต่ละธุรกิจ อย่างไรก็ตามสำหรับการสั่งซื้อบัตรกำนัลจำนวนมากเรารับเฉพาะธุรกรรมเงินสดเท่านั้น หากคุณสนใจสามารถติดต่อฝ่ายบริการลูกค้าเพื่อขอคำแนะนำเพิ่มเติม
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        โทรศัพท์: 1 300 80 3636
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        อีเมล: cs@trip4asia.com
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ฉันต้องการยกเลิกการซื้อบัตรกำนัลของฉัน ฉันสามารถขอรับเงินคืนได้หรือไม่?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: ได้ ตราบใดที่การจองของคุณยังไม่ได้รับการยืนยันและประสบความสำเร็จ
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ฉันสามารถซื้อบัตรกำนัลให้กับเพื่อนได้หรือไม่?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: ได้ คุณเพียงแค่กรอกชื่อที่อยู่และหมายเลขติดต่อของเขาในช่องที่มีให้
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: บัตรกำนัลสามารถใช้ได้ถึงเมื่อไหร่?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        ตอบ: บัตรกำนัลของเรามีอายุไม่ต่ำกว่า 3 เดือนถึงสูงสุด 2 ปี แตกต่างกันไปตามแต่ละคูปอง กรุณาตรวจสอบรายละเอียดเพิ่มเติมบนหน้าเว็บไซด์หรือในบัตรกำนัลที่ส่งให้ทางอีเมล์
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ฉันสามารถใช้บัตรกำนัลเงินสดได้ที่ไหนและสามารถใช้ซื้อออนไลน์ได้หรือไม่?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: สามารถใช้คูปองเงินสดได้ในร้านค้าปลีกที่กำหนดเท่านั้น กรุณาตรวจสอบรายละเอียดเพิ่มเติมบนบัตรกำนัลนั้น ๆ
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ฉันต้องการซื้อคูปองสำหรับใช้ในนามนิติบุคคลหรือองค์กร ฉันควรติดต่อใคร?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: โปรดติดต่อฝ่ายบริการลูกค้าของเราในช่วงเวลาทำการของสำนักงานที่หมายเลข 1300803636 หรืออีเมล์ cs@trip4asia.com
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: หลังจากได้รับการยืนยันว่าการจองสำเร็จแล้ว การจัดส่งใช้เวลานานเท่าไหร่?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำตอบ: เวลาตอบสนองมาตรฐานจะเป็น: -
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        {'<'} 3 วันทำการ - พื้นที่ปริมณฑลกัวลาลัมเปอร์
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        {'<'} 5 วันทำการ - สำหรับคาบสมุทรมาเลเซีย
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        {'<'} 7 วันทำการ - ซาบาห์ & ซาราวัก
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ฉันสามารถเปลี่ยนวันที่เข้าชมได้หรือไม่?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำตอบ: ได้ ทั้งนี้ วันที่ต้องการจะเปลี่ยนต้องเข้าหลักเกณฑ์เหล่านี้
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        i) 7 วันทำการก่อนวันแรกที่ต้องการรับบริการ
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        ii) กรอกแบบฟอร์มนี้และส่งไปที่ cs@trip4asia.com
                        </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        เงื่อนไขการเปลี่ยนแปลงยังขึ้นอยู่กับความพร้อมของสถานที่หรือทางผู้จัดงาน
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ฉันสามารถเปลี่ยนจำนวนที่นั่งสำหรับการจองที่สำเร็จได้หรือไม่?
                        </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำตอบ: คุณสามารถเพิ่มจำนวนได้มากขึ้นเท่านั้น ทั้งนี้ขึ้นอยู่กับความพร้อมของร้านอาหาร
                        </Text>
                                </View>
                            </View>

                        ) : (
                                                    <View >
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问 :我不小心买错礼卷了，怎么办？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                答 :您可以联络我们的客服已取消您的订单.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                联络号码 : 1 300 80 3636.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                联络电邮 : cs@trip4asia.com
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问 :礼卷过期了，怎么办？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答 :所有过期的礼卷将自动作废并不能退款。
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问 :请问一次最多能买多少张礼卷？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                答 :这取决于每个商家的条款与条件。对于批量购买礼卷，我们只接受现金交易，您可以联系我们的客服.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                联络号码 : 1 300 80 3636.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                联络电邮 : cs@trip4asia.com
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问 :我想要取消购买礼卷，请问我可以获得退款吗？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答 :可以，只要您的订单尚未处理.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问 :我可以购买礼卷以赠送给第三方吗？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答 :可以，只需填下第三方的姓名，电话号码与地址.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问 :礼卷的有效期是多长？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答 :所有礼卷的有效期最短是3个月，最多是2年。不同的礼卷，有效期也不一样。请点击并选择您想要的礼卷以查询资料.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问 :礼卷可以在哪里使用？可以网上购物吗？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答 :所有的礼卷可以在相应的商店使用。请点击并选择您想要的礼卷以查询资料.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问 :我想要购买企业用途的礼卷，请问我可以联络谁？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答 :请于办公时间联络我们的客服 1300803636 或电邮至 cs@trip4asia.com
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问 :付款确认后多久内能收到货物？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                答 :标准的时间将是：
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                {'<'} 3 个工作日 - 巴生谷内
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                {'<'} 5 个工作日 - 马来西亚半岛
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                {'<'} 7 个工作日 - 沙巴 & 砂劳越
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问 :预订成功后，我能更换日期吗？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                答 :任何修改只能在遵守以下条件的情况下进行.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                i) 修改必须在日期前7天（至少）进行.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                ii) 填写表格并电邮到 cs@trip4asia.com
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                视情况而定.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问 :预订成功后，我能更换人数吗？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                答 :我们只接受增加人数.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                视情况而定
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

export default connect(mapStateToProps)(Common_LifeStyle);