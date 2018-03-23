import React,{Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	StatusBar,
	Platform,
	BackHandler,
	ToastAndroid
}from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class BaiChildComponent extends Component{
	static navigationOptions = {
        title: '二级百',
	  };

	render(){
		const { navigate } = this.props.navigation;
		return(
			<View style={styles.container}>
				<StatusBar
				hidden={true}
				translucent={true}
				/>
			<TouchableOpacity onPress={()=>{
				navigate('ziChild',{keys:{...this.props.navigation.state.params.keys,C_key:this.props.navigation.state.key}});
			}}>
			<Text style={styles.TextStyle}>二级百</Text>
			 </TouchableOpacity>
			 <View>
			 <Icon name="save" size={50} /> 
			 </View>
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