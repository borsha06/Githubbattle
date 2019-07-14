import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './components/Login';
import Battle from './components/Battle'

const NavigationStack = createStackNavigator({
    Login: { screen: Login },
    Battle: { screen: Battle }
},
    {
        initialRouteName: "Login"
    });

const AppNavigator = createAppContainer(NavigationStack);

export default AppNavigator;
