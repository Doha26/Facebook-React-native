import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from "../screens/Home";
import Intro from "../screens/Intro";
import Profile from "../screens/Profile";


const appStack = createStackNavigator({
    
    Home: {
        screen: Home,
        navigationOptions: () => ({
            header: null,
            headerBackTitle: null
        })
    },
    Splash: {
        screen: Intro,
        navigationOptions: () => ({
            header: null,
            headerBackTitle: null
        })
    },
    Profile: {
        screen: Profile,
        navigationOptions: () => ({
            header: null,
            headerBackTitle: null
        })
    },

},{
    initialRouteName:'Splash' 
});


// @ts-ignore
export default createAppContainer(createSwitchNavigator(
    {
        App: appStack,
        Intro: Intro,
        Profile: Profile,
    },
    {
        initialRouteName: 'App'
    }
));
