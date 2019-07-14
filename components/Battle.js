import React, { Component } from 'react'
import { battle } from '../utils/api'
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

export default class Battle extends Component
{
    state = {

        username1: 'rofi93',
        username2: 'borsha06',
        value: '',

        winner: [],
        loser: [],
        error: null,
        loading: true

    }
    handleChange = (event) =>
    {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    }
    handleSubmit = (event) =>
    {
        event.preventDefault();
        battle([this.state.username1, this.state.username2])
            .then((players) =>
            {
                console.log(players)

                if (players === null)
                {
                    return this.setState(() => ({
                        error: 'Oops! Check that both users exist on Github.',
                        loading: false
                    }));
                }

                this.setState(() => ({
                    error: null,
                    winner: players[0],
                    loser: players[1],
                    loading: false
                }));
                console.log(this.state.winner)

            });



    }
    render ()
    {
       const { winner, loser } = this.state;
        var keys = 'login'
        var winners = (Object.entries(this.state.winner))
        var losers = Object.entries(this.state.loser)
        console.log(winners[1]);
        var winner_pro, winner_login, loser_pro, loser_login;
        for (var key in winners[0])
        {
            winner_pro = (winners[0][key]);
        }
        for (var key1 in winners[0])
        {
            winner_login = (winners[0][key1].login);
        }
        for (var keys in losers[0])
        {
            loser_pro = (losers[0][keys]);
        }
        for (var keys1 in losers[0])
        {
            loser_login = (losers[0][keys1].login);
        }

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        Compare With Me
                    </Text>
                </TouchableOpacity>
                <TextInput placeholder="user2"
                    placeholderTextcolor="rgba(255,255,255,0.7)"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCottect={false}
                    name="username1"
                    style={styles.input}
                    onChangeText={this.handleChange} />
                <TextInput placeholder="user2"
                    placeholderTextcolor="rgba(255,255,255,0.7)"
                    returnKeyType="go"
                    name="username2"
                    style={styles.input}
                    onChangeText={this.handleChange} />
                <Button
                    onPress={ this.handleSubmit }
                    title="Compare"
                    color="#841584"

                />
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
                 <View>


                    <Text>Winner</Text>
                    <Text>{winner_login}</Text>
                    <Text>{winners[1]}</Text>
                </View>
                <View>
                    <Text>Loser</Text>
                    <Text>{loser_login}</Text>
                    <Text>{losers[1]}</Text>


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


