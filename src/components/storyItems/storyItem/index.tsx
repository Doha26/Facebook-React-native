import React from 'react'
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Avatar} from 'react-native-elements';
import {colors} from "../../../utils";

const StoryItem: React.StatelessComponent = (props:any) => {

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Avatar rounded size="large"
                        containerStyle={styles.avatar}
                        source={props.image}
                />
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
        marginLeft:10,
        borderColor: colors.darkBlue,
        borderWidth: 2,

        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        height: 62,
        width: 62,
        backgroundColor:colors.white,
        borderRadius: 31
    }
});

export default StoryItem;
