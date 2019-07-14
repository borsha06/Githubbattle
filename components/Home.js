import React, { Component } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { StyleSheet, View, Image, TextInput, Text, KeyboardAvoidingView } from 'react-native';

export default class Home extends Component
{
    state = {
        isLoading: true,
        users: [],
        error: null
    }
    signIntoGithub = () =>
    {
        this.props.history.push('/Login')


    }
    getUsers ()
    {
        const since = 'daily'

        axios

            .get(`https://github-trending-api.now.sh/?since=${since}`)

            .then(response =>
                response.data.map(user => ({
                    author: `${user.author}`,
                    name: `${user.name}`,
                    language: `${user.language}`,
                    stars: `${user.stars}`,
                    description: `${user.description}`
                }))
            )

            .then(users =>
            {
                this.setState({
                    users,
                    isLoading: false
                });
            })

            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount ()
    {
        this.getUsers();
    }

    render ()
    {
        const Button = withRouter(({ history }) => (  <Button
  onPress={() => { history.push('/Login') }}
  title=" Sign In"
  color="#841584"
/>

        ))

        const { isLoading, users, error } = this.state;

        return (




            <View>
                <Button />

                <Text>Trending Repositories</Text>

                {error ? <Text>{error.message}</Text> : null}

                {!isLoading ? (
                    users.map((user, index) =>
                    {
                        const { author, name, stars, description, language,
                        } = user;
                        return (
                            <View key={index}>
                                <Text>Author: {author}</Text>
                                <Text>Name: {name}</Text>
                                <Text>language: {language}</Text>
                                <Text>Number of stars: {stars}</Text>
                                <Text>Description: {description}</Text>
                                <hr />
                            </View>
                        );
                    })

                ) : (
                        <Text>Loading...</Text>
                    )}
            </View>
        );
    }
}

