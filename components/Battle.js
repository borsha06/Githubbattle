import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

export class Battle extends Component
{
    render ()
    {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        Compare With Me
                    </Text>
                </TouchableOpacity>
                <TextInput placeholder="username"
                    placeholderTextcolor="rgba(255,255,255,0.7)"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCottect={false}
                    style={styles.input} />
                <TextInput placeholder="password"
                    placeholderTextcolor="rgba(255,255,255,0.7)"
                    returnKeyType="go"
                    style={styles.input} />
                <View style={styles.MainContainer}>
                    <Image
                        source={{ uri: 'http://aboutreact.com/wp-content/uploads/2018/07/logo.png', }}
                        //borderRadius style will help us make the Round Shape Image
                        style={{ width: 200, height: 200, borderRadius: 200 / 2 }}
                    />
                    <Image
                        source={{ uri: 'http://aboutreact.com/wp-content/uploads/2018/07/logo.png', }}
                        //borderRadius style will help us make the Round Shape Image
                        style={{ width: 200, height: 200, borderRadius: 200 / 2 }}
                    />
                    <Text>
                        Username
                    </Text>
                    <Text>
                        Number of repo
                    </Text>
                </View>


            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    MainContainer: {
        flex: 1,
        flexDirection: 'row', justifyContent: "space-between",
        backgroundColor: '#e0dcdc',
    },
    buttonText: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '700'
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15

    },
    input: {
        height: 20,
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 20
    },
})

export default Battle

