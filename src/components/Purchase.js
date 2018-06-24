import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { purchaseUpdate, purchaseCreate } from '../actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Screen from './common/Screen';
import Button from './common/Button';
import Input from './common/Input';
import CardSection from './common/CardSection';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 50
  },
  text: {
    fontSize: 18,
    lineHeight: 24
  }
});

class Purchase extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: "Purchase"
  });

  onButtonPress() {
    const { price } = this.props;
    console.log('######', this.props );
    this.props.purchaseCreate({ price });
  }

  render() {
    return (
      <Screen>
        <CardSection>
          <Input
            label={'Price'}
            placeholder={'100'}
            maxLength={3}
            keyBoardType={'number-pad'}
            value={this.props.price}
            onChangeText={value => this.props.purchaseUpdate({ prop: 'price', value })}
          />
        </CardSection>
        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}
          >
            Buy Now
          </Button>
        </CardSection>
      </Screen>
    );
  }
}

const mapStateToProps = (state) => {
  const { price } = state.purchaseForm;

  return { price };
};

export default connect(mapStateToProps,{
  purchaseUpdate, purchaseCreate
})(Purchase);
