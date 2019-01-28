/* @flow */

import React, { Component } from "react";
import { Container, View, Text, Content, Icon, Button, Form } from "native-base";
import { FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import Styles from "./ProfileDetail.style";
import MHeader from "../../components/mHeader/mHeader";

type Props = {
  navigation: any,
  lang: string
};

type State = {
  selectedLanguage: string
};
class language extends Component<Props> {
  i18nLanguages: Array<any> = [
    {
      label: "English",
      value: "EN"
    },
    {
      label: "简体中文",
      value: "ZH-CN"
    },
    {
      label: "繁體中文",
      value: "ZH-TW"
    },
    {
      label: "日本語",
      value: "JP"
    },
    {
      label: "한국어",
      value: "KR"
    },
    {
      label: "ภาษาไทย",
      value: "TH"
    }
  ];

  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: this.props.lang
    };
  }

  _onPressGoBack = () => {
    this.props.navigation.goBack();
  };

  _chooseLang = (value: string) => (event: any) => {
    this.setState({
      selectedLanguage: value
    });

    this.props.dispatch({
      type: "UPDATE_LANGUAGE",
      lang: value
    });
  };

  _keyExtractor = (item, index) => `${item.label}-${index}`;

  _renderLanguageItem = ({ item, index }) => {
    return (

      <Button full style={{ marginLeft: 10, backgroundColor: "#fff", borderRadius: 8, marginBottom: 5 }} onPress={this._chooseLang(item.value)}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ color: "#000" }}>{item.label}</Text>
        </View>
        {this.state.selectedLanguage === item.value ? (
          <View style={{ alignSelf: "flex-end", marginRight: 20 }}>
            <Icon name="check-circle" type="FontAwesome" style={{ color: "#f64f60" }} />
          </View>
        ) : (
            <View style={{ alignSelf: "flex-end", marginRight: 20 }}>
              <Icon name="circle" type="FontAwesome" style={{ color: "white" }} />
            </View>
          )}
      </Button>
    );
  };

  render() {

    const { lang } = this.props;

    return (
      <Container style={Styles.container}>
        <MHeader hasBack onPressHeaderLeft={this._onPressGoBack} />

        <Content>
          <View style={[Styles.cardContainer, Styles.center]}>
            <Icon name="language" type="FontAwesome" style={{ color: "#f64f60" }} />
            <View style={{ marginTop: 10 }}>
              <Text note>
                {lang === 'ZH-CN' ? '界面语言' : lang === 'EN' ? 'Interface Language' : lang === 'ZH-TW' ? '界面語言' : lang === 'JP' ? '言語' : lang === 'KR' ? '언어' : lang === 'TH' ? 'ภาษา' : '界面语言'}
              </Text>
            </View>
          </View>

          <FlatList
            extraData={this.state.selectedLanguage}
            data={this.i18nLanguages}
            renderItem={this._renderLanguageItem}
            keyExtractor={this._keyExtractor}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { auth, i18n } = state;
  return {
    email: (auth && auth.email) || "",
    username: (auth && auth.username) || "Guest",
    lang: i18n.lang
  };
};

export default connect(mapStateToProps)(language);
