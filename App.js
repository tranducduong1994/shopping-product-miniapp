/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Component} from 'ern-navigation';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';

export default class AppRouter extends Component {
  static displayName = 'Product Detail';
  static navigationOptions = {
    hide: true,
    title: '',
    buttons: [],
  };

  render() {
    const {id} = this.jsonProps;
    console.log('jsonProps', this.jsonProps);
    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
          <View>
            <Text>This micro app is detail of a product: ID: {id}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
