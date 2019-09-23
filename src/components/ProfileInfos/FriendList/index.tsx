import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import ProfileFriendItem from "./ProfileFriendItem";

const FriendList : React.StatelessComponent = () => {

    return (
        <View style={{marginTop: 12 , flexDirection:'column'}}>
            <View style={{ flexDirection:'row' , justifyContent:'center'}}>
                <ProfileFriendItem name="Ika Devich" image={require('../../../assets/images/photo1.png')}/>
                <ProfileFriendItem name="Sam Smith" image={require('../../../assets/images/photo2.png')}/>
                <ProfileFriendItem name="Alvich Law" image={require('../../../assets/images/photo3.png')} />
            </View>
            <View style={{flexDirection:'row' ,marginTop:20,justifyContent:'center'}}>
                <ProfileFriendItem name="Pvl Jsm" image={require('../../../assets/images/photo4.png')}/>
                <ProfileFriendItem name="Tiogo Eric" image={require('../../../assets/images/photo5.png')}/>
                <ProfileFriendItem name="Messi Simons" image={require('../../../assets/images/photo6.png')}/>
            </View>
        </View>


    );
};
const styles = StyleSheet.create({});

export default FriendList;
