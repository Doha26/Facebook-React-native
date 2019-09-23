import React from 'react'
import {Text, SafeAreaView, View, StyleSheet} from "react-native";
import ParallaxScroll from '../../components/ParallaxScrollView';
import ProfileHeader from "../../components/ProfileHeader";
import ParallaxBackground from '../../components/ParallaxBackground';
import {colors} from "../../utils";
import UserInfo from './userInfo';

// Correct top size 200
export default class Profile extends React.Component {

    goBack = () => {
        this.props.navigation.goBack();
    };

    render() {
        return (
            <ParallaxScroll
                renderHeader={({animatedValue}) =>
                    <ProfileHeader onClicked={()=>this.goBack()}
                        animatedValue={animatedValue}/>}
                isHeaderFixed={false}
                parallaxHeight={390}
                renderParallaxBackground={({animatedValue}) => <ParallaxBackground
                    source={require('../../assets/images/post9.png')} animatedValue={animatedValue}/>}
                parallaxBackgroundScrollSpeed={5}
                parallaxForegroundScrollSpeed={2.5}
            >
                <View style={styles.userInfoContainer}>
                    <UserInfo />
                </View>
            </ParallaxScroll>
        );
    }
}
const styles = StyleSheet.create({
    userInfoContainer: {
        zIndex: 1000,
        left: 0,
        right: 0,
        marginTop: -200
    }
});
