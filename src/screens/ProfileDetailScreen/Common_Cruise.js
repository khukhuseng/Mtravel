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

class Common_Cruise extends Component<Props> {

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
                            {lang === 'ZH-CN' ? '海上之旅' : lang === 'EN' ? 'Cruise' : lang === 'ZH-TW' ? '海上之旅' : lang === 'JP' ? 'クルーズ' : lang === 'KR' ? '크루즈' : lang === 'TH' ? 'เรือครูซ' : '海上之旅'}
                        </Text></View>
                    </View>

                    <Form style={{ marginLeft: 10, marginRight: 10 }}>
                        {lang === 'ZH-CN' ? (
                            <View >
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        预定前须知
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：可以独自一人坐邮轮旅游吗？
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：可以的，但是绝大部分单人乘客需要付上双人或更多的费用.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：邮轮怎样分等级，是不是越贵的越好？
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：按照豪华程度，许多邮轮指南把邮轮从3星到6星的分级， 评级是基于他们的服务和客户的经验。 这些评级是给您最好的保证，享受最好的邮轮假期，并获得最佳价值.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：想带家人一起坐邮轮旅游，小孩可以和大人一张床吗？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：小孩不能和两个大人挤一张床。即使是再小的孩子也是按照一张床位计算的。这和船上核定上船人数以及救生艇可以容纳的人数有关.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：儿童是否有优惠？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：儿童的优惠政策根据每个邮轮公司的政策不同而各异.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：多大的孩子可以坐邮轮，孩子在邮轮上能玩什么？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：6个月以上的婴儿就可以乘坐邮轮了，15天或以上的航线要求12个月以上。邮轮上有专门为儿童设立的俱乐部，会有专门的工作人员带领不同年龄段儿童做适合他们的游戏，邮轮上还有专门的儿童游泳池、青少年水疗馆等等.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：我应该提前多早预订？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：我们建议顾客至少在起航日期的前6个月做预订.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：成功下单后，需要多久时间MTravel才会确认我的预订？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：我们标准的处理时间为7个工作日（等候名单除外）.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：在邮轮上生病了怎么办？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答：邮轮上都设有基本医疗服务中心，并配备合格医生、护士及医疗设施。但是看诊服务都必须由您另行支付。若是在航程中生病而医生无法在船上治疗时，船公司也将送您上岸接受医疗.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        您应该随身携带您的处方药物而非存放在托运行李中。另外建议您随身携带一份药物清单列明药物的名称、剂量以及服用时间以防万一药物丢失.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：乘搭邮轮会晕船吗？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：邮轮出行时间航线都是根据当时的气候状况精心安排的，会避开不稳定的天气和海域。邮轮一般吨位比较大，在海面上行驶会很稳，现代邮轮添加了先进的平衡装置，可以减少邮轮的晃动.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        出行前准备
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：我需要携带护照吗？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：乘客必须携带护照.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：如果航程中停靠了多个国家，我需要办理每个国家的签证吗？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：一般而言，起航港口所在国家及终点港口所在国家的签证是一定需要的。所有乘客都应依据个别旅游情况，直接向游轮公司或其当地领事或大使馆询问核实所需的身份证明等相关文件。若乘客无法提供合适的相关文件，可能会被拒绝登船且无权索取退款.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：我应该携带什么样的衣物？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答：首先，穿着舒适。船上的日常生活是休闲且写意的。我们鼓励您穿任何让您感觉最舒服自在的衣着：运动服，短裤，休闲裤，背心裙等等.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        鞋类应该包括靠岸观光时舒适的步行鞋，以及在甲板上散步时凉鞋等.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        另外在特色餐厅或晚宴安排的行程中，您还需要准备一套正装：女士请着晚礼服，男士请着西装.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：如何解决船上的衣物换洗问题？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：您可要求船舱服务人员将您的衣物送至洗衣房干洗或湿洗，一般专业洗衣和干洗需要额外付费。少数船只也有投币式自助洗衣设备.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：船上的电压是多少，是否需要携带转换插口？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：船上同时配有110V及220V插座。如需转换插头，可以与服务台联系。建议您自行携带转换装置，以防服务台提供的转换器数量不足.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        登船
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：有关托运行李
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：在乘客抵达码头前，须将写好船舱号码及护照英文姓名的行李吊牌挂在要托运登船的托运行李上。托运行李装上船后将被送到您的客舱内.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：有关手提行李
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：登船时您只能携带手提行李，因此请务必将重要的物品，如药品，照相机，尿布和其他必需品放在手提行李中。建议您将泳装也装进手提行李箱里，这样您就可以在等待您的行李被送到的之前享受泳池区域。登上船后，您就可以自由地探索了.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：登船时间
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：一般情况下，您可以在船起航两三个小时之前登船。请紧记，您务必在起航前至少一个小时登上船上，舷梯将会在航行前三十分钟拉起.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：船卡使用
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：办理登船手续完成后，乘客将会得到邮轮登船卡一张。这张邮轮登船卡将是乘客登船下船时的身份识别卡。另外此卡也会绑定乘客信用卡，在邮轮上当成钥匙卡和签帐卡使用.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：救生演习
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：在邮轮启航前半小时，将有一次紧急救生演习，在七短一长警报响时，请穿上紧急救生衣至指定救生集合区集合。救生衣穿戴方法请参照救生员的示范，或位于浴室间墙上之图示说明.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        航程中
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：船上是否提供网络，可否接打电话？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：现代邮轮均具备手机通讯信号，但是船上提供的卫星电话价格非常昂贵。邮轮已经开始提供付费形式的上网服务，具体可以咨询相关邮轮公司.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：在船上通常使用哪种支付方式？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：一般均采用信用卡支付。登船时会将您的船卡和信用卡绑定，船上除赌场和小费外任何消费都可以直接使用船卡进行结算。船上同时设有外币兑换，另有ATM机可以在船上进行通用货币取款操作.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：吸烟政策
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：邮轮上大部分区域为非吸烟区，不过考虑到某些游客的吸烟习惯，也在邮轮上安排了一些吸烟区，如某些休息室、露天甲板，以及停靠码头时。所有客房均属于禁烟区.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：岸上观光
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：岸上观光就是邮轮停靠目的地港后，客人可以在限定的时间内参与岸上活动。旅客可于登船后订购岸上观光活动，或在出发前联系客服。 有些观光活动名额有限，因此我们建议您早日预订.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：返船须知
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：岸上观光活动中，请遵守领队宣布的集合时间，至少提前一个小时到达指定港口办理登船手续。若因个人原因延误返船，所产生后果或费用将由乘客自行承担.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        问：结算消费
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答：邮轮旅游期间，任何消费均不收现金（除小费与博彩外）。乘客在登船前在码头办理登记手续时，需同时办理消费记账手续，并在邮轮行程结束前一晚，持账单与现金至邮轮服务柜台一次结清.
                                </Text>
                                </View>
                            </View>
                        ) : lang === 'EN' ? (
                            <View >
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        Before Booking
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: Is it possible to travel alone?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: Yes it's possible, however single guest who wishes to have a cabin by themselves will have to pay for 2 pax or more, unless stated otherwise.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: What is the rating of cruise ship?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: Cruise ships are rated from 3-stars to 6-stars. Rating are based on their services and customers experience. These ratings is there to give you the best assurance of having the best cruise vacation and getting the best value.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: Can a child share in the same bed with an adult?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: Childrens are not allowed to share in the same bed with adults due to cruise policies (onboarding headcounts and lifeboat occupancy).
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: Do children or infants enjoy special rates?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: It varies from different cruise vessel.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: Can my infant sail with me and what are the activities which is for children and teenagers?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: Most of the cruise require infants to be at least 6 months old (12 months on select cruises). We offer a huge variety of activities onboard and excursions on shore which you\'re able to find the details on the selected cruise.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: Should I book and plan in advance?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: Yes, we recommend you to make your booking at least 6 months in advance before the sailing date due to preparations for a smooth registration and journey.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: How long will it take for a booking to be confirmed and succesful?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: Our standard processing time will be 7 working days. Do take note that some might take longer than usual if your booking fall under the cruise waiting list.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: What happens if I get sick onboard?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A: Every cruise (except for some smaller vessels) have a medical facility and professionals to handle these emergencies.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        Always take along your prescription medication rather than in your checked luggage. Be sure to bring a sufficient supply of medication in it's original container. It's also advisable to carry a written list (drug, dosage and consumption) of your medications."
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: Will I get seasick on the ship?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: Most ships are designed and built using latest technologies and a sophisticated system of stabilisers to sail in rough seas.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        Preparation
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: Do I need a passport?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: Yes, all guests need a valid passport.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: Is there any requirements such as visa for visiting certain ports?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: It depends on your nationality. Most countries still require an entry visa. All guests should verify the identification requirements for their particular travel situation DIRECTLY WITH THE CRUISE LINE OR THEIR LOCAL CONSULATES OR EMBASSIES, as these requirements may change from time to time. Guests arriving for embarkation without proper documentation may be denied boarding and will not be entitled to a refund.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: What type of clothes should I prepare?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A: First and foremost, dress for comfort. Daily life aboard ship is laid-back and casual. You are encouraged to wear whatever makes you feel most comfortable: sportswear, shorts, slacks, sundresses and so on.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Footwear should include comfortable walking shoes for visits ashore and sandals or rubber-soled shoes for strolling on deck.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        In specialty restaurants and on the luxury cruise ships, jackets and ties for men are suggested and cocktail dresses or a nice pantsuit outfit would be appropriate for women. Again, these are guidelines and your evening attire is left up to your discretion."
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: Are there laundry services onboard?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: Almost all cruise ships have laundry facilities and a great many provide dry-cleaning services. There is however, an additional charge for professional laundry and dry-cleaning services. Many ships also have self-service launderettes.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: What electrical voltage is offered onboard?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: Most vessel have both 110-volt and 220-volt outlets in the staterooms. You may ask the crew for converter/adaptor. However it's best that you bring your personal converter/adaptor.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        Embarkation
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: Check-in luggage
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: All check-in luggage should be tagged with provided luggage tag. Your luggage will be delivered to your cabin shortly after it is loaded onboard.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: Carry-on luggage
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        You will only have your carry-on luggage while boarding so be sure to keep important articles such as medicines, cameras, diapers and other necessary items in your carry-on luggage. It's also a good idea to pack your bathing suit in your carry-on luggage so that you can enjoy the pool area while waiting for your luggage to be delivered. Once you are on board you are free to explore the ship.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: Boarding time
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: Generally, you will be allowed to board two or three hours before the ship sails. Keep in mind that you must be on the ship at least one hour before departure, and the gangway will be pulled thirty minutes before sailing.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: SeaPass card
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: Upon completion of check-in, you will receive a SeaPass card. This card will serve as your identification on-board and will be used as your payment method for all onboard charges. In addition, it will also serve as your identification for security procedures when embarking and disembarking the ship and when making purchases on board.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: Muster Drill
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: A muster drill is to familiarize all guests and crew with the location (muster station) where they are to assemble in the unlikely event of an emergency. During this drill, additional safety information (i.e., how to do a life jacket) is presented.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        During Cruise
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: Is Internet access available from the ship? Can I make phone call on board?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: While most ships have telephones in passenger cabins but please note that the costs for ship to shore calling can be quite high. Internet stations are available onboard, prices for internet access vary and are subject to change.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: Will I have a shipboard account?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: Most cruise lines have set up a "cashless" system designed to make your life on board as simple as possible. You simply sign a receipt for each of your on-board purchases and then settle your shipboard account at the end of the cruise. Cash, VISA, American Express, MasterCard, Discover, and personal or traveler's checks are accepted as payment on most cruise lines.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: Smoking Policy
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: For the comfort and enjoyment of guests, all vessel are designated as non-smoking; however, there are designated certain areas of the ship as smoking areas.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: Shore Excursion
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: Guests can enjoy tours and amazing activities in destination cities once ship is docked. You can choose to book shore excursion on ship or contact customer service.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: Debarkation Notice
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A: During the shore excursion guests need to arrive at the designated port for boarding procedures at least an hour ahead of gathering time. If delayed for personal reasons, the consequences will be borne by the passengers themselves.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q: Onboard Expense
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A: The ships operate on a "cashless" system, meaning your SeaPass card will be used as a charge card to make all onboard purchases. A running tab of all your purchases will be kept under separate folio numbers for each guest and an itemized statement left in your stateroom the night before disembarkation.
                            </Text>
                                </View>
                            </View>
                        ) : lang === 'ZH-TW' ? (
                            <View >
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        預定前須知
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：可以獨自一人坐郵輪旅遊嗎？
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：可以的，但是絕大部分單人乘客需要付上雙人或更多的費用.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：郵輪怎樣分等級，是不是越貴的越好？
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答按照豪華程度，許多郵輪指南把郵輪從3星到6星的分級， 評級是基於他們的服務和客戶的經驗。這些評級是給您最好的保證，享受最好的郵輪假期，並獲得最佳價值.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：想帶家人一起坐郵輪旅遊，小孩可以和大人一張床嗎？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：小孩不能和兩個大人擠一張床。即使是再小的孩子也是按照一張床位計算的。這和船上核定上船人數以及救生艇可以容納的人數有關.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：兒童是否有優惠？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：兒童的優惠政策根據每個郵輪公司的政策不同而各異.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：多大的孩子可以坐郵輪，孩子在郵輪上能玩什麼？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：6個月以上的嬰兒就可以乘坐郵輪了，15天或以上的航線要求12個月以上。郵輪上有專門為兒童設立的俱樂部，會有專門的工作人員帶領不同年齡段兒童做適合他們的遊戲，郵輪上還有專門的兒童游泳池、青少年水療館等等.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：我應該提前多早預訂？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：我們建議顧客至少在起航日期的前6個月做預訂.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：成功下單後，需要多久時間MTravel才會確認我的預訂？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：我們標準的處理時間為7個工作日（等候名單除外).
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：在郵輪上生病了怎麼辦？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答：郵輪上都設有基本醫療服務中心，並配備合格醫生、護士及醫療設施。但是看診服務都必須由您另行支付。若是在航程中生病而醫生無法在船上治療時，船公司也將送您上岸接受醫療.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        您應該隨身攜帶您的處方藥物而非存放在托運行李中。另外建議您隨身攜帶一份藥物清單列明藥物的名稱、劑量以及服用時間以防萬一藥物丟失.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：乘搭郵輪會暈船嗎？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：郵輪出行時間航線都是根據當時的氣候狀況精心安排的，會避開不穩定的天氣和海域。郵輪一般噸位比較大，在海面上行駛會很穩，現代郵輪添加了先進的平衡裝置，可以減少郵輪的晃動.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        出行前準備
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：我需要攜帶護照嗎？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：乘客必須攜帶護照。
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：如果航程中停靠了多個國家，我需要辦理每個國家的簽證嗎？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：一般而言，起航港口所在國家及終點港口所在國家的簽證是一定需要的。所有乘客都應依據個別旅遊情況，直接向遊輪公司或其當地領事或大使館詢問核實所需的身份證明等相關文件。若乘客無法提供合適的相關文件，可能會被拒絕登船且無權索取退款.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：我應該攜帶什麼樣的衣物？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：首先，穿著舒適。船上的日常生活是休閒且寫意的。我們鼓勵您穿任何讓您感覺最舒服自在的衣著：運動服，短褲，休閒褲，背心裙等等.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        鞋類應該包括靠岸觀光時舒適的步行鞋，以及在甲板上散步時涼鞋等.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        另外在特色餐廳或晚宴安排的行程中，您還需要準備一套正裝：女士請著晚禮服，男士請著西裝.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：如何解決船上的衣物換洗問題？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：您可要求船艙服務人員將您的衣物送至洗衣房乾洗或濕洗，一般專業洗衣和乾洗需要額外付費。少數船隻也有投幣式自助洗衣設備.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：船上的電壓是多少，是否需要攜帶轉換插口？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：船上同時配有110V及220V插座。如需轉換插頭，可以與服務台聯繫。建議您自行攜帶轉換裝置，以防服務台提供的轉換器數量不足.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        登船
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：有關托運行李
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：在乘客抵達碼頭前，須將寫好船艙號碼及護照英文姓名的行李吊牌掛在要托運登船的托運行李上。托運行李裝上船後將被送到您的客艙內.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：有關手提行李
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：登船時您只能攜帶手提行李，因此請務必將重要的物品，如藥品，照相機，尿布和其他必需品放在手提行李中。建議您將泳裝也裝進手提行李箱裡，這樣您就可以在等待您的行李被送到的之前享受泳池區域。登上船後，您就可以自由地探索了.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：登船時間
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：一般情況下，您可以在船起航兩三個小時之前登船。請緊記，您務必在起航前至少一個小時登上船上，舷梯將會在航行前三十分鐘拉起。
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：船卡使用
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：辦理登船手續完成後，乘客將會得到郵輪登船卡一張。這張郵輪登船卡將是乘客登船下船時的身份識別卡。另外此卡也會綁定乘客信用卡，在郵輪上當成鑰匙卡和簽帳卡使用.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：救生演習
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：在郵輪啟航前半小時，將有一次緊急救生演習，在七短一長警報響時，請穿上緊急救生衣至指定救生集合區集合。救生衣穿戴方法請參照救生員的示範，或位於浴室間牆上之圖示說明.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        航程中
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：船上是否提供網絡，可否接打電話？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：現代郵輪均具備手機通訊信號，但是船上提供的衛星電話價格非常昂貴。郵輪已經開始提供付費形式的上網服務，具體可以諮詢相關郵輪公司.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：在船上通常使用哪種支付方式？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：一般均採用信用卡支付。登船時會將您的船卡和信用卡綁定，船上除賭場和小費外任何消費都可以直接使用船卡進行結算。船上同時設有外幣兌換，另有ATM機可以在船上進行通用貨幣取款操作.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：吸煙政策
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：郵輪上大部分區域為非吸煙區，不過考慮到某些遊客的吸煙習慣，也在郵輪上安排了一些吸煙區，如某些休息室、露天甲板，以及停靠碼頭時。所有客房均屬於禁煙區.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：岸上觀光
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：岸上觀光就是郵輪停靠目的地港後，客人可以在限定的時間內參與岸上活動。旅客可於登船後訂購岸上觀光活動，或在出發前聯繫客服。有些觀光活動名額有限，因此我們建議您早日預訂.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：返船須知
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        答：岸上觀光活動中，請遵守領隊宣布的集合時間，至少提前一個小時到達指定港口辦理登船手續。若因個人原因延誤返船，所產生後果或費用將由乘客自行承擔.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        問：結算消費
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        答：郵輪旅遊期間，任何消費均不收現金（除小費與博彩外）。乘客在登船前在碼頭辦理登記手續時，需同時辦理消費記賬手續，並在郵輪行程結束前一晚，持賬單與現金至郵輪服務櫃檯一次結清.
                                </Text>
                                </View>
                            </View>
                        ) : lang === 'JP' ? (
                            <View >
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:1人での申し込みは可能ですか？
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:はい。特例がない限り、２名様分の料金を頂きます.
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:このクルーズの評価は？
                                    </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:３つ星から６つ星です。お客様からの評価に基づき、より快適な旅を提供しています.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:子供は大人のベットを使えますか？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:船旅規約に基づき、ベットを共有する事はできないです。（緊急時、救命搬の人数に制限があるため）
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:子供、幼児のための特別価格はありますか？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:船の種類、大きさによって変わります.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:子供、幼児のために船旅中の遊び場、キッズスペースなどありますか？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:船によっては様々なオプションがあります。幼児は6か月以上から（船によっては12か月以上）乗船できます.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:旅行は早めに予約したほうがいいですか？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:はい。旅行日より6か月前の予約をお勧めします.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:予約完了するまでどのくらいかかりますか？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:約７営業日くらい【キャンセル待ちなどの場合は日にちがかかってしまう場合があります.）
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:乗船中に体調をくずしてしまった場合は？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        A:小さいクルーズ以外は救急時のために医師が乗船しています。医師からの処方箋、薬などある方は持参していた方が望ましい.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        您应该随身携带您的处方药物而非存放在托运行李中。另外建议您随身携带一份药物清单列明药物的名称、剂量以及服用时间以防万一药物丢失.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:船酔いしますか？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:たいていの船は、荒れた海でも問題ない高性能な技術で作られています.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        準備
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:パスポートは必要ですか？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:はい。有効なパスポートが必要です.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:ビザなどは必要ですか？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:国によって違います。今でもビザが必要な国が多いので、旅行日程を確認後、訪れる国の領事館などにご確認下さい。入国書類、ビザなどがそろっていない場合は入国拒否される場合もあります.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:服装は？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:心地良い服装で大丈夫です。レストランなどにお越しの際は男性ジャケット、ネクタイなどのドレスコードをお勧めしますが、乗船中はフォーマルな服装で問題ありません.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:乗船中のランドリーサービスはありますか？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:たいていのクルーズにはコインランドリー、ランドリーサービスがございます。ランドリーサービスをご使用の際、料金が発生する場合がございます.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:船での電圧はどのくらいですか？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:たいていの船では１１０から２２０ボルトです。変圧器などの貸し出し可能な場合もありますが持参して頂く事をお勧め致します.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        搭乗
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        お預け荷物
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        チェックインの際にカバンにタグが必要です。出航後にお部屋に荷物が届きます.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        手荷物
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        薬、カメラ、おむつ、その他貴重品などは手荷物で持参して下さい。お預け荷物を待っている間、プールなど行かれる場合は荷物を持ち込む事をお勧めします.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        搭乗時間
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        2-3時間前から始めます。少なくとも出発1時間前までにはお越しください。３０分前には出入口が閉められます.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        SEAPASSカード
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        チェックイン後、SEAPASSカードを受け取ります。このカードは旅行中、身分証明、お支払などにお使いできます.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        避難訓練
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        緊急時に備えての訓練がございます。指定の場所にお集まり頂き、ライフジャケット着用方法などの訓練を致します.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        乗船中
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        Q:乗船中、インターネット、電話は使用できますか？
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        A:お客様のキャビンに電話がございます。インターネットの環境もあります。料金は変動します.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        船上でのお支払い
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        乗船中はキャッシュレスで生活できます。購入の際サインをして頂き、クルーズ終了時、現金、クレジットカード（ VISA, American Express, MasterCard, Discover）、トラベラーズチェックでお支払いください.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        喫煙
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        快適な旅をしていただくため、定められた場所での喫煙をお願い致します.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        渡航先
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        渡航先でのツアー、アクティビティなどの予約可能です。カスタマーサービスにお立ち寄りください.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        降りる際の注意
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        決められた場所に1時間前には集合してください。お客様の事情で遅れた場合はお客様の責任になります.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        乗船中の費用
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        乗船中は現金をお使いできません。（TIP,ギャンブル以外）。SEAPASSカードでお過ごしいただきますので下船前日に清算をしてください.
                                </Text>
                                </View>
                            </View>
                        ) : lang === 'KR' ? (
                            <View >
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        예약 전에 알아둬야 할 것
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 혼자서 유람선 여행을 선택할 수 있나요?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 네. 하지만 대부분은 한명이더라도 2명의 비용 혹은 더욱 많은 비용이 생깁니다.
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 유람선의 등급은 비쌀수록 좋은건가요?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 유람선은 3성에서 6성으로 등급을 나눕니다. 등급은 이들의 서비스와 고객에 대한 경혐을 통한 것입니다. 이런 등급은 고객에게 최고의 서비스를 보장하고 유람선에서의 후일을 누릴 수 있는 최고의 가치를 제공합니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 가족들과 같이 유람선을 타고 싶은데요, 아이와 어른이 같은 침대를 사용할 수 있나요?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 아이와 어른이 같은 침대를 사용할 수 없습니다. 아이의 나이와 상관없이 침대 비용을 내야합니다. 이는 유람선의 인수 제한과 구명 보트의 인수 제한과 관련이 있습니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 아동 혜택이 있나요?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 아동 우대 정책은 유람선의 회사 정책에 따라 다를 수 있습니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 아이가 몇 살이면 유람선을 탈 수 있나요? 아이들이 유람선에서 즐길 수 있는 항목은 무엇이 있나요?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 6개월 이상인 아이들은 유람선을 탈 수 있어요. 15일 이상의 항선은 12개월 이상이여야 합니다. 유람선에는 아동들을 위한 클럽이 있고 전문 직원이 아이들의 연령별에 맞는 게임을 제공합니다. 유람선에는 아이들을 위한 수용장, 청소년 스파관 등이 있습니다
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 몇 일전에 미리 예약해야 하나요?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 출항 6개월 전에 예약하는 것을 추천합니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 예약을 완료한 후 한 후 언제 MTravel에서 저의 예약을 확인하나요?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 우리의 표준 처리 시간은 7 근무 일 (대기 명단 제외)입니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 유람선에서 병이 생기면 어떻게 해야 되나요?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 유람선에는 기본적인 의료 서비스 센터, 의사, 간호사와 의료기기가 있습니다. 하지만 진료 비용은 따로 지급해야 합니다. 유람 과정에서 병이 생기고 의사가 치료할 수 없으면 유람선 회사에서 항구까지 모셔가 치료를 받게 할 것입니다. 고객은 처방 약품을 소지해야 하며 약품이 없어지는 상황을 고려해서 약품의 명칭, 용량과 사용 시간을 적어둬야 합니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 유람선을탈때배멀미가생기나요?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 유람선의항선은기후에따라정확히정했고불안정한기후와해역을피했습니다.유람선은무게가있기에바다에서안정하게운항할수있고선진한평행장치를장착하여유람선의흔들림을줄였습니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        출항전의준비
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 여권을 갖고 가야하나요?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 승객은 반드시 여권을 갖고 있어야 합니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 여러개의 국가를 걸치면 모든 국가의 비자를 밟아야 하나요?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        일반적으로 출발과 종료 항구 국가의 비자는 반드시 필요합니다. 승객들은 자신의 여행 상황에 의하여 유람선 회사 혹은 현지 영사관 혹은 대사관에 신분을 증명할 수 있는 서류를 직접 제출해야 합니다. 승객이 관련 서류를 제공하지 못하면 배를 탑승할 수 없고 비용도 돌려받을 수 없습니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 어떤 옷을 채겨가야 하나요?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 우선 편안한 옷들을 챙겨야 합니다. 유람선에서의 생활은 자유롭고 편안합니다. 하여 고객이 편안하게 입을 수 있는 옷들을 추천합니다. 예를 들면 운동복, 반바지, 캐쥬얼 바지, 점퍼 스커트 등. 신발은 항구 주변에서 관광할 때 걷기 편한 신발과 유랍선에서 산책할 때 편안한 샌들을 추천합니다. 그리고 특색 삭당혹은 저녁 행사를 위해 정장을 한벌 준비해야 합니다. 여성은 드레스, 남성은 양복을 준비하셔야 합니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 유람선에서 어떻게 옷을 갈아입고 씻어야 합니까?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        "답변: 유람선 서비스 직원들에게 옷을 세탁방에 가져가 세척할 수 있으며 전문적인 세척이나 드라이 세척은 추가 비용이 나옵니다. 일부 유람선에는 동전 투입형 셀프 세탁 설비가 배치되어 있습니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 유랍선의 전압은 얼마인가요? 전환 코드를 가져가야 하나요?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>답변: 유람선에는 110V와 220V 콘센트가 있습니다. 전환 코드가 필요하면 카운터에 연락하세요. 카운터에서 전환 장치가 부족해서 제공하지 못하는 상황이 나타날 수 있기에  전환 장치를 갔고 가는 것을 추천합니다. 答：您可要求船舱服务人员将您的衣物送至洗衣房干洗或湿洗，一般专业洗衣和干洗需要额外付费。少数船只也有投币式自助洗衣设备.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        탑승
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 짐 위탁 관련.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        "답변: 승객이 항구에 도착하기 전에 유람선의 번호와 여권의 영어 이름이 적힌 명패를 짐에 달아서 배에 위탁해야 합니다. 위탁한 짐은 고객이 탑승한 후 고객의 방으로 가져다 줍니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 핸드 가방
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 탑승할 때 핸드 가방만 갖고 올라갈 수 있기에 규중한 약품, 카메라, 기저귀등 물품은 위탁 가방에 넣으세요. 수영복은 핸드 가방에 넣으면 짐이 방에 도착하기 전에 갈아입고 수영장을 즐길 수 있고 유람선을 돌아다닐 수 있습니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 탑승 시간
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 일반적으로 출항 3시간 전에 탑승할 수 있습니다. 반드시 출항하기 전 1시간전에 탑승해야 합니다. 사다리는 출항 30분 전에 철수합니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 유람선 SeaPass 카드의 사용.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 탑승 수속을 완료하면 유람선 카드를 받을 수 있습니다. 고객이 유람선을 오르고 내릴 때 신분을 확인하는 카드 입니다. 그리고 이 카드는 고객의 신용카드와 연결되었기에 우람선에서 키 카드와 지급 카드로 사용할 수 있습니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 구생 연습.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        "답변: 충항하기 반시간 전에 구생 연습을 진행합니다. 7번 짧고 1번 긴 경보가 울리면 반드시 구생 조끼를 입고 구생 장소로 집합해야 합니다. 구성 조끼의 입는 방법은 구생 인원의 시범을 따르거나 화장실 벽에 적힌 지시도를 따르면 됩니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        운행과정에서
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        "질문: 유람선에서 인터넷 서비스를 제공하나요? 전화를 주고 받을 수 있나요?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 현대화 유람선은 핸드폰 통신 신호가 있습니다. 하지만 위성 전화의 가격을 아주 비쌉니다. 유람선에서는 유료 인터넷 서비스를 제공하고 있습니다. 관련 정보는 유람선 회사에 문의하세요.
                           </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 유람선에서는 어떠한 지불 방식을 사용할 수 있나요?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 일반적으로 신용카드으로 지급할 수 있습니다. 탑승할 때 고객의 유람선 카드와 신용카드를 묶습니다. 유람선의 카지노와 팁도 유람선 카드로 결제할 수 있습니다. 그리고 유람선에는 환전 서비스를 제공하고 ATM 기기도 제공합니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 흡연 정책.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        "답변: 유람선의 대부분 구역은 흡연 금지 구역입니다. 하지만 고객들의 흡연 습관을 고려해서 흡연실을 설치했습니다. 일부 오락실, 갑반과 항구 등에서 흡연실을 마련했습니다. 하지만 객실은 흡연 금지 구역입니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 여행지 관광.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        답변: 여행지 관광은 우람선이 항구에 도착한 후 고객들이 지정한 시간 안에 여행지를 관람할 수 있는 시간입니다. 고객들이 탑승한 후 여행지 관광을 구매하거나 출발하기전에 고객 센터와 연락할 수 있습니다. 일부 여행지 관광은 인수 제한이 있기에 미리 예약하기를 바랍니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 반항정책
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        "답변: 배에서 내려 관람할 때 가이드가 알려준 집합 시간을 준수해야 합니다. 1시간 전에 지정한 항구에서 탑승 수속을 진행해야 합니다. 개인의 원인으로 반항 시간을 미뤘을 때 발생한  모든 결과와 비용을 고객이 책임져야 합니다.
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        질문: 결산소비
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        "답변: 유람선 여행 기간에는 어떠한 현금(팁과 가지노 제외)을 받지 않습니다. 고객이 탑승하기전 항구에서 등록 수속을 진행할 때 소비 기록 수속을 같이 밟아야 하며 여행이 끝나기 하루 전에 리스트와 현금을 들고 카운터에서 결산해야 합니다.
                            </Text>
                                </View>
                            </View>
                        ) : lang === 'TH' ? (
                            <View >
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        ก่อนการจอง
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: สามารถเดินทางไปคนเดียวได้หรือไม่?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: ได้ ทั้งนี้แขกผู้เข้าพักคนเดียวที่ประสงค์จะมีห้องโดยสารส่วนตัวจะต้องจ่ายเงินสำหรับ 2 ท่านหรือมากกว่าเว้นแต่ระบุไว้เป็นอย่างอื่น
                                </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: มีการจัดอันดับเรือครูซอย่างไร?
                                </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: เรือครูซทั้งหมดจะได้รับการจัดอันดับตั้งแต่ 3 ดาวถึง 6 ดาว การให้คะแนนจะขึ้นอยู่กับบริการและประสบการณ์ตรงของลูกค้า การให้คะแนนเหล่านี้มีไว้เพื่อให้คุณมั่นใจได้ว่าจะได้ล่องเรือที่ดีที่สุดและได้รับค่าที่ดีที่สุด
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: เด็กสามารถใช้เตียงเดียวกันกับผู้ใหญ่ได้หรือไม่?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: เด็กไม่ได้รับอนุญาตให้เข้าพักในเตียงเดียวกันกับผู้ใหญ่เนื่องจากนโยบายการล่องเรือ (การใช้งานบนเรือและการใช้งานเรือชูชีพ)
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: มีราคาพิเศษให้เด็กหรือทารกหรือไม่?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: ราคาจะแตกต่างกันไป ขึ้นอยู่กับชนิดและบริการของเรือแต่ละประเภท
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ทารกของฉันสามารถขึ้นเรือไปกับฉันได้ไหมและมีกิจกรรมอะไรบ้างสำหรับเด็กและวัยรุ่น?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: การล่องเรือส่วนใหญ่กำหนดให้ทารกต้องมีอายุอย่างน้อย 6 เดือนขึ้นไป (12 เดือนสำหรับบางลำ) เรานำเสนอกิจกรรมหลากหลายรูปแบบบนเรือรวมถึงกิจกรรมทัศนศึกษาบนชายฝั่งซึ่งคุณสามารถหารายละเอียดเกี่ยวกับการล่องเรือที่เลือกได้
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ฉันควรจองและวางแผนล่วงหน้าหรือไม่?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        ตอบ: ใช่ เราขอแนะนำให้คุณทำการจองล่วงหน้าอย่างน้อย 6 เดือนก่อนกำหนดวันเดินเรือ เพื่อให้การเตรียมพร้อมในการลงทะเบียนและการเดินทางเป็นไปด้วยความราบรื่น
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ระบบใช้เวลาเท่าใดสำหรับยืนยันการจอง?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: เวลาในการดำเนินการมาตรฐานของเราคือ 7 วันทำการ ยกเว้นการจองที่ขึ้นสถานะ รอยืนยันเรือ
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: กรณีที่ฉันป่วยอยู่บนเรือ จะทำเช่นไร?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำตอบ: เรือครูซทุกลำ (ยกเว้นเรือขนาดเล็กบางชนิด) มีสถานพยาบาลและผู้เชี่ยวชาญในการจัดการกับภาวะฉุกเฉินเหล่านี้
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        กรุณาพกใบสั่งยาจากแพทย์ติดกระเป๋ามาเสมอ ใช้ยาจากบรรจุภัณฑ์ใหม่ซึ่งมียาบรรจุอยู่เต็ม รวมถึงคำอธิบายการใช้ยา (ชื่อยา ปริมาณที่ต้องใช้หรือบริโภค) ของคุณ
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ฉันมีโอกาสเมาเรือหรือไม่ ?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: เรือส่วนใหญ่ได้รับการออกแบบและสร้างโดยใช้เทคโนโลยีสมัยใหม่ มีระบบรักษาสมดุลของเรือที่มีความซับซ้อนในการล่องเรือในทะเลที่มีคลื่นลมแรง
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        การเตรียมความพร้อม
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ฉันจำเป็นต้องพกพาสปอร์ต?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: ใช่ แขกทุกคนจำเป็นต้องพกพาสปอร์ตที่ยังไม่หมดอายุ
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: มีข้อกำหนดสำหรับวีซ่าในการเข้าท่าเทียบเรือบางแห่งหรือไม่?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: ขึ้นอยู่กับสัญชาติของคุณ ประเทศส่วนใหญ่ยังคงต้องมีวีซ่าเข้าประเทศ ผู้เข้าพักทุกคนควรตรวจสอบรายละเอียดกับบริษัทเดินเรือหรือปรึกษาสถานกงสุลท้องถิ่นของตนโดยตรงเนื่องจากข้อกำหนดเหล่านี้อาจมีการเปลี่ยนแปลงเป็นครั้งคราว ผู้เข้าพักที่เดินทางมาถึงท่าจอดเรือโดยไม่มีเอกสารประกอบที่ถูกต้องอาจถูกปฏิเสธการเข้าพักและไม่ได้รับเงินคืน
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ควรเตรียมเสื้อผ้าชนิดใดไปขึ้นเรือ?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำตอบ: คุณควรสวมใส่อะไรก็ตามที่ทำให้คุณรู้สึกสบายที่สุด เช่น ชุดกีฬากาง เกงขาสั้น กางเกงทรงหลวม กางเกงยีนส์และอื่น ๆ
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        รองเท้าควรมีรองเท้าเดินสบายสำหรับการเดินเล่นบนชายหาดและรองเท้าแตะหรือรองเท้าหุ้มยางเพื่อเดินเล่นบนดาดฟ้าเรือ
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        ชุดสูทกับเนคไทหรือโบว์ไทสำหรับคุณผู้ชาย และชุดเดรสหรือชุดราตรีสำหรับคุณผู้หญิงไว้ใส่เวลาไปรับประทานอาหารที่ร้านอาหารบนเรือ ทั้งนี้ขึ้นอยู่กับดุลพินิจของท่านเอง
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: มีบริการซักอบรีดบนเรือหรือไม่?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: เรือครูซเกือบทั้งหมดมีสิ่งอำนวยความสะดวกสำหรับการซักรีดและมีบริการซักแห้งให้ อย่างไรก็ตามอาจมีค่าใช้จ่ายเพิ่มเติมสำหรับบริการซักรีด เรือบางลำให้บริการอุปกรณ์สำหรับซักรีดด้วยตัวเอง
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ไฟฟ้าที่ใช้บนเรือมีค่าแรงดันไฟฟ้าเท่าไหร่?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: เรือส่วนใหญ่มีทั้งเต้าเสียบ 110 โวลต์และ 220 โวลต์ในห้องนอน คุณอาจขอให้ตัวแปลงไฟหรืออะแดปเตอร์จากลูกเรือ อย่างไรก็ตามคุณควรพกตัวแปลงไฟหรืออะแดปเตอร์ส่วนตัวมาเอง
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        การขึ้นเรือ
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: เช็คอินกระเป๋าเดินทาง
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: กระเป๋าเดินทางเช็คอินทุกใบควรติดป้ายที่กระเป๋าเดินทาง กระเป๋าเดินทางของคุณจะถูกส่งไปยังห้องโดยสารของคุณไม่นานหลังจากที่มีการขนขึ้นบนเรือ
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: กระเป๋าเดินทางที่นำติดตัวไปด้วย
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: คุณจะมีกระเป๋าติดตัวติดตัวขณะขึ้นเรือด้วยเพื่อให้เก็บสิ่งของที่สำคัญเช่นยา กล้องถ่ายรูป ผ้าอ้อมเด็กและสิ่งของอื่น ๆ ที่จำเป็น นอกจากนี้ควรเก็บชุดว่ายน้ำไว้ในกระเป๋าถือเพื่อให้คุณสามารถเพลิดเพลินไปกับบริเวณสระว่ายน้ำในขณะที่รอให้กระเป๋าของคุณจัดส่งไปที่ห้อง เมื่อคุณอยู่บนเรือแล้วคุณสามารถเดินสำรวจรอบ ๆ เรือได้
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: เวลาขึ้นเรือ
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: โดยทั่วไปคุณจะได้รับอนุญาตให้ขึ้นเรือสองหรือสามชั่วโมงก่อนเวลาเดินเรือ โปรดจำไว้ว่าคุณต้องอยู่บนเรืออย่างน้อยหนึ่งชั่วโมงก่อนออกเดินทางและทางเดินเชื่อมจะถูกดึงเก็บสามสิบนาทีก่อนที่ถึงเวลาแล่นเรือ
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: บัตร SeaPass ?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: สัญญาณเสียงแตรบนเรือ
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: สัญญาณเสียงแตรจะดังขึ้นให้ลูกเรือทุกคนมีความคุ้นเคยกับตำแหน่ง (สถานีชุมนุม) ซึ่งจะรวมตัวกันในกรณีที่เกิดเหตุการณ์ฉุกเฉิน ในระหว่างการทดสอบเสียงแตรนี้จะมีการนำเสนอข้อมูลด้านความปลอดภัยเพิ่มเติม (เช่น วิธีสวมเสื้อชูชีพ)
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        ระหว่างล่องเรือ
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: บนเรือมีอินเทอร์เน็ตให้ใช้งานหรือไม่? ฉันสามารถโทรศัพท์ทางไกลได้หรือไม่?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: เรือส่วนใหญ่มีโทรศัพท์ให้อยู่ในห้องโดยสาร ทั้งนี้ค่าใช้จ่ายในการใช้โทรศัพท์บนเรือไปยังฝั่งอาจสูงมาก บนเรือมีให้บริการอินเทอร์เน็ตซึ่งราคาอาจแตกต่างกันออกไปแล้วแต่บริษัทเรือ
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ฉันจำเป็นต้องเปิดบัญชีบนเรือหรือไม่?
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: เรือครูซส่วนใหญ่ได้จัดทำระบบการชำระเงิน ที่ออกแบบมาเพื่อให้การใช้จ่ายของคุณบนเรือเป็นเรื่องง่ายที่สุด คุณเพียงแค่ลงชื่อบนใบเสร็จรับเงินสำหรับการซื้อสินค้าบนเรือแต่ละครั้ง ระบบจะทำการรวมค่าใช้จ่ายทุกบิล ณ เวลาที่การเดินเรือสิ้นสุด คุณสามารถชำระด้วยเงินสด บัตรวีซ่า บัตรอเมริกันเอ็กซ์เพรสหรือบัตรมาสเตอร์การ์ด ซึ่งเป็นที่ยอมรับสำหรับบริษัทเดินเรือทั่วไป
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: นโยบายการสูบบุหรี่
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: เพื่อความสะดวกสบายและความเพลิดเพลินของแขกผู้เข้าพักเรือทุกลำถูกกำหนดให้เป็นเขตปลอดบุหรี่ อย่างไรก็ตามเรือครูซทุกลำจะมีพื้นที่สำหรับสูบบุหรี่ให้อยู่แล้ว
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: กิจกรรมที่เราจะทำเมื่อ เรือจอดตามเมืองต่างๆ
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: ผู้เข้าพักสามารถเพลิดเพลินไปกับทัวร์และกิจกรรมที่น่าตื่นตาตื่นใจในเมืองปลายทางได้เมื่อเรือจอดเทียบท่าเมืองต่างๆ คุณสามารถเลือกที่จะจองเที่ยวฝั่งได้จากเรือหรือติดต่อฝ่ายบริการลูกค้า
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ประกาศเกี่ยวกับการขึ้นเครื่องหมาย
                            </Text>
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text>
                                        คำตอบ: ในระหว่างการเที่ยวชมฝั่งลูกเรือจำเป็นต้องมาถึงท่าเรือที่กำหนดไว้เพื่อขึ้นเรืออย่างน้อยหนึ่งชั่วโมงก่อนเวลารวมพล หากล่าช้าด้วยเหตุผลส่วนตัวผลที่เกิดขึ้นจะส่งผลกับผู้โดยสารนั้นๆ โดยตรง
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำถาม: ค่าใช้จ่ายบนเรือ
                            </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>
                                        คำตอบ: บนเรือใช้ระบบ "cashless" ซึ่งหมายถึงบัตร SeaPass ของคุณจะถูกใช้เป็นบัตรหลักในการสั่งซื้อสินค้าทั้งหมด รายการซื้อทั้งหมดของคุณจะถูกเก็บแยกต่างหากจากผู้เข้าพักท่านอื่นรวมถึงรายการสิ่งของที่เหลือไว้ในห้องนอนของคุณในคืนก่อนที่จะขึ้นฝั่ง
                            </Text>
                                </View>
                            </View>

                        ) : (
                                                    <View >
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                预定前须知
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：可以独自一人坐邮轮旅游吗？
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：可以的，但是绝大部分单人乘客需要付上双人或更多的费用.
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：邮轮怎样分等级，是不是越贵的越好？
                                </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：按照豪华程度，许多邮轮指南把邮轮从3星到6星的分级， 评级是基于他们的服务和客户的经验。 这些评级是给您最好的保证，享受最好的邮轮假期，并获得最佳价值.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：想带家人一起坐邮轮旅游，小孩可以和大人一张床吗？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：小孩不能和两个大人挤一张床。即使是再小的孩子也是按照一张床位计算的。这和船上核定上船人数以及救生艇可以容纳的人数有关.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：儿童是否有优惠？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：儿童的优惠政策根据每个邮轮公司的政策不同而各异.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：多大的孩子可以坐邮轮，孩子在邮轮上能玩什么？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：6个月以上的婴儿就可以乘坐邮轮了，15天或以上的航线要求12个月以上。邮轮上有专门为儿童设立的俱乐部，会有专门的工作人员带领不同年龄段儿童做适合他们的游戏，邮轮上还有专门的儿童游泳池、青少年水疗馆等等.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：我应该提前多早预订？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：我们建议顾客至少在起航日期的前6个月做预订.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：成功下单后，需要多久时间MTravel才会确认我的预订？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：我们标准的处理时间为7个工作日（等候名单除外）.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：在邮轮上生病了怎么办？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                答：邮轮上都设有基本医疗服务中心，并配备合格医生、护士及医疗设施。但是看诊服务都必须由您另行支付。若是在航程中生病而医生无法在船上治疗时，船公司也将送您上岸接受医疗.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                您应该随身携带您的处方药物而非存放在托运行李中。另外建议您随身携带一份药物清单列明药物的名称、剂量以及服用时间以防万一药物丢失.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：乘搭邮轮会晕船吗？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：邮轮出行时间航线都是根据当时的气候状况精心安排的，会避开不稳定的天气和海域。邮轮一般吨位比较大，在海面上行驶会很稳，现代邮轮添加了先进的平衡装置，可以减少邮轮的晃动.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                出行前准备
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：我需要携带护照吗？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：乘客必须携带护照.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：如果航程中停靠了多个国家，我需要办理每个国家的签证吗？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：一般而言，起航港口所在国家及终点港口所在国家的签证是一定需要的。所有乘客都应依据个别旅游情况，直接向游轮公司或其当地领事或大使馆询问核实所需的身份证明等相关文件。若乘客无法提供合适的相关文件，可能会被拒绝登船且无权索取退款.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：我应该携带什么样的衣物？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                答：首先，穿着舒适。船上的日常生活是休闲且写意的。我们鼓励您穿任何让您感觉最舒服自在的衣着：运动服，短裤，休闲裤，背心裙等等.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                鞋类应该包括靠岸观光时舒适的步行鞋，以及在甲板上散步时凉鞋等.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                另外在特色餐厅或晚宴安排的行程中，您还需要准备一套正装：女士请着晚礼服，男士请着西装.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：如何解决船上的衣物换洗问题？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：您可要求船舱服务人员将您的衣物送至洗衣房干洗或湿洗，一般专业洗衣和干洗需要额外付费。少数船只也有投币式自助洗衣设备.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：船上的电压是多少，是否需要携带转换插口？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：船上同时配有110V及220V插座。如需转换插头，可以与服务台联系。建议您自行携带转换装置，以防服务台提供的转换器数量不足.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                登船
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：有关托运行李
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：在乘客抵达码头前，须将写好船舱号码及护照英文姓名的行李吊牌挂在要托运登船的托运行李上。托运行李装上船后将被送到您的客舱内.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：有关手提行李
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：登船时您只能携带手提行李，因此请务必将重要的物品，如药品，照相机，尿布和其他必需品放在手提行李中。建议您将泳装也装进手提行李箱里，这样您就可以在等待您的行李被送到的之前享受泳池区域。登上船后，您就可以自由地探索了.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：登船时间
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：一般情况下，您可以在船起航两三个小时之前登船。请紧记，您务必在起航前至少一个小时登上船上，舷梯将会在航行前三十分钟拉起.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：船卡使用
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：办理登船手续完成后，乘客将会得到邮轮登船卡一张。这张邮轮登船卡将是乘客登船下船时的身份识别卡。另外此卡也会绑定乘客信用卡，在邮轮上当成钥匙卡和签帐卡使用.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：救生演习
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：在邮轮启航前半小时，将有一次紧急救生演习，在七短一长警报响时，请穿上紧急救生衣至指定救生集合区集合。救生衣穿戴方法请参照救生员的示范，或位于浴室间墙上之图示说明.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                航程中
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：船上是否提供网络，可否接打电话？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：现代邮轮均具备手机通讯信号，但是船上提供的卫星电话价格非常昂贵。邮轮已经开始提供付费形式的上网服务，具体可以咨询相关邮轮公司.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：在船上通常使用哪种支付方式？
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：一般均采用信用卡支付。登船时会将您的船卡和信用卡绑定，船上除赌场和小费外任何消费都可以直接使用船卡进行结算。船上同时设有外币兑换，另有ATM机可以在船上进行通用货币取款操作.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：吸烟政策
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：邮轮上大部分区域为非吸烟区，不过考虑到某些游客的吸烟习惯，也在邮轮上安排了一些吸烟区，如某些休息室、露天甲板，以及停靠码头时。所有客房均属于禁烟区.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：岸上观光
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：岸上观光就是邮轮停靠目的地港后，客人可以在限定的时间内参与岸上活动。旅客可于登船后订购岸上观光活动，或在出发前联系客服。 有些观光活动名额有限，因此我们建议您早日预订.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：返船须知
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 20 }}>
                                                            <Text>
                                                                答：岸上观光活动中，请遵守领队宣布的集合时间，至少提前一个小时到达指定港口办理登船手续。若因个人原因延误返船，所产生后果或费用将由乘客自行承担.
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                问：结算消费
                            </Text>
                                                        </View>
                                                        <View style={{ marginBottom: 5 }}>
                                                            <Text>
                                                                答：邮轮旅游期间，任何消费均不收现金（除小费与博彩外）。乘客在登船前在码头办理登记手续时，需同时办理消费记账手续，并在邮轮行程结束前一晚，持账单与现金至邮轮服务柜台一次结清.
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

export default connect(mapStateToProps)(Common_Cruise);
