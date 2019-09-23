import React from 'react'
import {StyleSheet, TouchableOpacity, View, ImageBackground, Text} from 'react-native'
import {colors} from "../../../../utils";

const ProfilePhotoItem: React.StatelessComponent = (props: any) => {
    return (
        <View style={{marginRight: 12}}>
            <TouchableOpacity style={styles.avatarEditcontainer}>
                <ImageBackground source={props.src} style={{width: '100%', height: '100%'}}>
                    <Text style={styles.insideText}>{props.title}</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({

    avatarEditcontainer: {
        height: 141, width: 126,
        overflow: "hidden",
        borderRadius: 8
    },
    insideText: {
        alignSelf: 'flex-start',
        position: 'absolute',
        marginLeft: 14,
        bottom: 10,
        color: colors.white
    }
});
export default ProfilePhotoItem
