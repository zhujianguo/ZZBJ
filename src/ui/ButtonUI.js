import React,{Component, PureComponent} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
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
           onPress={() => {onPress}}
           >
       <View>
        <Text>{text}</Text>
       </View>
       </TouchableOpacity>) 
    }
}

ButtonUI.propTypes={
    text:propTypes.string.isRequired,
    onPress:propTypes.func.isRequired,
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
    });

export default withNavigation(ButtonUI);
