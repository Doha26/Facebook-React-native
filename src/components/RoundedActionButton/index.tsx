import React, {Component} from 'react';
import {
    TouchableOpacity, View,
    StyleSheet,
    Text
} from "react-native";
import {colors} from "../../utils";
import SvgUri from "react-native-svg-uri";

const RoundedActionButton: React.StatelessComponent = (props:any) => {

    return (
        <TouchableOpacity style={{flex:1 , marginLeft:3, marginRight:3}}>
            <View style={{
                flex:1,
                height: 44,
                flexDirection: 'row',
                borderRadius: 22,
                backgroundColor: props.bgColor,
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View style={styles.child}>
                    <SvgUri style={styles.buttonImage} source={props.icon}/>
                    <Text numberOfLines={1} style={styles.buttonText}>{props.text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    child:{
       flex:1,
        flexDirection:'row',
        marginLeft:20,
        marginRight:20,
        alignItems: 'center',
        borderRadius: 31,
        justifyContent:'center'
    },
    buttonText:{
        alignSelf:'center',
        color:colors.white,
        fontSize:15,
        fontWeight:"400"
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

export default RoundedActionButton;
