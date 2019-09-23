import React from 'react'
import {StyleSheet, TouchableOpacity, View, ImageBackground, Text} from 'react-native'
import {Avatar} from 'react-native-elements';
import {colors} from "../../../../utils";

const ProfileFriendItem: React.StatelessComponent = (props: any) => {
    return (
        <TouchableOpacity style={{marginRight:10}}>
            <View>
                <Avatar
                    rounded
                    size={98}
                    source={props.image}>
                </Avatar>
                <Text style={styles.friendName}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    friendName: {
        alignSelf: 'center',
        marginTop: 10,
        fontSize:13
    }
});
export default ProfileFriendItem
