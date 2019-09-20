import React, {Component} from 'react';
import {
    TouchableOpacity, View,
    StyleSheet,
    Text,
    Image
} from "react-native";
import {colors} from "../../utils";
import SvgUri from "react-native-svg-uri";
import {Avatar} from "react-native-elements";

const PostItem: React.StatelessComponent = (props: any) => {

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.container}>
                <View style={styles.cardHeader}>
                    <View style={{flex:1 , justifyContent:'center'}}>
                        <Avatar
                            containerStyle={{alignSelf: 'center'}}
                            rounded
                            size={"medium"}
                            source={props.avatar}
                        />
                    </View>
                    <View style={styles.statContainer}>
                        <Text style={styles.postAuthor}>{props.author}</Text>
                        <Text style={styles.postTime}>{props.time}</Text>
                    </View>
                    <View style={{ alignSelf:'flex-end' , flex:1}}>
                        <SvgUri source={require('../../assets/icons/more.svg')} style={styles.buttonMore}/>
                    </View>
                </View>
                <Image source={props.image}/>
                <View style={styles.cardStatsCounter}>
                    <View style={Object.assign({},styles.flexStartAligned,{flex:7})}>
                        <Text style={styles.likeCounter}>{props.likeCount}</Text>
                        <Text style={styles.commentCounter}>{props.commentCount}</Text>
                    </View>
                    <View style={{ alignSelf:'flex-end' , flex:2}}>
                        <Text style={styles.commentCounter}>{props.shareCount}</Text>
                    </View>
                </View>

                <View style={styles.cardActionContainer}>
                    <View style={styles.flexStartAligned}>
                        <SvgUri source={require('../../assets/icons/thumb-up.svg')}/>
                        <Text style={Object.assign({},styles.commentCounter,styles.blueText)}>LIKE</Text>
                    </View>
                    <View style={styles.flexStartAligned}>
                        <SvgUri source={require('../../assets/icons/comment.svg')}/>
                        <Text style={Object.assign({},styles.commentCounter,styles.blueText)}>COMMENTS</Text>
                    </View>
                    <View style={styles.flexEndAligned}>
                        <SvgUri source={require('../../assets/icons/share.svg')}/>
                        <Text style={Object.assign({},styles.commentCounter,styles.blueText)}>SHARE</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderBottomColor: colors.exlight_gray,
        backgroundColor: colors.white,
        borderTopColor: colors.exlight_gray,
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
    flexStartAligned:{
        flex:1 ,
        justifyContent:'flex-start',
        flexDirection:'row',
        alignItems:'center'
    },
    flexEndAligned:{
        flexDirection:'row',
        flex:3,
        alignItems:'center',
        justifyContent:'flex-end'
    },
    cardHeader: {
        flexDirection: 'row',
        padding: 20,
        height: 70
    },
    statContainer:{
        flexDirection: 'column' ,
        flex:6,
        paddingLeft: 10,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    cardStatsCounter: {
        flexDirection: 'row',
        padding: 15,
        height: 45
    },
    cardActionContainer: {
        flexDirection: 'row',
        padding: 15,
        height: 60,
        backgroundColor: colors.extraLightBlue
    },
    postAuthor: {
        fontSize: 15,
        marginLeft:5
    },
    postTime: {
        fontSize: 13,
        marginTop: 4,
        marginLeft:5,
        color: colors.dark_gray
    },
    blueText:{
        color:colors.filterBlue
    },
    buttonMore: {
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        flexGrow: 1
    },
    likeCounter:{
        fontSize: 14,
        marginLeft:5,
        color: colors.dark_gray
    },
    commentCounter:{
        fontSize: 14,
        marginLeft:5,
        color: colors.dark_gray
    }
});

export default PostItem;
