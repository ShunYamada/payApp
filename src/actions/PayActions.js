import firebase from 'firebase';
import { PAY_CREATE, PAY_UPDATE } from './types';
import _ from 'lodash';
import PUBLIC_STRIPE_API from '../config/env';

const stripeUrl = 'https://api.stripe.com/v1/';
const publicStripeKey = PUBLIC_STRIPE_API;

export const createCardToken = (cardNumber, expiryMonth, expiryYear, cvc) => {
  const cardDetails = {
    'card[number]': cardNumber,
    'card[exp_month]': expiryMonth,
    'card[exp_year]': expiryYear,
    'card[cvc]': cvc,
  }

  const formBody = _.map(cardDetails, (value, key) => {
    const encodedValue = encodeURIComponent(value)
    const encodedKey = encodeURIComponent(key)
    return `${encodedKey}=${encodedValue}`
  }).join('&')

  // /tokensに対して送信（AuthorizationのBearerにAPIの公開鍵を設定。公開鍵だから公開しても大丈夫だが、環境変数に入れておくのが無難）
  return fetch(`${stripeUrl}tokens`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${publicStripeKey}`,
    },
    body: formBody,
  })
    .then(response => response.text())
    .then(responseText => {
      return JSON.parse(responseText);
    })
}

export const payUpdate = ({ prop, value }) => {
  return {
    type: PAY_UPDATE,
    payload: { prop, value }
  };
};

export const payCreate = ({cardNumber, expiryMonth, expiryYear, cvc}) => {
  return (dispatch) => {
    createCardToken(cardNumber, expiryMonth, expiryYear, cvc)
    .then(token => {
      firebase.database().ref(`/cards/`)
        .push({
          tokenId: token.id
        })
        .then(() => {
        dispatch({ type: PAY_CREATE });
        navigation.navigate('CardInput');
      });
    });
  }
}
