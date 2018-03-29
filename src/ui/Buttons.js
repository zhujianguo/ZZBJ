import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import propTypes from 'prop-types';
//因为onPressHandler是函数，所以后面要添加括号
const Buttons=({text, onPressHandler})=>(
    <TouchableOpacity onPress={()=>onPressHandler()}>
    <Text>{text}</Text>
  </TouchableOpacity>
)

Buttons.propTypes={
    text:propTypes.string.isRequired,
    onPress:propTypes.func,
}

Buttons.defaultProps={      
    text:'我来了'
}

export default Buttons;