import React,{Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	StatusBar
}from 'react-native';

export default class BaiComponent extends Component{
	render(){
		const { navigate } = this.props.navigation;
		return(
			<View style={styles.container}>
			<StatusBar
			hidden={true}
			translucent={true}
			/>
			<TouchableOpacity onPress={()=>{
				navigate('jiaChild',{keys:{ A_key:this.props.navigation.state.key}});
			}}>
			<Text style={styles.TextStyle}>百</Text>
			 </TouchableOpacity>
			</View>
		);
	}
}

const styles=StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	TextStyle:{
		width:50,
		height:30,
		backgroundColor:'#FF00FF'
	}
})