/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Flumux from 'flumux'
import 

var flumux = new Flumux()
flumux.plug(`someplugin`)


class flumuxExample extends Component {
  render() {
    return (
      
    );
  }
}

AppRegistry.registerComponent('flumuxExample', () => flumuxExample);
