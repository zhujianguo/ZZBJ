import React,{Component} from 'react';
import {
	StyleSheet,
	View,
	Image,
	StatusBar,
	Text,
	TouchableOpacity
} from 'react-native';
import Util from '../utils/Util';
import GetSetStorge from'../utils/GetSetStorge';
import { NavigationActions } from 'react-navigation';

export default class GuidePageComponent extends Component{

	render(){
		return(
		<View style={styles.container}>
			<StatusBar
			hidden={true}
			translucent={true}
			/>
		<Image 
		style={styles.backgroundImage}
		source={require('../image/logo.jpg')}>
		
		</Image>
		<View style={styles.ViewForTextStyle}>
		<Text style={styles.textStyle}
		onPress={()=>{const resetAction = NavigationActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({ routeName: 'tab'})
                        ]
                    });
                    this.props.navigation.dispatch(resetAction);}}>跳过</Text>
		</View>
		</View>
		)
	}
}

const styles=StyleSheet.create({
	container:{
		flex:1,
	},
	backgroundImage: {
      width:Util.size.width,
      flex:1,
    },
	textStyle:{
	color: '#FFFFFF',
	},
	ViewForTextStyle:{
	position :'absolute',
	top:10,
	right:10,
    width:60,
	height:60,
	borderWidth:0,
    borderRadius:30,
    alignItems:'center',  
    justifyContent: 'center',  
    backgroundColor:'#0F7700',  
  }  
})