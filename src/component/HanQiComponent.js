import React,{Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	ListView,
	TouchableHighlight,
	Dimensions
}from 'react-native';
import {setSpText,scaleSize} from '../utils/ScreenUtil';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

export default class HanQiComponent extends Component{
	static navigationOptions= ({navigation,screenProps}) => ({
		title:'设置',
		headerStyle:{backgroundColor:'#483D8B',height:scaleSize(120)},
		headerTintColor:'#FFFFFF',
	});
	render(){
		return(
			<View style={styles.container}>
				<StatusBar
				hidden={true}
				translucent={true}
				/>
			<Text>汉起</Text>
			</View>
		);
	}

	
}

const styles=StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	}
})