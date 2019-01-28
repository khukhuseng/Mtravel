import React, { PureComponent } from "react";
import { FlatList, Dimensions, Image, TouchableOpacity, ImageBackground, StyleSheet, Platform, Alert, Linking } from "react-native";
import { Container, View, Text, Content, Button, Icon, Toast } from "native-base";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { connect } from "react-redux";
import Permissions from "react-native-permissions";
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";

import MHeader from "../../components/mHeader/mHeader";
import menu from "./menu";

import { translate } from "../../utils/translation";

const { width } = Dimensions.get("window");

type Props = {
  navigation: any,
  isLoggedIn: boolean,
  lang: string
};

type State = {
  activeSlide: number
};
class HomeScreen extends PureComponent<Props, State> {
  MENU: Array<any> = menu;
  MENU_COLS: number = 4;

  carouselBanners: Array<any> = [
    { image: require("../../assets/image/homePage/topbanner.jpg"), links: "https://www.google.com" },
    { image: require("../../assets/image/homePage/FATS.jpg"), links: "https://transport.mtravelclub.com/?promotion=bali_transportation" },
    { image: require("../../assets/image/homePage/warn.png"), links: "https://www.facebook.com" }
  ];
  carousel: any;

  constructor() {
    super();

    this.state = {
      activeSlide: 0
    };
  }

  _onPressMenuItem = (routeName: string) => (event: any) => {
    if (routeName === "Accomodation") {
      Permissions.request("location").then(response => {
        if (response === "authorized") {
          this.props.navigation.navigate(routeName);
        } else if (response === "denied") {
          if (Platform.OS === "ios") {
            Alert.alert("Location Permission", "Please enable location permission in settings.", [
              { text: "Cancel", onPress: () => { } },
              { text: "OK", onPress: () => Permissions.openSettings }
            ]);
          }
        }
      });

      if (Platform.OS === "android") {
        LocationServicesDialogBox.checkLocationServicesIsEnabled({
          message: "Use Location ?",
          ok: "YES",
          cancel: "NO"
        })
          .then(function (success) {
            console.log(success); // success => "enabled"
          })
          .catch(error => {
            console.log(error.message); // error.message => "disabled"
          });
      }
    } else {
      this.props.navigation.navigate(routeName);
    }
  };

  _onPressToSignUp = (event: any) => {
    this.props.navigation.navigate("Login");
  };

  _renderMenu = ({ item, index }) => {
    const menuWidth: number = width / 4 - 10;
    const imgWidth: number = menuWidth - 15;

    const name: string = translate(this.props.lang, item.name);

    return (
      <TouchableOpacity onPress={this._onPressMenuItem(item.route)} style={{ width: menuWidth, minHeight: menuWidth }}>
        <Image source={item.image} style={{ paddingHorizontal: 5, width: imgWidth, height: imgWidth }} resizeMode="center" />
        <Text style={{ textAlign: "center", fontSize: 12 }}>{name}</Text>
      </TouchableOpacity>
    );
  };

  _keyExtractor = (item: any, index: number) => `menu-${item.name}-${index}`;

  _onPressBanner = (links: string) => (event: any) => {
    Linking.canOpenURL(links)
      .then(supported => {
        if (supported) {
          Linking.openURL(links);
        }
      })
      .catch(error => { });
  };

  _renderCarouselBanner = ({ item, index }: any) => {
    return (
      <TouchableOpacity onPress={this._onPressBanner(item.links)}>
        <ImageBackground source={item.image} style={{ width, height: 200 }} />
      </TouchableOpacity>
    );
  };

  pagination = () => {
    const { activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={this.carouselBanners.length}
        activeDotIndex={activeSlide}
        containerStyle={[StyleSheet.absoluteFill, { backgroundColor: "transparent", height: "100%", alignItems: "flex-end" }]}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "#fff"
        }}
        inactiveDotOpacity={0.7}
        inactiveDotScale={0.6}
        carouselRef={this.carousel}
        tappableDots={true}
      />
    );
  };

  render() {
    const { lang } = this.props;

    return (
      <Container>
        <View style={{ height: 200, backgroundColor: "transparent" }}>
          <Carousel
            data={this.carouselBanners}
            renderItem={this._renderCarouselBanner}
            ref={c => {
              this.carousel = c;
            }}
            windowSize={width}
            itemWidth={width}
            sliderWidth={width}
            loop={true}
            autoplay={true}
            onSnapToItem={index => this.setState({ activeSlide: index })}
            inactiveSlideOpacity={1}
            inactiveSlideScale={1}
          />
          {this.pagination()}
        </View>
        <Content>
          <View style={{ padding: 5, marginBottom: 15, alignItems: "center" }}>
            <FlatList
              data={this.MENU}
              renderItem={this._renderMenu}
              keyExtractor={this._keyExtractor}
              numColumns={this.MENU_COLS}
              extraData={this.props.lang}
            />
          </View>
        </Content>
        {!this.props.isLoggedIn ? (
          <View style={{ marginTop: 15, marginHorizontal: 20 }}>
            <Button iconLeft full rounded style={{ marginVertical: 10, backgroundColor: "#f64f60" }} onPress={this._onPressToSignUp}>
              <Icon name="person-add" />
              <Text style={{ fontSize: 12 }}>
                {lang === "ZH-CN"
                  ? "登入"
                  : lang === "EN"
                    ? "Login"
                    : lang === "ZH-TW"
                      ? "登入"
                      : lang === "JP"
                        ? "ログイン"
                        : lang === "KR"
                          ? "로그인"
                          : lang === "TH"
                            ? "เข้าสู่ระบบ"
                            : "登入"}
              </Text>
            </Button>
          </View>
        ) : null}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { auth, i18n } = state;
  return {
    isLoggedIn: auth && auth.token,
    lang: i18n.lang
  };
};

export default connect(mapStateToProps)(HomeScreen);