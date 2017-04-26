/**
 * Created by Rabbit on 2017/4/19.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';

import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';


export default class Gank extends Component {
    constructor(props){
        super(props);
        this.state = {
            typeArr : [
                {'title':'全部', 'type':'1',},
                {'title':'视频', 'type':'41',},
                {'title':'图片', 'type':'10',},
                {'title':'段子', 'type':'29',},
                {'title':'声音 ', 'type':'31',},
            ],
        }
    }

    _onChangeTab = (i) =>{
        // console.log(i);
    }

    _onScroll = (e) =>{
        // console.log(e);
    }
    render() {

        return (
            <ScrollableTabView
                renderTabBar={() => <ScrollableTabBar />}
                tabBarActiveTextColor='#4ECBFC'
                tabBarInactiveTextColor='black'
                tabBarBackgroundColor='white'
                tabBarUnderlineStyle={{backgroundColor:'#4ECBFC'}}
                onScroll={(e) => this._onScroll(e)}
                onChangeTab={(i) => this._onChangeTab(i)}
                tabBarTextStyle={{fontSize:FONT_SIZE(15)}}
                tabStyle={{height:20}}
            >
                {
                    this.state.typeArr.map((item, i) => {
                       if (i===0){
                           console.log('true');
                           // 198.37499999999997
                           // 220.79999999999998
                           // 166.75
                           return (
                               <View key={i}
                                     tabLabel={item.title}
                                     style={{backgroundColor:'red',flex:1}}
                               >
                                   <Text>{text}</Text>
                               </View>
                           );
                       }
                        {/*let text = Math.round(Math.random()*100);*/}

                        let imageWidth  = SCREEN_WIDTH / 2 - 15;
                        let imageHeight = imageWidth * 1.15;
                        console.log(imageHeight);
                        let text = parseInt(Math.random()*100 + imageHeight);
                            return (
                                <View key={i}
                                      tabLabel={item.title}
                                      style={{backgroundColor:'white',flex:1}}
                                >
                                    <Text>{text}</Text>
                                </View>
                            )

                    })
                }
            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});