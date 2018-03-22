import React,{Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	ListView,
	TouchableHighlight,
	Dimensions
}from 'react-native';
import {setSpText,scaleSize} from '../utils/ScreenUtil';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get('window');
export default class ZhuZiComponent extends Component{

	constructor(props){
		super(props);
		const component=['ActivityIndicator','FlatList','Image','KeyboardAvoidingView','Modal','Picker','RefreshControl','ScrollView','SectionList','Slider','StatusBar','Switch','Text','TextInput',
							'Touchable','View','VirtualizedList','WebView ','状态监听'];
		this.ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
		this.state={
			dataSource:component,
		}
	}
	render(){
		const { navigate } = this.props.navigation;
		return(
			<View style={styles.container}>
				<StatusBar
				hidden={true}
				translucent={true}
				/>
			<View style={{alignItems:'center', justifyContent: 'center',backgroundColor:'#483D8B',width:width,height:scaleSize(120) }}>
			<Text style={{fontSize:20,color:'#FFFFFF'}}>React-Native常用组件</Text>
			</View >
			<ListView 
			dataSource={this.ds.cloneWithRows(this.state.dataSource)}
			renderRow={(rowData)=>
			<TouchableHighlight
			underlayColor={'#7B68EE'}
			style={styles.listViewStyle}
			onPress={()=>navigate('appState')}>
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