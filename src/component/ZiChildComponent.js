import React,{Component} from 'react';
import {
	StyleSheet,
	Text,
    View,
    TouchableOpacity,
    StatusBar
}from 'react-native';

export default class ZiChildComponent extends Component{
    static navigationOptions = {
        title: '二级子',
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
				this.props.navigation.goBack(this.props.navigation.state.params.keys.B_key)
			}}>
			<Text style={styles.TextStyle}>二级子</Text>
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