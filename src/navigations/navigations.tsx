import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from "../screens/Home";
import Intro from "../screens/Intro";


const appStack = createStackNavigator({
    // @ts-ignore
    Home: {
        screen: Home,
        navigationOptions: () => ({
            header: null,
            headerBackTitle: null
        })
    },
    splash: {
        screen: Intro,
        navigationOptions: () => ({
            header: null,
            headerBackTitle: null
        })
    },

},{
    initialRouteName:'Home' // To remove qfter design completed
});


// @ts-ignore
export default createAppContainer(createSwitchNavigator(
    {
        App: appStack,
        Intro: Intro,
    },
    {
        initialRouteName: 'App'
    }
));
