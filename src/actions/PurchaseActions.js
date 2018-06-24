import firebase from 'firebase';
import { PURCHASE_CREATE, PURCHASE_UPDATE } from './types';
import _ from 'lodash';
import SECRET_STRIPE_API from '../config/env';

const stripeUrl = 'https://api.stripe.com/v1/';
const secretStripeKey = SECRET_STRIPE_API;

export const createCharge = (amount, currency, tokenId) => {
  const chargeDetails = {
    amount,
    currency,
    source: tokenId
  };

  const formBody = _.map(chargeDetails, (value, key) => {
    const encodedValue = encodeURIComponent(value)
    const encodedKey = encodeURIComponent(key)
    return `${encodedKey}=${encodedValue}`
  }).join('&')

  return fetch(`${stripeUrl}charges`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${secretStripeKey}`,
    },
    body: formBody,
  })
    .then(response => response.text())
    .then(responseText => {
      return JSON.parse(responseText);
    })
};

export const purchaseUpdate = ({ prop, value }) => {
  return {
    type: PURCHASE_UPDATE,
    payload: { prop, value }
  };
};

export const purchaseCreate = ({ price }) => {
  return (dispatch) => {
    console.log('#*********', this.props );
    createCharge(100, 'jpy', 'tok_1Cg3LsAIKMJM6hxyEIRbEAe2')
    .then(token => {
      console.log('#***7777777*', token);
      firebase.database().ref(`/pays/`)
        .push({
          tokenId: token.id
        })
        .then(() => {
        dispatch({ type: PURCHASE_CREATE });
        navigation.navigate('CardInput');
      });
    });
  }
}
