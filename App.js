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
import {StackNavigator,TabNavigator,TabBarBottom,SwitchNavigator} from 'react-navigation';

import ZhuZiComponent from './src/component/ZhuZiComponent';
import BaiJiaComponent from './src/component/BaiJiaComponent';
import QinShangComponent from './src/component/QinShangComponent';
import HanQiComponent from './src/component/HanQiComponent';
import GuidePageComponent from './src/component/GuidePageComponent';
import BaiChildComponent from './src/component/BaiChildComponent';
import JiaChildComponent from './src/component/JiaChildComponent';
import JiaComponent from './src/component/JiaComponent';
import ZiChildComponent from './src/component/ZiChildComponent';
import {setSpText,scaleSize} from './src/utils/ScreenUtil';
import AuthLoadingScreen from './src/SwitchNavigator/AuthLoadingScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from 'react-native-smart-splash-screen';
import FlatListComponent from './src/component/zhuZiComponent/FlatListComponent';
import ReactNavigationComponent from './src/component/zhuZiComponent/ReactNavigationComponent';

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

   componentDidMount(){
     //SplashScreen.hide();
     SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 850,
      delay: 500,
   })
   } 
  
   
  render() {
    return (
      <SwitchNavigators/>
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
      initialRouteName:'zhuZi',
      tabBarComponent:TabBarBottom,  
      tabBarPosition:'bottom',  
      swipeEnabled:true,  
      animationEnabled:false,  
      lazy:false,  
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
  tab:{screen:Tab,
    navigationOptions: {
      header:null
   },},
  guide:{
	  screen:GuidePageComponent,
	  navigationOptions: {
         header:null
      },
	},
  baiChild:{screen:BaiChildComponent},
  jiaChild:{screen:JiaChildComponent},
  ziChild:{screen:ZiChildComponent},
  Flat:{screen:FlatListComponent},
  jia:{screen:JiaComponent},
  reactNavigation:{screen:ReactNavigationComponent}
  
});
const AppStack = StackNavigator({ Home: {screen:GuidePageComponent}, Other:{screen: QinShangComponent} });
const AuthStack = StackNavigator({ ZhuZi: {screen:ZhuZiComponent,navigationOptions:({navigation}) => ({ 
  header:null,
  tabBarLabel:'诸子',  
  tabBarIcon: ({ tintColor, focused }) => (  
    <Icon name="yin-yang" size={scaleSize(56)} color={focused?'#FFFFFF':'#000000'} />  
)  
}),  }});

const SwitchNavigators= SwitchNavigator(
 {
   AuthLoading: AuthLoadingScreen,
   App: Apps,
   Auth: AuthStack,
 },
 {
   initialRouteName: 'AuthLoading',
 }
);

