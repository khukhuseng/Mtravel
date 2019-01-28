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

class AboutUs extends Component<Props> {

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
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                                {lang === 'ZH-CN' ? '关于我们' : lang === 'EN' ? 'About Us' : lang === 'ZH-TW' ? '關於我們' : lang === 'JP' ? '私たちについて' : lang === 'KR' ? '우리에 대해' : lang === 'TH' ? 'เกี่ยวกับเรา' : '关于我们'}
                            </Text>
                        </View>
                    </View>

                    <Form style={{ marginLeft: 10, marginRight: 10 }}>
                        {lang === 'ZH-CN' ? (
                            <View>
                                <View style={{ marginBottom: 10 }}>
                                    <Text>Trip4Asia于2013年创办，由5人起步屹立至今，集团人员已超过100人，遍布亚太区及大洋洲10个国家.</Text>
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <Text>集团的起步源于在传统旅行社，但是跟着时代不同跟进。集团自主研发了一站式的网上酒店预订系统。经过多年的经营集团成功扩展多样化的业务，成为时尚生活与娱乐休闲的一站式服务平台.</Text>
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <Text>
                                        集团坚持不断地进步，势必提供最好的服务去满足尊贵的消费者不同的需求.
                                    </Text>
                                </View>
                            </View>
                        ) : lang === 'EN' ? (
                            <View>
                                <View style={{ marginBottom: 10 }}>
                                    <Text>Trip4asia Travel Sdn. Bhd. was founded in 2013 by 5 founders. Together, Trip4asia’s rapid growth and it has over 100 employees which covered 10 Asia Pacific and Oceania countries until today.</Text>
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <Text>Trip4asia originally started the business as a standard traditional travel agent. With the progress of the times, the group start to develop and launched its one-stop online hotel and accommodation reservations system. After years of effort, Trip4asia has expanded and become an all-in-one service platform for better lifestyle and entertainment.</Text>
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <Text>
                                        Trip4asia persist in the principle of improving constantly, bound to be provide the best services for the customers.
                                    </Text>
                                </View>
                            </View>
                        ) : lang === 'ZH-TW' ? (
                            <View>
                                <View style={{ marginBottom: 10 }}>
                                    <Text>Trip4Asia於2013年創辦，由5人起步屹立至今，集團人員已超過100人，遍布亞太區及大洋洲10個國家.</Text>
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <Text>集團的起步源於在傳統旅行社，但是跟著時代不同跟進。集團自主研發了一站式的網上酒店預訂系統。經過多年的經營集團成功擴展多樣化的業務，成為時尚生活與娛樂休閒的一站式服務平台.</Text>
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <Text>
                                        集團堅持不斷地進步，勢必提供最好的服務去滿足尊貴的消費者不同的需求.
                                    </Text>
                                </View>
                            </View>
                        ) : lang === 'JP' ? (
                            <View>
                                <View style={{ marginBottom: 10 }}>
                                    <Text>Trip4asia TraveSdn. Bhd.は2013年、5人の創設者によって設立されました。Trip4asiaは急成長を遂げ、現在アジアからオセアニアまで10か国で100人以上の従業員がいます.</Text>
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <Text>Trip4asiaはもともと旅行代理店として始まり、時代とともに発展、展開し、ホテル、宿泊施設の予約システムを取り入れました.</Text>
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <Text>
                                        長年の努力を経て、より良いライフスタイル、エンターテイメントを提供するため拡大しています。常に良質なサービスが提供できるよう改善し、努めています.
                                    </Text>
                                </View>
                            </View>
                        ) : lang === 'KR' ? (
                            <View>
                                <View style={{ marginBottom: 10 }}>
                                    <Text>Trip4asia Travel Sdn. Bhd.는 5명의 창립자에 의해 2013년 설립되었습니다.현재까지 100여명의 직원들이 아시아 태평양 및 오세아니아 10개 국가들을 담당하며, 빠르게 성장하고 있습니다.</Text>
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <Text>Trip4asia는 본래 전통적인 여행사로 사업을 시작하였습니다. 그후, 시간이 지남에 따라 원스톱 온라인 호텔 및 숙박예약 시스템을 개발하고 출시하기 시작했습니다. 수년 간의 노력 끝에Trip4asia은 확장을 거듭하며 더 나은 라이프스타일과 엔터테이먼트을 위한 올인원 서비스 플랫폼으로 성장했습니다.</Text>
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <Text>
                                        Trip4asia는 고객에게 최상의 서비스를 제공하기 위해 끊임없이 발전하겠다는 원칙을 고수합니다.
                                    </Text>
                                </View>
                            </View>
                        ) : lang === 'TH' ? (
                            <View>
                                <View style={{ marginBottom: 10 }}>
                                    <Text>Trip4asia ท่องเที่ยว Sdn. Bhd ก่อตั้งขึ้นในปี 2556 โดยผู้ก่อตั้ง 5 คน ธุรกิจมีการเติบโตอย่างรวดเร็วของ Trip4asia และมีพนักงานมากกว่า 100 คนซึ่งครอบคลุมประเทศในเอเชียแปซิฟิกและโอเชียเนียถึง 10 ประเทศจนถึงวันนี้
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <Text>Trip4asia เดิมทีเริ่มดำเนินธุรกิจเป็นตัวแทนท่องเที่ยว ด้วยความก้าวหน้าของกลุ่มเริ่มพัฒนาและเปิดตัวระบบการจองโรงแรมและที่พักแบบออนไลน์แบบครบวงจร หลายปีทีี่ผ่านมาของค Trip4asia ได้พยายามขยายธุรกิจและกลายเป็นแพลตฟอร์มบริการแบบครบวงจรสำหรับการดำเนินชีวิตและความบันเทิงที่ดีขึ้น</Text>
                                </View>
                                <View>
                                    <Text style={{ marginBottom: 10 }}>
                                        Trip4asia ยังคงพัฒนาเเละการปรับปรุงการบริการอย่างต่อเนื่องเพื่อมุ่งมั่นที่จะให้บริการที่ดีที่สุดสำหรับลูกค้า.
                                    </Text>
                                </View>
                            </View>

                        ) : (
                                                    <View>
                                                        <View style={{ marginBottom: 10 }}>
                                                            <Text>Trip4Asia于2013年创办，由5人起步屹立至今，集团人员已超过100人，遍布亚太区及大洋洲10个国家.</Text>
                                                        </View>
                                                        <View style={{ marginBottom: 10 }}>
                                                            <Text>集团的起步源于在传统旅行社，但是跟着时代不同跟进。集团自主研发了一站式的网上酒店预订系统。经过多年的经营集团成功扩展多样化的业务，成为时尚生活与娱乐休闲的一站式服务平台.</Text>
                                                        </View>
                                                        <View style={{ marginBottom: 10 }}>
                                                            <Text>集团坚持不断地进步，势必提供最好的服务去满足尊贵的消费者不同的需求.
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

export default connect(mapStateToProps)(AboutUs);