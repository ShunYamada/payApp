import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Screen from './common/Screen';

export default class Purchase extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: "Purchase"
  });

  render() {
    return (
      <Screen>
        <Text>Hello</Text>
      </Screen>
    );
  }
}
