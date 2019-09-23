import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    TextInput, TouchableOpacity,
} from "react-native";
import {Avatar} from "react-native-elements";
import {colors} from "../../utils";

export default class AvatarInput extends Component {

    render(){
        return (
            <View style={styles.mainContainer}>
                <View style={styles.inputZone}>
                    <TouchableOpacity style={{justifyContent:'center'}}>
                        <Avatar
                            containerStyle={styles.avatarStyle}
                            rounded
                            source={require('../../assets/images/ic8.png')}
                        />
                    </TouchableOpacity>
                    <TextInput underlineColorAndroid='transparent' style={styles.inputStyle}
                               placeholder='Write something here...' placeholderTextColor={colors.light_gray}
                    />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        flexDirection:'row',
        height: 68,
        borderRadius: 34,
        borderColor: colors.exlight_gray,
        borderWidth: 2
    },
    inputZone:{
        flexDirection:'row',
        flex:1,
        padding:20
    },
    avatarStyle:{
        width:36,
        height:36,
        alignSelf:'center',
        borderRadius: 18
    },
    inputStyle:{
        fontSize:17,
        fontWeight:"400",
        marginLeft:20, padding:3
    }
});

