import React, { Component } from 'react';
import { TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import Design from "../design/Design";
import CSS from "../design/CSS";
import Textview from "../components/Textview";


class Card extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <TouchableOpacity

                style={CSS.card}>

                <Textview
                    text={this.props.data.title}
                    font_size={Design.font_14}
                    color={Design.black}
                    font_family={"bold"}
                />
                <Textview
                    text={this.props.data.note}
                    font_size={Design.font_12}
                    color={Design.black}
                    font_family={"regular"}
                    margin_top={8}
                />



            </TouchableOpacity>
        )
    }
};

// connect with redux,first param is map and second is component
export default Card;
