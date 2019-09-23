import React, {Component} from 'react';
import {
    TouchableOpacity, View,
    StyleSheet
} from "react-native";
import {colors} from "../../utils";
import SvgUri from "react-native-svg-uri";

const RoundedImageCamera: React.StatelessComponent = () => {

    return (
        <TouchableOpacity onPress={() => alert('You are trying to open Camera')}>
            <View style={styles.container}>
                <View style={styles.child}>
                    <SvgUri style={styles.buttonImage} source={require('../../assets/svg/camera.svg')}/>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 72,
        flexDirection: 'column',
        width: 72,
        borderRadius: 36,
        borderColor: colors.light_gray,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems:'center',
    },
    child:{
        height: 62,
        justifyContent:'center',
        width: 62,
        flexDirection:'row',
        backgroundColor:colors.darkBlue,
        borderRadius: 31
    },
    buttonImage:{
        width:32,
        height:32,
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'column',
        alignSelf:'center'
    }
});

export default RoundedImageCamera;
