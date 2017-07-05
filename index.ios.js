/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View  } from 'react-native'
import Home from './src/components/home/Home.js'

export default class reactTutorialApp extends Component {
  render() {
    return (
      <View >
        <Home />
      </View>
    );
  }
}

AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp);
