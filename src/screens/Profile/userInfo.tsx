import {Text, TouchableOpacity, View , StyleSheet ,Button } from "react-native";
import {Avatar, Icon} from "react-native-elements";
import {colors} from "../../utils";
import React from "react";
import Separator from "../../components/separator";
import ProfileInfos from "../../components/ProfileInfos";

const UserInfo: React.StatelessComponent = () =>{
    return (
        <View>
            <View style={styles.avatarContainer}>
                <View>
                    <Avatar
                        rounded
                        size={104}
                        containerStyle={{
                            borderColor: colors.white,
                            borderWidth: 2,
                            zIndex: 100,
                            position: 'relative'
                        }}
                        source={require('../../assets/images/ic10.png')}>
                    </Avatar>
                    <TouchableOpacity
                        style={{flex: 1, position: 'absolute', bottom: 0, alignItems:'center',alignSelf: 'flex-end', zIndex: 200}}>
                        <View style={styles.avatarEditcontainer}>
                            <Icon style={{justifyContent:'center'}} name='camera'
                                  size={15}
                                  type='font-awesome'
                                  color='#fff'/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.profileNameContainer}>
                    <Text numberOfLines={1} style={styles.profileAuthor}>Anmol Arora</Text>
                    <Text numberOfLines={1} style={styles.profileWork}>Web & UI/UX Designer</Text>
                    <Text numberOfLines={1} style={styles.profileWork}>Works at ILLUMINZ</Text>
                </View>
            </View>
            <View style={styles.profileStatContainer}>
                <View style={styles.profileStatItemContainer}>
                    <Text numberOfLines={1} style={styles.profileStatTitle}>Joined in</Text>
                    <Text numberOfLines={1} style={styles.profileStatCounter}>2011</Text>

                </View>
                <View style={styles.profileStatItemContainer}>
                    <Text numberOfLines={1} style={styles.profileStatTitle}>Post</Text>
                    <Text numberOfLines={1} style={styles.profileStatCounter}>211</Text>
                </View>
                <View style={styles.profileStatItemContainer}>
                    <Text numberOfLines={1} style={styles.profileStatTitle}>Friends</Text>
                    <Text numberOfLines={1} style={styles.profileStatCounter}>204</Text>
                </View>
                <View style={styles.profileStatItemContainer}>
                    <Text numberOfLines={1} style={styles.profileStatTitle}>Photos</Text>
                    <Text numberOfLines={1} style={styles.profileStatCounter}>504</Text>
                </View>
                <View style={styles.profileStatItemContainer}>
                    <Text numberOfLines={1} style={styles.profileStatTitle}>Check-ins</Text>
                    <Text numberOfLines={1} style={styles.profileStatCounter}>21</Text>
                </View>
            </View>
            <View style={{backgroundColor:colors.white}}>
                <View style={styles.profileIntroContainer}>
                    <Text numberOfLines={1} style={styles.profileIntroTitle}>Intro</Text>
                    <Text numberOfLines={1} style={styles.profileIntroDesc}>Eat · Design · Travel · Explore · Repeat</Text>
                    <Text numberOfLines={1} style={styles.profileIntroDesc}>I do believe it's time for another adventure.</Text>
                </View>
                <Separator/>
                <ProfileInfos/>
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    // Avatar image profile
    avatarContainer: {
        flexDirection: 'row',
        paddingLeft:20,
        paddingBottom:20,
        //marginTop: 150,
    },
    avatarEditcontainer: {
        height: 34,
        width: 34,
        borderRadius: 17,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: colors.darkBlue,
        right:0.5,
    },

    // Profile info
    profileNameContainer: {
        flexDirection: 'column',
        flex: 6,
        paddingLeft: 10,
        alignSelf:'center',
        justifyContent: 'center'
    },
    profileAuthor: {
        fontSize: 20,
        marginLeft: 5,
        fontWeight:'bold',
        color: colors.white
    },

    profileWork: {
        fontSize: 15,
        marginTop: 4,
        marginLeft: 5,
        color: colors.white
    },

    // User stats
    profileStatContainer: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        alignSelf:'center',
        justifyContent: 'center'
    },
    profileStatItemContainer: {
        flexDirection: 'column',
        flex: 6,
        paddingLeft: 10,
        alignItems:'center',
        justifyContent: 'center'
    },

    profileStatTitle: {
        fontSize: 13,
        marginTop: 4,
        marginLeft: 4,
        fontWeight:'bold',
        color: colors.white
    },
    profileStatCounter: {
        fontSize: 20,
        marginLeft: 4,
        fontWeight:'bold',
        color: colors.white
    },

    // Profile Intro
    profileIntroContainer: {
        flexDirection: 'column',
        padding: 20,
        alignItems:'flex-start',
        justifyContent: 'center'
    },
    profileIntroTitle: {
        fontSize: 13,
        marginTop: 4,
        marginLeft: 4,
        fontWeight:'bold',
        color: colors.dark_gray
    },
    profileIntroDesc: {
        fontSize: 16,
        marginTop: 4,
        marginLeft: 4,
        fontWeight:'200'
    },

    // Profile Photo
    profilePhotoContainer: {
        flexDirection: 'column',
        padding: 20,
        alignItems:'flex-start',
        justifyContent: 'flex-start'
    },
    profilePhotoTitle: {
        fontSize: 15,
        marginTop: 4,
        marginLeft: 4,
        fontWeight:'bold',
        color: colors.dark_gray
    },

    // Btn view All
    btnViewAll:{
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        padding:15,
        justifyContent:'center',
        borderRadius:8,
        alignItems:'center',
        backgroundColor:colors.extraLightBlue,
        textAlign:'center',
        color:colors.darkBlue
    },
    textViewAll:{
        color:colors.darkBlue
    }


});
export default UserInfo;
