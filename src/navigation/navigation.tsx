import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from "../screens/Home";
import Intro from "../screens/Intro";
import Profile from "../screens/Profile";


const appStack = createStackNavigator({
    Splash: {
        screen: Intro,
        navigationOptions: () => ({
            header: null,
            headerBackTitle: null
        })
    },
    Home: {
        screen: Home,
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
        Intro: Intro,
        App: appStack,
        Profile: Profile,
    },
    {
        initialRouteName: 'Intro'
    }
));
