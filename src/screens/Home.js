import React, { Component, useMemo } from "react";
import {
    View,
    LogBox,

} from "react-native";
LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();
import CSS from "../design/CSS";
import Imageview from "../components/Imageview";
import Textview from "../components/Textview";
import Design from "../design/Design";
import Card from "../components/Card";
import Fab from "../components/Fab";
import MasonryList from '@react-native-seoul/masonry-list';
import Header from "../components/Header";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userdata from "../actions/taskAction";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: props.data,
        };
    }
    componentDidMount() {

    }

    componentWillUnmount() {

    }





    add_Note = () => {
        this.props.navigation.navigate("AddNote");
    };


    render() {
        console.log("list = " + this.props.data)
        return (
            <View style={CSS.Maincontainer}>
                <Header
                    navigation={this.props.navigation}
                    show_first_icon={"no"}
                    show_second_icon={"yes"}
                    show_third_icon={"yes"}
                    second_icon={require("../images/setting.png")}

                    title={"Notes"}
                />
                <MasonryList
                    data={this.props.data}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <Card data={item} />}
                />
                <Fab navigation={this.props.navigation} />

            </View>
        );
    }
}
const mapStateToProps = state => ({
    data: state.data.data
});

const ActionCreators = Object.assign({}, userdata);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);