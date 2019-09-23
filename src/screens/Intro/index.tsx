import React from 'react';
import {NavigationScreenProp, SafeAreaView} from 'react-navigation';
import {View, StyleSheet, StatusBar} from 'react-native';
import {colors} from "../../utils";
import SvgUri from "react-native-svg-uri";
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillUpdate is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
]);

export interface NavigationProps {
    navigation: NavigationScreenProp<any, any>
}

interface IProps extends NavigationProps {
}

export default class Intro extends React.Component<IProps> {

    constructor(props: IProps) {
        super(props)
    }

    performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
            setTimeout(
                () => {
                    resolve('finish')
                },
                1000
            )
        )
    };

    async componentDidMount() {
        const data = await this.performTimeConsumingTask();
        if (data !== null) {
            this.props.navigation.navigate('Home');
        }
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: colors.white}}>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView></SafeAreaView>
                <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                    <SvgUri
                        width="100%"
                        height="100%"
                        source={require('../../assets/svg/logo.svg')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBlue
    }
});
