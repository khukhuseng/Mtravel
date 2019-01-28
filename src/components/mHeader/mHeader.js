/* @flow */

import React, { PureComponent } from "react";
import { Image } from "react-native";
import { Header, Body, Left, Right, Icon, Button } from "native-base";

import Styles from "./mHeader.style";

type Props = {
  hasSidebar?: boolean,
  hasBack?: boolean,
  customLeft?: any,
  customRight?: any,
  customBody?: any,
  onPressHeaderLeft?: any
};
export default class MHeader extends PureComponent<Props> {
  HEADER_LOGO: any = require("../../assets/image/logo.png");

  _onPressHeaderLeft = (event: any) => {
    this.props.onPressHeaderLeft && this.props.onPressHeaderLeft(event);
  };

  render() {
    const headerLeft = this.props.customLeft || (
      <DefaultLeft hasBack={this.props.hasBack} hasSidebar={this.props.hasSidebar} onPressHandle={this._onPressHeaderLeft} />
    );
    const headerRight = this.props.customRight || <Right style={Styles.headerRight} />;
    const headerBody = this.props.customBody || <DefaultBody imgUrl={this.HEADER_LOGO} />;
    return (
      <Header style={Styles.header}>
        {headerLeft}
        {headerBody}
        {headerRight}
      </Header>
    );
  }
}

const DefaultBody = ({ imgUrl }) => (
  <Body style={Styles.headerBody}>
    <Image source={imgUrl} resizeMode="center" style={Styles.logo} />
  </Body>
);

const DefaultLeft = ({ hasBack, hasSidebar, onPressHandle }) => {
  const icon = (hasSidebar && <IconMenu />) || <IconBack />;
  return (
    (!hasSidebar && !hasBack && <Left style={Styles.headerLeft} />) || (
      <Left style={Styles.headerLeft}>
        <Button onPress={onPressHandle} transparent>
          {icon}
        </Button>
      </Left>
    )
  );
};

const IconMenu = props => <Icon name="menu" style={Styles.menuIcon} {...props} />;

const IconBack = props => <Image source={require("../../assets/image/homePage/back.png")} resizeMode="center" style={{ height: 30, width: 30 }} />;
