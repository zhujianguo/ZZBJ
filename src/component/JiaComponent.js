import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	TouchableOpacity
} from 'react-native';

export default class JiaComponent extends Component {
	render() {

		const { pop,popToTop,replace} = this.props.navigation;
		return (
			<View style={styles.container}>
				<StatusBar
					hidden={true}
					translucent={true}
				/>
				<TouchableOpacity onPress={() => {
					//pop(2)//回退2个栈
					//popToTop()//回到栈顶，清空堆栈内其他栈
					replace('baiChild')//使用其他屏幕替换当前屏幕
				}

				}>
					<Text style={styles.TextStyle}>家</Text>
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
	}
})