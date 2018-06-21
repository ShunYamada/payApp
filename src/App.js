import React, { Component } from 'react';
import firebase from 'firebase';
import Router from './components/Router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA9uQ-2jBhPJhJRiFJtjDqMrx5GCIgmXY0',
      authDomain: 'payment-96fa0.firebaseapp.com',
      projectId: 'payment-96fa0',
      databaseURL: 'https://payment-96fa0.firebaseio.com',
      storageBucket: 'payment-96fa0.appspot.com',
      messagingSenderId: '918830718875'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
