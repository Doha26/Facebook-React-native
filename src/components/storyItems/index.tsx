import React from 'react'
import {ScrollView, TouchableOpacity, View, StyleSheet} from "react-native";
import avatars from '../../utils/avatars'
import StoryItem from "./storyItem";
import {colors} from "../../utils";


const storyItems: React.StatelessComponent = () => {

    console.log(avatars);
    return (
        <ScrollView
            style={styles.contactContainerStyle}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <View style={{flex:1,flexDirection:'row'}}>
                {
                    avatars.map(avatar => (
                        <StoryItem key={avatar.id} image={avatar.src}/>
                    ))
                }
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({

    contactContainerStyle: {
        marginRight:5
    },
});
export default storyItems;
