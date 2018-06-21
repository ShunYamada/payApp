import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

// Load screen
import CardInput from './CardInput';
import Purchase from './Purchase';

export default StackNavigator({
  CardInput: { screen: CardInput },
  Purchase: { screen: Purchase }
}, {
  mode: 'modal'
});
