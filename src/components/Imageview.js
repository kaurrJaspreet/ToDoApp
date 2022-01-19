import React, { Component } from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import Design from "../design/Design";
import FastImage from "react-native-fast-image";

export default class CustomImage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <View>
        <FastImage
          style={{
            width: this.props.width,
            height: this.props.height,
            alignSelf: this.props.align_self,
            marginLeft: this.props.margin_left,
            marginTop: this.props.margin_top,
            borderRadius: this.props.radius,
            overflow: "hidden",
            marginVertical: this.props.margin_vertical,
            marginRight: this.props.margin_right,
            borderRadius:this.props.radius,
            borderWidth:this.props.border_width,
            borderColor:this.props.border_color,
            marginHorizontal:this.props.margin_horizontal,
            backgroundColor:this.props.bg_color,
          }}
          source={
            this.props.image_type == "local"
              ? this.props.url
              : {
                  // uri: "https://unsplash.it/400/400?image=1",
                  uri: this.props.url,
                  headers: { Authorization: "someAuthToken" },
                  priority: FastImage.priority.high
                }
          }
          tintColor={this.props.tint_color}
          resizeMode={
            this.props.resize_mode == "cover"
              ? FastImage.resizeMode.cover
              : this.props.resize_mode == "contain"
                ? FastImage.resizeMode.contain
                : FastImage.resizeMode.contain
          }
        />
      </View>
    );
  }
}
