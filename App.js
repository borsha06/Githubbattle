/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import Login from './components/Login';
import Profile from './components/Profile'
import Battle from './components/Battle'
import AppNavigator from './AppNavigator';
import
{
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';



const App = () =>
{
  return

  <AppNavigator />
  {/* <Login /> */ }
  {/* <Profile /> */ }
  {/* <Battle /> */ }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

export default App;
