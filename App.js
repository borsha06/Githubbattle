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
import
{
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import
{
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppNavigator from './AppNavigator';

const App = () =>
{
  return (
    <View style={styles.container}>
      <AppNavigator />
      {/* <Login /> */}
      {/* <Profile /> */}
      <Battle />

    </View>
  );
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
