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
                                            <SvgUri source={require("../../assets/icons/play.svg")}/>
                                            <Text style={styles.playAllText}>PLAY ALL</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <View style={Object.assign({}, styles.marginContainer, styles.storiesContainer)}>
                                <CameraButton src={require("../../assets/icons/play.svg")}/>
                                <StoryItems/>
                            </View>
                            <View style={Object.assign({}, styles.marginContainer, {flex: 1, flexDirection: "row"})}>
                                <AvatarInput/>
                            </View>
                            <View style={Object.assign({}, styles.marginContainer, {
                                flex: 3,
                                flexDirection: "row",
                                justifyContent: "space-between"
                            })}>
                                <RoundedActionButton icon={require('../../assets/icons/picture.svg')} text="Upload"
                                                     bgColor={colors.filterBlue}/>
                                <RoundedActionButton icon={require('../../assets/icons/live.svg')} text="Go live"
                                                     bgColor={colors.red}/>
                                <RoundedActionButton icon={require('../../assets/icons/location.svg')} text="Check"
                                                     bgColor={colors.green}/>
                            </View>
                        </View>
                        <PostItem key="1" likeCount="12 Likes" commentCount="14 Comments" shareCount="33 Shares"
                                  author="Pavel Jismer" time="13h ago" avatar={require('../../assets/images/ic1.png')}
                                  image={require('../../assets/images/post1.png')}/>
                        <PostItem key="2" likeCount="55 Likes" commentCount="240 Comments" shareCount="300 Shares"
                                  author="Beth Curningan" time="1h ago" avatar={require('../../assets/images/ic3.png')}
                                  image={require('../../assets/images/post2.png')}/>
                        <PostItem key="3" likeCount="9 Likes" commentCount="1234 Comments" shareCount="22 Shares"
                                  author="Orphlan Blue" time="6 Min" avatar={require('../../assets/images/ic2.png')}
                                  image={require('../../assets/images/post3.png')}/>
                        <PostItem key="4" likeCount="59 Likes" commentCount="98 Comments" shareCount="40 Shares"
                                  author="Zed Orphis" time="24 Sec" avatar={require('../../assets/images/ic5.png')}
                                  image={require('../../assets/images/post4.png')}/>
                        <PostItem key="5" likeCount="345 Likes" commentCount="65 Comments" shareCount="1000 Shares"
                                  author="Tedd Credinger" time="1 Year ago"
                                  avatar={require('../../assets/images/ic4.png')}
                                  image={require('../../assets/images/post5.png')}/>
                        <PostItem key="6" likeCount="88 Likes" commentCount="86 Comments" shareCount="12 Shares"
                                  author="Orelsan Nixter" time="1 Week" avatar={require('../../assets/images/ic6.png')}
                                  image={require('../../assets/images/post6.png')}/>
                        <PostItem key="7" likeCount="54 Likes" commentCount="234 Comments" shareCount="98 Shares"
                                  author="Ginger Marie" time="2h ago" avatar={require('../../assets/images/ic7.png')}
                                  image={require('../../assets/images/post7.png')}/>
                        <PostItem key="8" likeCount="98 Likes" commentCount="654 Comments" shareCount="43 Shares"
                                  author="Moxtor Jixton" time="1h ago" avatar={require('../../assets/images/ic8.png')}
                                  image={require('../../assets/images/post8.png')}/>

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
