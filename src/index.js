/* @flow */
import React, { Component } from "react";
import { createAppContainer } from "@react-navigation/native";
import { createBottomTabNavigator, createStackNavigator } from "react-navigation";
import { Image, ImageBackground, ActivityIndicator } from "react-native";
import { Root, View } from "native-base";
import { fadeIn } from "react-navigation-transitions";

// import screens
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import TravelScreen from "./screens/TravelScreen/TravelScreen";
import SupportScreen from "./screens/SupportScreen/SupportScreen";
import CSScreen from "./screens/SupportScreen/SupportDetailScreen/CustomerService";

import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import ProfileAboutUsScreen from "./screens/ProfileDetailScreen/AboutUs";
import ProfileMyAccountScreen from "./screens/ProfileDetailScreen/MyAccount";
import ProfileLanguageScreen from "./screens/ProfileDetailScreen/Language";
import ProfileUserGuideScreen from "./screens/ProfileDetailScreen/UserGuide";
import ProfileCommonQuesScreen from "./screens/ProfileDetailScreen/CommonQues";
import ProfileTnCScreen from "./screens/ProfileDetailScreen/Tnc";
import ProfileTnCAccommodationScreen from "./screens/ProfileDetailScreen/Tnc_Accommodation";
import ProfileTnCLifeStyleScreen from "./screens/ProfileDetailScreen/Tnc_Lifestyle";
import ProfileTnCLogisticScreen from "./screens/ProfileDetailScreen/Tnc_Logistic";
import ProfileTnCTicketingScreen from "./screens/ProfileDetailScreen/Tnc_Ticketing";
import ProfileTnCTourPackageScreen from "./screens/ProfileDetailScreen/Tnc_TourPackage";
import ProfileTnCCashTermScreen from "./screens/ProfileDetailScreen/Tnc_CashTerm";
import ProfileTnCPDPPScreen from "./screens/ProfileDetailScreen/Tnc_PDPP";
import ProfileCommonNormalScreen from "./screens/ProfileDetailScreen/Common_Normal";
import ProfileCommonStayScreen from "./screens/ProfileDetailScreen/Common_Stay";
import ProfileCommonEntertainmentScreen from "./screens/ProfileDetailScreen/Common_Entertainment";
import ProfileCommonLifeStyleScreen from "./screens/ProfileDetailScreen/Common_LifeStyle";
import ProfileCommonTourPackageScreen from "./screens/ProfileDetailScreen/Common_TourPackage";
import ProfileCommonTransportScreen from "./screens/ProfileDetailScreen/Common_Transport";
import ProfileCommonCruiseScreen from "./screens/ProfileDetailScreen/Common_Cruise";


import QrCodeScreen from "./screens/QrCodeScreen/QrCodeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import ResetPwScreen from "./screens/ResetPwScreen/ResetPwScreen";

import AccomodationScreen from "./screens/AccomodationScreen/AccomodationScreen";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    ResetPw: ResetPwScreen,
    Accomodation: AccomodationScreen
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    transitionConfig: () => fadeIn(1000)
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    AboutUs: ProfileAboutUsScreen,
    MyAccount: ProfileMyAccountScreen,
    Language: ProfileLanguageScreen,
    UserGuide: ProfileUserGuideScreen,
    CommonQues: ProfileCommonQuesScreen,
    Tnc: ProfileTnCScreen,
    Tnc_Accommodation: ProfileTnCAccommodationScreen,
    Tnc_LifeStyle: ProfileTnCLifeStyleScreen,
    Tnc_Logistic: ProfileTnCLogisticScreen,
    Tnc_Ticketing: ProfileTnCTicketingScreen,
    Tnc_TourPackage: ProfileTnCTourPackageScreen,
    Tnc_CashTerm: ProfileTnCCashTermScreen,
    Tnc_PDPP: ProfileTnCPDPPScreen,
    Com_Normal: ProfileCommonNormalScreen,
    Com_Stay: ProfileCommonStayScreen,
    Com_Entertainment: ProfileCommonEntertainmentScreen,
    Com_LifeStyle: ProfileCommonLifeStyleScreen,
    Com_TourPackage: ProfileCommonTourPackageScreen,
    Com_Transport: ProfileCommonTransportScreen,
    Com_Cruise: ProfileCommonCruiseScreen
  },
  {
    initialRouteName: "Profile",
    headerMode: "none",
    transitionConfig: () => fadeIn(1000)
  }
);

const SupportStack = createStackNavigator(
  {
    Support: SupportScreen,
    Cs: CSScreen
  },
  {
    initialRouteName: "Support",
    headerMode: "none",
    transitionConfig: () => fadeIn(1000)
  }
);
const bottomTabNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const imgName = (focused && require("./assets/image/bottomTab/home_a.png")) || require("./assets/image/bottomTab/home.png");
          return <Image source={imgName} resizeMode="center" style={{ height: 25, width: 25 }} />;
        }
      }
    },
    Travel: {
      screen: TravelScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const imgName = (focused && require("./assets/image/bottomTab/travel_a.png")) || require("./assets/image/bottomTab/travel.png");
          return <Image source={imgName} resizeMode="center" style={{ height: 25, width: 25 }} />;
        }
      }
    },
    Support: {
      screen: SupportStack,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const imgName = (focused && require("./assets/image/bottomTab/cs_a.png")) || require("./assets/image/bottomTab/cs.png");
          return <Image source={imgName} resizeMode="center" style={{ height: 25, width: 25 }} />;
        }
      }
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const imgName = (focused && require("./assets/image/bottomTab/profile_a.png")) || require("./assets/image/bottomTab/profile.png");
          return <Image source={imgName} resizeMode="center" style={{ height: 25, width: 25 }} />;
        }
      }
    },
    Scan: {
      screen: QrCodeScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const imgName = (focused && require("./assets/image/bottomTab/scan_a.png")) || require("./assets/image/bottomTab/scan.png");
          return <Image source={imgName} resizeMode="center" style={{ height: 25, width: 25 }} />;
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#f64f60",
      showIcon: true,
      showLabel: false
    },
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(bottomTabNavigation);

type Props = {};

type State = {
  isReady: boolean
};
export default class Main extends Component<Props, State> {
  constructor() {
    super();

    this.state = {
      isReady: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isReady: true
      });
    }, 3000);
  }

  render() {
    return (
      <Root>
        {this.state.isReady ? (
          <AppContainer />
        ) : (
            <View style={{ flex: 1 }}>
              <ImageBackground
                source={require("./assets/image/splash_bg.png")}
                resizeMode="cover"
                style={{ width: "100%", height: "100%", justifyContent: "center" }}
              >
                <ActivityIndicator size={"large"} color={"#fff"} />
              </ImageBackground>
            </View>
          )}
      </Root>
    );
  }
}
