/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppState
} from 'react-native';
import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';

import ZhuZiComponent from './src/component/ZhuZiComponent';
import BaiJiaComponent from './src/component/BaiJiaComponent';
import QinShangComponent from './src/component/QinShangComponent';
import HanQiComponent from './src/component/HanQiComponent';
import GuidePageComponent from './src/component/GuidePageComponent';
import BaiChildComponent from './src/component/BaiChildComponent';
import JiaChildComponent from './src/component/JiaChildComponent';
import ZiChildComponent from './src/component/ZiChildComponent';
import splashView from './src/component/splashView';
import {setSpText,scaleSize} from './src/utils/ScreenUtil';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
	
	componentWillMount() {
      //监听状态改变事件
      AppState.addEventListener('change', this.handleAppStateChange);
      //监听内存报警事件
      AppState.addEventListener('change', function(){
        console.log("内存监听....");
      });
   }

   componentWillUnmount() {
      //删除状态改变事件监听
      AppState.removeEventListener('change', this.handleAppStateChange);
   }
   //状态改变响应
   handleAppStateChange(appState) {
      //alert('当前状态为:'+appState);
   }
   
  render() {
    return (
      <Apps/>
    );
  }
}

const Tab = TabNavigator(  
  {  
    zhuZi:{  
      screen:ZhuZiComponent,  
      navigationOptions:({navigation}) => ({ 
        header:null,
        tabBarLabel:'诸子',  
        tabBarIcon: ({ tintColor, focused }) => (  
          <Icon name="yin-yang" size={scaleSize(56)} color={focused?'#FFFFFF':'#000000'} />  
      )  
      }),  
    },  
  
    baiJia:{  
          screen:BaiJiaComponent,  
          navigationOptions:({navigation}) => ({  
          header:null,
          tabBarLabel:'百家',
          tabBarIcon: ({ tintColor, focused }) => (  
            <Icon name="account-circle" size={scaleSize(56)}  color={focused?'#FFFFFF':'#000000'}/>  
        )   
		
        }),  
      },

	qinShang:{  
          screen:QinShangComponent,  
          navigationOptions:({navigation}) => ({ 
          header:null, 
          tabBarLabel:'秦殇',  
          tabBarIcon: ({ tintColor, focused }) => (  
            <Icon name="google-earth" size={scaleSize(56)} color={focused?'#FFFFFF':'#000000'}/>  
        )  
        }),  
      },  

	hanQi:{  
          screen:HanQiComponent,  
          navigationOptions:({navigation}) => ({  
          tabBarLabel:'汉起',  
          tabBarIcon: ({ tintColor, focused }) => (  
            <Icon name="bank" size={scaleSize(56)} color={focused?'#FFFFFF':'#000000'} />  
        )  
        }),  
      },  	  
    },
    {  
      initialRouteName:'hanQi',
      tabBarComponent:TabBarBottom,  
      tabBarPosition:'bottom',  
      swipeEnabled:false,  
      animationEnabled:false,  
      lazy:true,  
      tabBarOptions:{  
        activeTintColor:'#FFFFFF',  
        inactiveTintColor:'#000000', 
        style:{backgroundColor:'#483D8B'},  
        labelStyle: {  
          fontSize:15, // 文字大小  
          },  
      }     
    },
  ); 
const Apps = StackNavigator({
  splashView:{
    screen:splashView,
    navigationOptions: {
      header:null
   },
  },
   guide:{
	  screen:GuidePageComponent,
	  navigationOptions: {
         header:null
      },
	},
  tab:{screen:Tab,
	
  },
  baiChild:{screen:BaiChildComponent},
  jiaChild:{screen:JiaChildComponent},
  ziChild:{screen:ZiChildComponent},
},{
  initialRouteName:'splashView',
});
