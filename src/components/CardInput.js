import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { payUpdate, payCreate } from '../actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Screen from './common/Screen';
import Input from './common/Input';
import CardSection from './common/CardSection';
import Button from './common/Button';

class CardInput extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: "CardInput"
  });

  onButtonPress() {
    const { cardNumber, expiryMonth, expiryYear, cvc, navigation } = this.props;

    this.props.payCreate({ cardNumber, expiryMonth, expiryYear, cvc, navigation });
  }

  render() {
    return (
      <Screen>
        <CardSection>
          <Input
            label={'Card Number'}
            placeholder={'4242424242424242'}
            maxLength={16}
            keyBoardType={'number-pad'}
            value={this.props.cardNumber}
            onChangeText={value => this.props.payUpdate({ prop: 'cardNumber', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label={'Expiry Month'}
            placeholder={'01'}
            maxLength={2}
            keyBoardType={'number-pad'}
            value={this.props.expiryMonth}
            onChangeText={value => this.props.payUpdate({ prop: 'expiryMonth', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label={'Expiry Year'}
            placeholder={'22'}
            maxLength={2}
            keyBoardType={'number-pad'}
            value={this.props.expiryYear}
            onChangeText={value => this.props.payUpdate({ prop: 'expiryYear', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label={'CVC'}
            placeholder={'333'}
            maxLength={3}
            keyBoardType={'number-pad'}
            value={this.props.cvc}
            onChangeText={value => this.props.payUpdate({ prop: 'cvc', value })}
          />
        </CardSection>
        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}
          >Register</Button>
        </CardSection>
        <CardSection>
          <Button
            onPress={()=>this.props.navigation.navigate('Purchase')}
          >
            Purchase
          </Button>
        </CardSection>
      </Screen>
    );
  }
}

const mapStateToProps = (state) => {
  const { cardNumber, expiryMonth, expiryYear, cvc } = state.payForm;

  return { cardNumber, expiryMonth, expiryYear, cvc };
};

export default connect(mapStateToProps, {
  payUpdate, payCreate
})(CardInput);
