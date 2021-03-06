import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	ListView,
	TouchableHighlight,
	Dimensions,
	BackHandler,
	ToastAndroid,
	Platform
} from 'react-native';
import { setSpText, scaleSize } from '../utils/ScreenUtil';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get('window');
export default class ZhuZiComponent extends Component {

	constructor(props) {
		super(props);
		const component = ['ActivityIndicator', 'FlatList', 'ReactNavigation', 'Image', 'KeyboardAvoidingView', 'Modal', 'Picker', 'RefreshControl', 'ScrollView', 'SectionList', 'Slider', 'StatusBar', 'Switch', 'Text', 'TextInput',
			'Touchable', 'View', 'VirtualizedList', 'WebView ', '状态监听'];
		this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.state = {
			dataSource: component,
		}
	}
	/*componentWillMount() {
		if (Platform.OS === 'android') {
			BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
		}
	  }
	
	  componentWillUnmount() {
		if (Platform.OS === 'android') {
			BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
		}
	  }
	
	
	  onBackAndroid = () => {
			if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
				//最近2秒内按过back键，可以退出应用。
				BackHandler.exitApp();
				return false;
			  }else{
				this.lastBackPressed = Date.now();
				ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
				return true;
			  }
	};*/


	render() {

		return (
			<View style={styles.container}>
				<StatusBar
					hidden={true}
					translucent={true}
				/>
				<View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#483D8B', width: width, height: scaleSize(120) }}>
					<Text style={{ fontSize: 20, color: '#FFFFFF' }}>React-Native常用组件</Text>
				</View >
				<ListView
					dataSource={this.ds.cloneWithRows(this.state.dataSource)}
					renderRow={(rowData) =>
						<TouchableHighlight
							underlayColor={'#7B68EE'}
							style={styles.listViewStyle}
							onPress={() => {
								this._select(rowData)
							}
							}>
							<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
								<Text style={styles.textStyle}>{rowData}</Text>
								<Icon name="chevron-right" size={scaleSize(56)} color='#FFFFFF' />
							</View>
						</TouchableHighlight>} />
			</View>
		);
	}

	_select(rowData) {
		const { navigate, push } = this.props.navigation;
		if (`${rowData}` == 'FlatList') {
			navigate('Flat')
		} else if (`${rowData}` == 'ReactNavigation') {
			push('reactNavigation', { name: 'reactNavigation' })//压入下一个栈,暂时不知道push和navigate的区别
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	listViewStyle: {
		alignItems: 'flex-start',
		backgroundColor: '#6A5ACD',
		borderBottomColor: '#FFFFFF',
		justifyContent: 'center',
		height: scaleSize(120),
		width: width,
		borderBottomWidth: 1,
	},
	textStyle: {
		color: '#FFFFFF',
		marginLeft: 10,
		fontSize: 15,
		flex: 1,
	}
})