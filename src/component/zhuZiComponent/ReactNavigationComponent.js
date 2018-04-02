import React, { Component, PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    StatusBar
} from 'react-native';

export default class ReactNavigationComponent extends PureComponent {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title:`${navigation.state.params.name}`,
        headerStyle: { backgroundColor: '#483D8B' },
        headerTintColor: '#FFFFFF',
    });
    render() {
        const { navigate, pop, replace, popToTop } = this.props.navigation;
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={true}
                    translucent={true}
                />
                <TouchableOpacity onPress={() => {
                    pop(1)//回退1个栈
                }}>
                    <Text style={styles.TextStyle}>pop</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    replace('guide')//替换当前栈
                }}>
                    <Text style={styles.TextStyle}>replace</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    popToTop()//会到栈顶，清空堆栈中的其他栈
                }}>
                    <Text style={styles.TextStyle}>popToTop</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextStyle: {
        width: 100,
        height: 30,
        margin: 20,
        backgroundColor: '#FF00FF'
    }
})