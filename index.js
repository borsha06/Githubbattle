/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import {name as appName} from './app.json';
import Profile from './components/Profile'
import Login from './components/Login'
import Battle from './components/Battle'

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />

            <Route path="/Login" component={Login} />
            <Route path="/Profile" component={Profile} />
            <Route path="/Battle" component={Battle} />
        </div>
    </Router>
)

AppRegistry.registerComponent(routing, () => App);
