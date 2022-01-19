import React, {Component} from 'react';
import {View, LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
import CSS from '../design/CSS';

import Textview from '../components/Textview';
import Design from '../design/Design';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userdata from '../actions/taskAction';
class Splash extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.displayData();
  }

  displayData = async () => {
    try {
      setTimeout(() => {
        this.openNextScreen();
      }, 3000);
    } catch (error) {
      alert(error);
    }
  };
  openNextScreen = () => {
    this.props.navigation.replace('HomeScreen');
  };

  render() {
    return (
      <View style={CSS.Splashcontainer}>
        <Textview
          text={'ToDo Task'}
          font_size={Design.font_14}
          color={Design.black}
          font_family={'bold'}
          margin_horizontal={20}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
// export default Splash;
