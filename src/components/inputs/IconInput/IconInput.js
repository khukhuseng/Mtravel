/* @flow */

import React, { PureComponent } from "react";
import { Item, Input } from "native-base";

type Props = {
  placeholder: string,
  onChangeText: any,
  inputRef: any
};
type State = {
  text: string
};
export default class IconInput extends PureComponent<Props, State> {
  _onChangeTextHandle = (text: string) => {
    this.props.onChangeText && this.props.onChangeText(text);
  };

  render() {
    return (
      <Item style={{ backgroundColor: "rgba(255,255,255,0.5)", paddingHorizontal: 10, marginBottom: 10, borderRadius: 8, borderColor: 'transparent' }}>
        <Input
          style={{ color: 'white', textAlign: 'center' }}
          returnKeyLabel="next"
          returnKeyType="next"
          placeholderTextColor='white'
          placeholder={this.props.placeholder}
          onChangeText={this._onChangeTextHandle}
          ref={this.props.inputRef}
          {...this.props}
        />
      </Item>
    );
  }
}
