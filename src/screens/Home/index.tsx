import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    RefreshControl
} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import SvgUri from "react-native-svg-uri";
import {colors} from "../../utils";
import CameraButton from "../../components/CameraButton";
import StoryItems from "../../components/storyItems";
import AvatarInput from "../../components/AvatarInput";
import RoundedActionButton from "../../components/RoundedActionButton";
import PostItem from "../../components/PostItem";
import avatars from "../../utils/avatars";
import posts from "../../utils/posts";

export default class Home extends React.Component {


    state = {
        refreshing: false,
        setRefreshing: false
    };


    constructor(props: any) {
        super(props);
    }

    wait = (timeout: number) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    };

    onRefresh = () => {
        this.setState({setRefreshing: true});
        this.wait(2000).then(() => {
            this.setState({setRefreshing: false});
        });
    };

    handleClick = () => {
        this.props.navigation.navigate('Profile')
    };

    render() {
        return (

            <View style={styles.fragment}>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView></SafeAreaView>
                <ScrollView
                    refreshControl={
                        <RefreshControl refreshing={this.state.refreshing} onRefresh={() => this.onRefresh}/>
                    }
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View>
                        <View style={styles.paddingContainer}>
                            <View style={styles.HeaderStories}>
                                <View style={styles.flexAlignedStart}>
                                    <Text style={styles.storieTitle}>Stories</Text>
                                </View>
                                <View style={styles.flexAlignedEnd}>
                                    <TouchableOpacity
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-end'
                                        }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'flex-end'
                                        }}>
                                            <SvgUri source={require("../../assets/svg/play.svg")}/>
                                            <Text style={styles.playAllText}>PLAY ALL</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <View style={Object.assign({}, styles.marginContainer, styles.storiesContainer)}>
                                <CameraButton src={require("../../assets/svg/play.svg")}/>
                                <StoryItems onClicked={ ()=>this.handleClick()}/>
                            </View>
                            <View style={Object.assign({}, styles.marginContainer, {flex: 1, flexDirection: "row"})}>
                                <AvatarInput/>
                            </View>
                            <View style={Object.assign({}, styles.marginContainer, {
                                flex: 3,
                                flexDirection: "row",
                                justifyContent: "space-between"
                            })}>
                                <RoundedActionButton height={44} radius={22} flex={true}
                                                     icon={require('../../assets/svg/picture.svg')} text="Upload"
                                                     bgColor={colors.filterBlue}/>
                                <RoundedActionButton height={44} radius={22} flex={true}
                                                     icon={require('../../assets/svg/live.svg')} text="Go live"
                                                     bgColor={colors.red}/>
                                <RoundedActionButton height={44} radius={22} flex={true}
                                                     icon={require('../../assets/svg/location.svg')} text="Check"
                                                     bgColor={colors.green}/>
                            </View>
                        </View>
                        {
                            posts.map(post => (
                                <PostItem key={post.id} likeCount={ `${post.likeCount} Likes`}   commentCount={ `${post.commentCount} Comments`} shareCount={ `${post.shareCount} Shares`}
                                          author={post.author} time={post.time} avatar={post.avatar}
                                          image={post.image} text={post.text} isImage={post.isImage} isText={post.isText} isVideo={post.isVideo}/>
                            ))
                        }


                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    paddingContainer: {
        flexDirection: 'column',
        padding: 16
    },
    playAllText: {
        color: colors.filterBlue,
        marginLeft: 5,
        fontWeight: "400",
        marginTop: 3
    },
    flexAlignedStart: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    flexAlignedEnd: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },
    marginContainer: {
        marginTop: 16
    },
    HeaderStories: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },

    storiesContainer: {
        flexDirection: 'row'
    },


    fragment: {
        flex: 1,
        flexDirection: 'column'
    },
    storieTitle: {
        fontWeight: "bold",
        fontSize: 16
    },
    touchableMask: {
        position: "absolute",
        top: 5,
        left: 10,
        width: 30,
        height: 30,
        zIndex: 9,
        padding: 5
    },
    scrollView: {
        backgroundColor: Colors.white,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});
