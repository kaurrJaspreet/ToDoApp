import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import CSS from "../design/CSS";
import Imageview from "../components/Imageview";
import Textview from "../components/Textview";
import Design from "../design/Design";
export default class Fab extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <TouchableOpacity onPress={() => this.props.navigation.navigate('AddNote')} style={styles.fab}>
            //   <FontAwesomeIcon icon={ faPlus } size={20}/>
            // </TouchableOpacity>

            <TouchableOpacity
                style={CSS.fab}
                onPress={() => this.props.navigation.navigate('AddNote')}
            >
                <Imageview
                    width={60}
                    height={60}
                    url={require("../images/add.png")}
                    resize_mode={"contain"}
                    image_type={"local"}
                />
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 30,
        backgroundColor: '#FFF',
        borderRadius: 30,
        elevation: 2,
        color: '#000'
    },
});