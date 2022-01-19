import React, { Component } from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import Design from "../design/Design";

export default class CustomText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <View>
        <Text
          numberOfLines={this.props.lines}
          style={{
            fontSize: this.props.font_size,
            color: this.props.color,
            textAlign: this.props.text_align,
            marginTop: this.props.margin_top,
            marginHorizontal: this.props.margin_horizontal,
            marginLeft: this.props.margin_left,
            textDecorationLine: this.props.text_decoration_line,
            marginBottom: this.props.margin_bottom,
            alignSelf: this.props.align_self,
            marginRight: this.props.margin_right,
            paddingHorizontal: this.props.padding_horizontal,
            paddingVertical:this.props.padding_vertical,
            paddingBottom: this.props.padding_bottom,
            backgroundColor:this.props.bg_color,
            borderRadius:this.props.radius,
            borderWidth:this.props.border_width,
            borderColor:this.props.border_color,
            borderRadius:this.props.radius,
            borderStyle: this.props.border_style,
            overflow:'hidden',
            fontFamily:
              this.props.font_family == "regular"
                ? Platform.OS == "ios"
                  ? Design.ios_regular
                  : Design.android_regular
                : this.props.font_family == "medium"
                  ? Platform.OS == "ios"
                    ? Design.ios_medium
                    : Design.android_medium
                  : this.props.font_family == "semi_bold"
                    ? Platform.OS == "ios"
                      ? Design.ios_semibold
                      : Design.android_semibold
                    : this.props.font_family == "bold"
                      ? Platform.OS == "ios"
                        ? Design.ios_bold
                        : Design.android_bold
                      : null
          }}
        >
          {this.props.text}
        </Text>
      </View>
    );
  }
}
