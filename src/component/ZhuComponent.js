import React,{Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	StatusBar
}from 'react-native';

export default class ZhuComponent extends Component{
	render(){
		return(
			<View style={styles.container}>
				<StatusBar
				hidden={true}
				translucent={true}
				/>
			<Text>诸</Text>
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