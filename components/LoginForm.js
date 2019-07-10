import React, { Component } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";

export default class LoginForm extends Component
{
    render ()
    {
        return (
            <View>
                <TextInput placeholder="username"
                    placeholderTextcolor="rgba(255,255,255,0.7)"
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCottect={false}
                    style={styles.input} />
                <TextInput placeholder="password"
                    placeholderTextcolor="rgba(255,255,255,0.7)"
                    returnKeyType="go"
                    secureTextEntry
                    style={styles.input} />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText} onPress={() =>
                        this.props.navigation.navigate('Battle')
                    }>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    input: {
        height: 20,
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 20
    },
    buttonText: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '700'
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15

    }
})
