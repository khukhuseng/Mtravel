/* @flow */

import React, { Component } from "react";
import { FlatList } from "react-native";
import { View, ListItem } from "native-base";
import SettingsListItem from "../../listitem/SettingsListItem/SettingsListItem";

type Props = {
  menu: Array<any>,
  navigation: any
};
export default class SettingsCard extends Component<Props> {
  _onPressNavigateHandler = (routeName: string) => {
    if (routeName) {
      this.props.navigation.navigate(routeName);
    }
  };

  _renderSettingsItem = ({ item, index }: any) => {
    return <SettingsListItem iconName={item.icon} label={item.label} routeName={item.route} onPress={this._onPressNavigateHandler(item.route)} />;
  };

  _keyExtractor = (item: any, index: number) => `menu-${item.id}-${index}`;

  render() {
    return <FlatList data={this.props.menu} renderItem={this._renderSettingsItem} keyExtractor={this._keyExtractor} />;
  }
}
