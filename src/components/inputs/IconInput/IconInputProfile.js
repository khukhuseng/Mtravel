/* @flow */

import React, { PureComponent } from "react";
import { Item, Icon, Input } from "native-base";

type Props = {
    iconName: string,
    placeholder: string,
    onChangeText: any,
    inputRef: any
};
type State = {
    text: string
};
export default class IconInputProfile extends PureComponent<Props, State> {
    _onChangeTextHandle = (text: string) => {
        this.props.onChangeText && this.props.onChangeText(text);
    };

    render() {
        return (
            <Item style={{ backgroundColor: "#fff", paddingHorizontal: 10, marginBottom: 10, borderRadius: 8 }}>
                <Icon name={this.props.iconName} type="FontAwesome" />
                <Input
                    returnKeyLabel="next"
                    returnKeyType="next"
                    placeholder={this.props.placeholder}
                    onChangeText={this._onChangeTextHandle}
                    ref={this.props.inputRef}
                    {...this.props}
                />
            </Item>
        );
    }
}
