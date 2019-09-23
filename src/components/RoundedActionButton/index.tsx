import React, {Component} from 'react';
import {
    TouchableOpacity, View,
    StyleSheet,
    Text
} from "react-native";
import {colors} from "../../utils";
import SvgUri from "react-native-svg-uri";

const RoundedActionButton: React.StatelessComponent = (props: any) => {

    return (
        <TouchableOpacity
            onPress={props.clicked}
            style={{ flex:props.flex?1:null, marginLeft:props.marginLeft ? props.marginLeft:null, marginRight: props.marginRight ? props.marginRight:3}}>
            <View style={{
                height: props.height,
                flex: props.flex==true ? 1 : null,
                width: props.flex==true ? null : props.width,
                flexDirection: 'row',
                borderRadius: props.radius,
                backgroundColor: props.bgColor,
                borderColor:props.borderColor ? props.borderColor:null,
                borderWidth:props.borderWidth ? props.borderWidth:null,
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View style={styles.child}>
                    <SvgUri style={styles.buttonImage} source={props.icon}/>
                    <Text numberOfLines={1}
                          style={Object.assign({}, styles.buttonText, {color: props.color ? props.color:colors.white})}>{props.text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    child: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center',
        borderRadius: 31,
        justifyContent: 'center'
    },
    buttonText: {
        alignSelf: 'center',
        color: colors.white,
        fontSize: 15,
        fontWeight: "400"
    },
    buttonImage: {
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        alignSelf: 'center'
    }
});

export default RoundedActionButton;
