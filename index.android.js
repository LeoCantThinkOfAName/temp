import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import App from './src/App';

export default class test extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <App />
      </View>
    );
  }
}

AppRegistry.registerComponent('test', () => test);
