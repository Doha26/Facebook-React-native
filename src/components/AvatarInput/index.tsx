import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    TextInput
} from "react-native";
import {Avatar, Input} from "react-native-elements";
import {colors} from "../../utils";

const AvatarInput: React.StatelessComponent = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.inputZone}>
                <Avatar
                    containerStyle={styles.avatarStyle}
                    rounded
                    source={require('../../assets/images/ic8.png')}
                />
                <TextInput underlineColorAndroid='transparent' style={styles.inputStyle}
                    placeholder='Write something here...' placeholderTextColor={colors.light_gray}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        flexDirection:'row',
        height: 72,
        borderRadius: 36,
        borderColor: colors.exlight_gray,
        borderWidth: 2
    },
    inputZone:{
        flexDirection:'row',
        flex:1,
        padding:20
    },
    avatarStyle:{
        width:37,
        height:37,
        alignSelf:'center'
    },
    inputStyle:{
        fontSize:17,
        fontWeight:"400",
        marginLeft:20, padding:3
    }
});

export default AvatarInput;
