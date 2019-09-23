/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {View, TouchableOpacity, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {colors} from "../../utils";
import RoundedActionButton from '../RoundedActionButton';

const ProfileHeader :React.StatelessComponent =  (props:any) => {

    return (
        <View>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView></SafeAreaView>
            <View style={styles.editContainer}>
                <TouchableOpacity
                    style={styles.flexEnd}>
                    <RoundedActionButton clicked={props.onClicked} height={30} radius={8} flex={false} width={84}
                                         icon={require('../../assets/svg/camera_black.svg')} text="EDIT"
                                         bgColor={colors.white} color={colors.dark_gray}/>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    // Edit boutton
    editContainer: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        alignItems: "flex-end",
        alignSelf:'flex-end',
        top: 65,
        right:15,
        width:84
    },
    flexEnd:{
        flexDirection: 'row',
        alignSelf:'flex-end'
    }
});

export default ProfileHeader;
