import React, { Component } from 'react';
import { StyleSheet, View, Image, TextInput, Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm'

export default class Login extends Component
{
  render ()
  {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>

        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/git.png')}></Image>
          <Text style={styles.title}>Sign in to GitHub</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm />

        </View>
      </KeyboardAvoidingView>


    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    marginTop: 16,
    marginBottom: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.6

  },
  logoContainer: {
    alignItems: "center",
    // flexGrow: 1,
    justifyContent: 'center'

  },

  logo: {
    width: 50,
    height: 50,

  }
});

