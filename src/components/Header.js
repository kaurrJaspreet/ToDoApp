import React, { Component } from "react";
import { View, LogBox, Text, TouchableOpacity, Alert } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();
import Imageview from "../components/Imageview";
import Textview from "../components/Textview";
import Design from "../design/Design";
import CSS from "../design/CSS";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userdata from "../actions/taskAction";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_data: props.data,
    };
  }

  componentDidMount = () => {
    const { navigation } = this.props;
  
  };
  componentWillUnmount() {
  }

  back_click_handle = () => {
    if (this.props.show_first_icon == "back") {
      this.props.navigation.goBack();
    }
  };



  render() {
    return (
      <View style={CSS.toolbar_box}>
       
        <View style={CSS.toolbar_left_side}>
          <TouchableOpacity onPress={() => this.back_click_handle()}>
            <Imageview
              width={25}
              height={25}
              url={this.props.first_icon}
              resize_mode={"contain"}
              image_type={"local"}
            />
          </TouchableOpacity>
         
          <Textview
            text={this.props.title}
            font_size={Design.font_15}
            color={Design.blue}
            font_family={"medium"}
            margin_left={10}
          />
        </View>

        <View style={CSS.toolbar_right_side}>
          {this.props.show_second_icon == "yes"
            ? <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center" }}
                >
                <Imageview
                  width={25}
                  height={25}
                  url={this.props.second_icon}
                  resize_mode={"contain"}
                  image_type={"local"}
                />
              </TouchableOpacity>
            : null}

       
        </View>

         </View>
    );
  }
}
const mapStateToProps = state => ({
  data: state.data.data,
});

const ActionCreators = Object.assign({}, userdata);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
