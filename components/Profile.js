import React, { Component } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { View, StyleSheet, SectionList, Text } from 'react-native'

export default class Profile extends Component
{
    state = {
        isLoading: true,
        users: [],
        error: null
    }

    getUsers ()
    {
        const username = `${this.props.location.state.id.login}`;
        const id = '84578f19a9a926634249';
        const sec = '502dc7203598a42426d1e277384404091c24d88c';
        const params = `?client_id=${id}&client_secret=${sec}`;
        const latest = `${params}&order=asc&sort=updated`;

        axios

            .get(`http://api.github.com/users/${username}/repos${latest}`)

            .then(response =>
                response.data.map(user => ({
                    id: `${user.id}`,
                    full_name: `${user.full_name}`,
                    forks_count: `$${user.forks_count}`


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
    componentWillMount ()
    {
        this.getUsers();
    }

    render ()
    {
        const state = this.props.location.state
        console.log(state.id.login)
        const Button = withRouter(({ history }) => (
          <button
  onPress={() => {this.props.history.push({
                        pathname: '/Battle',
                    }
                    )}
                    }
  title="GithuB Battle"
  color="#841584"
/>
        ))



        const { isLoading, users, error } = this.state;

        return (

            <View style={styles.container}>
                <Button />
                {/* {this.props.location.state.id} */}
                <Text>Popular Repositories</Text>

                {error ? <Text>{error.message}</Text> : null}

                {!isLoading ? (
                    users.map((user, index) =>
                    {
                        const { full_name, forks_count
                        } = user;
                        return (
                            <View key={index}>
                                <Text> {full_name}</Text>
                                <Text> {forks_count}</Text>

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
