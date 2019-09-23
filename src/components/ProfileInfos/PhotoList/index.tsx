import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import ProfilePhotoItem from "./ProfilePhotoItem";
import PhotosItems from "../../../utils/photoItems";

const ProfilePhotoList: React.StatelessComponent = () => {
    return (
        <ScrollView
            style={{marginTop: 12}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                {
                    PhotosItems.map(profileItem => (
                        <ProfilePhotoItem key={profileItem.id} title={profileItem.title} src={profileItem.src}/>
                    ))
                }
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({});
export default ProfilePhotoList;
