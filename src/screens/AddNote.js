import React, {Component, useMemo} from 'react';
import {View, LogBox, TextInput, TouchableOpacity} from 'react-native';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
import CSS from '../design/CSS';
import Design from '../design/Design';
import Button from '../components/Button';

import Header from '../components/Header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userdata from '../actions/taskAction';

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
      title: '',
    };
  }
  componentDidMount() {}

  componentWillUnmount() {}

  insertNote = () => {
    const {title, note} = this.state;
    if (title !== '' && note !== '') {
      let {actions} = this.props;
      actions.insertNotes({title, note});
      // this.props.dispatch(insertNotes({ title, note }))
      this.props.navigation.navigate('HomeScreen');
    }
  };

  render() {
    return (
      <View style={CSS.Maincontainer}>
        <Header
          navigation={this.props.navigation}
          show_first_icon={'back'}
          show_second_icon={'no'}
          show_third_icon={'no'}
          first_icon={require('../images/back.png')}
          second_icon={require('../images/setting.png')}
          title={'Add ToDo'}
        />

        <TextInput
          placeholder="ADD TITLE..."
          style={CSS.input_box}
          onChangeText={text => this.setState({title: text})}
        />
        <TextInput
          underlineColorAndroid="transparent"
          style={CSS.input_box}
          placeholder="ADD DESCRIPTION..."
          onChangeText={text => this.setState({note: text})}
          multiline={true}
        />
        <TouchableOpacity onPress={() => this.insertNote()}>
          <Button
            text={'Add ToDo'}
            bg_color={Design.yellow}
            align_self={'center'}
            padding_horizontal={60}
            padding_vertical={Platform.OS == 'ios' ? 16 : 12}
            border_radius={10}
            color={'white'}
            margin_top={30}
            font_family={'regular'}
            font_size={Design.font_15}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  data: state.data.data,
});

const ActionCreators = Object.assign({}, userdata);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNote);
