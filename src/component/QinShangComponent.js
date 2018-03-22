import React,{Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	StatusBar,
	ListView,
	TouchableHighlight,
	Dimensions
}from 'react-native';
import {setSpText,scaleSize} from '../utils/ScreenUtil';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get('window');

export default class QinShangComponent extends Component{

	constructor(props){
		super(props);
		const component=['react-native-smart-barcode(二维码扫描)','react-native-baidu-map(百度地图)','react-native-share(第三方分享和第三方登录)','react-native-http-cache(清理缓存)','react-native-fs(访问本地文件系统)','react-native-contacts(访问通讯录)','react-native-device-info(获取设备信息)','react-native-image-picker(照片选择)',
							'react-native-calendars(日历控件)','react-native-pull(上拉加载下拉刷新)','待更新。。。。。。'];
		this.ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
		this.state={
			dataSource:component,
		}
	}

	render(){
		return(
			<View style={styles.container}>
				<StatusBar
				hidden={true}
				translucent={true}
				/>
			<View style={{alignItems:'center', justifyContent: 'center',backgroundColor:'#483D8B',width:width,height:scaleSize(120) }}>
			<Text style={{fontSize:20,color:'#FFFFFF'}}>React-Native常用第三方</Text>
			</View >
			<ListView 
			dataSource={this.ds.cloneWithRows(this.state.dataSource)}
			renderRow={(rowData)=>
			<TouchableHighlight
			underlayColor={'#7B68EE'}
			style={styles.listViewStyle}
			onPress={()=>{}}>
			<View style={{flexDirection:'row', alignItems:'center', justifyContent: 'center' }}>
			<Text style={styles.textStyle}>{rowData}</Text>
			<Icon name="chevron-right" size={scaleSize(56)} color='#FFFFFF'/>
			</View>
			</TouchableHighlight>}/>
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
	listViewStyle:{
		alignItems:'flex-start',
		backgroundColor: '#6A5ACD',
		borderBottomColor: '#FFFFFF',
		justifyContent:'center',
		height:scaleSize(120),
		width:width,
		borderBottomWidth:1,
	},
	textStyle:{
		color:'#FFFFFF',
		marginLeft:10,
		fontSize:15,
		flex:1,
	}
})