import React, { Component } from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import Design from "../design/Design";

export default class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <View>
        <Text
          style={{
            backgroundColor: this.props.bg_color,
            alignSelf: this.props.align_self,
            paddingHorizontal: this.props.padding_horizontal,
            paddingVertical: this.props.padding_vertical,
            borderRadius: this.props.border_radius,
            overflow: "hidden",
            color: this.props.color,
            marginVertical: this.props.margin_vertical,
            marginTop: this.props.margin_top,
            fontSize: this.props.font_size,
            textAlign: this.props.text_alignment,
            marginLeft: this.props.margin_left,
            marginHorizontal: this.props.margin_horizontal,
            borderWidth: this.props.border_width,
            borderColor: this.props.border_color,
            marginRight: this.props.margin_right,
            borderTopLeftRadius: this.props.top_left,
            borderTopRightRadius: this.props.top_right,
            marginBottom:this.props.margin_bottom,
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
