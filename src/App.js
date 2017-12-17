/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Header } from './components';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './screens/LoginForm';
import logger from 'redux-logger';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyD_f26FZzAFpBkWpFmj-GtjZMFBLqLY5tY',
      authDomain: 'reactfoo.firebaseapp.com',
      databaseURL: 'https://reactfoo.firebaseio.com',
      projectId: 'reactfoo',
      storageBucket: 'reactfoo.appspot.com',
      messagingSenderId: '806214543079'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header headerText="Authentication" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
