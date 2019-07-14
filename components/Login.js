import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'
import { StyleSheet, View, Image, TextInput, Text, KeyboardAvoidingView } from 'react-native';

 class Login extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {

            username: '',
            password: null,
            response: []

        }
    }


    login (username, password)
    {
        const authStr = 'Basic ' + btoa(`${username}:${password}`);

        axios

            .get(`https://api.github.com/user`, { headers: { Authorization: authStr } })

            .then(response =>

                {
                    let res = []
                    res.push(response.data)
                console.log(res);
                this.props.history.push({pathname:'/Profile',
                state:{
                    id:res[0]}
                })

                })

            .catch(error => alert(error));
    }
    handleChange = (event) =>
    {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    }

    handleSubmit=(event) =>{
        event.preventDefault();
        this.login(`${this.state.username}`, `${this.state.password}`);

    }

    render ()
    {

        return(
        <KeyboardAvoidingView behavior="padding" style={styles.container}>

        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/git.png')}></Image>
          <Text style={styles.title}>Sign in to GitHub</Text>
        </View>
        <View style={styles.formContainer}>

                <TextInput placeholder="username"
                    placeholderTextcolor="rgba(255,255,255,0.7)"
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCottect={false}
                    style={styles.input}
                     onChange={this.handleChange}/>
                <TextInput placeholder="password"
                    placeholderTextcolor="rgba(255,255,255,0.7)"
                    returnKeyType="go"
                    secureTextEntry
                    style={styles.input}
                    onChange={this.handleChange}/>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText} onPress={() =>
                      { this.handleSubmit}
                    }>
                        Login
                    </Text>
                </TouchableOpacity>
                </View>
                </KeyboardAvoidingView>

        )


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
})
export default Login
