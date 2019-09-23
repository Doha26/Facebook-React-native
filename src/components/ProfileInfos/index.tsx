import React from 'react'
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import ProfilePhotoList from "./PhotoList";
import {colors} from "../../utils";
import FriendList from "./FriendList";
import RoundedActionButton from "../../components/RoundedActionButton";

const ProfileInfos: React.StatelessComponent = () => {
    return (
        <View>
            <View style={styles.profilePhotoContainer}>
                <Text numberOfLines={1} style={styles.profilePhotoTitle}>Photos</Text>
                <ProfilePhotoList/>
            </View>
            <TouchableOpacity style={styles.btnViewAll}>
                <Text style={styles.textViewAll}>VIEW ALL</Text>
            </TouchableOpacity>
            <View style={styles.profilePhotoContainer}>
                <Text numberOfLines={1} style={styles.profilePhotoTitle}>Friends · 504</Text>
                <FriendList/>
            </View>
            <TouchableOpacity style={styles.btnViewAll}>
                <Text style={styles.textViewAll}>VIEW ALL</Text>
            </TouchableOpacity>

            <View style={{flex: 1, flexDirection: 'row', padding: 20, justifyContent: 'space-between'}}>
                <RoundedActionButton height={48} radius={8} flex={false} width={140}
                                     icon={require('../../assets/svg/edit.svg')} text="EDIT PROFILE"
                                     bgColor={colors.darkBlue} color={colors.white}/>

                <RoundedActionButton height={48} radius={8} flex={false} width={140} borderColor={colors.darkBlue}
                                     borderWidth={2}
                                     icon={require('../../assets/svg/list.svg')} text="ACTIVITY LOG"
                                     bgColor={colors.extraLightBlue} color={colors.darkBlue}/>

                <RoundedActionButton style={{marginLeft: 10}} height={48} radius={8} flex={false} width={48}
                                     icon={require('../../assets/svg/more.svg')} text=""
                                     bgColor={colors.extraLightBlue} color={colors.darkBlue}/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    // Profile Photo
    profilePhotoContainer: {
        flexDirection: 'column',
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    profilePhotoTitle: {
        fontSize: 15,
        marginTop: 4,
        marginLeft: 4,
        fontWeight: 'bold',
        color: colors.dark_gray
    },

    // Btn view All
    btnViewAll: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        padding: 15,
        justifyContent: 'center',
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: colors.extraLightBlue,
        textAlign: 'center',
        color: colors.darkBlue
    },
    textViewAll: {
        color: colors.darkBlue
    }

});
export default ProfileInfos
