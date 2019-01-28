/* @flow */

import React, { Component } from "react";
import { ListItem, Icon, Text } from "native-base";

import Styles from "./SettingsListItem.style";

type Props = {
  routeName: string,
  label: string,
  iconName: string,
  onPress: any
};
export default class SettingsListItem extends Component<Props> {
  shouldComponentUpdate(nextProps: any, nextState: any) {
    return this.props.label !== nextProps.label;
  }

  _onPressHandler = (event: any) => {
    this.props.onPress && this.props.onPress();
  };

  render() {
    return (
      <ListItem iconLeft onPress={this._onPressHandler}>
        <Icon name={this.props.iconName} type="FontAwesome" style={Styles.iconColor} />
        <Text style={Styles.text}>{this.props.label}</Text>
      </ListItem>
    );
  }
}
