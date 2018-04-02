import React,{Component, PureComponent} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
	Alert
} from 'react-native';
import propTypes from 'prop-types';
import { withNavigation } from 'react-navigation';


 class ButtonUI extends PureComponent{

    constructor(props){
        super(props);
    }
    render(){
        let {text,onPress}=this.props;
       return(
           <TouchableOpacity
		   style={styles.cell}
           onPress={()=>this.props.onPress()}
           >
       <View>
        <Text style={styles.txt}>{text}</Text>
       </View>
       </TouchableOpacity>) 
    }
	
	_alert(){
		alert(`${this.props.text}`)
       console.log('是我是我就是我')
       this.props.navigation.goBack();
    }
}

ButtonUI.propTypes={
    text:propTypes.string.isRequired,
    onPress:propTypes.func,
}

ButtonUI.defaultProps={      
    text:'我来了'
}

const styles = StyleSheet.create({
    
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
        },
		cell:{
        height:100,
        backgroundColor:'purple',
        alignItems:'center',
        justifyContent:'center',
        borderBottomColor:'#ececec',
        borderBottomWidth:1

    },
	txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    }
    });

export default withNavigation(ButtonUI);
