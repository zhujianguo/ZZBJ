import React,{Component} from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Dimensions,
    Button
} from 'react-native';
import ButtonUI from '../../ui/ButtonUI';
import { Alert } from './C:/Users/OG03/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-native';


const {width,height}=Dimensions.get('window')
export default class FlatListComponent extends Component{

    static navigationOptions= ({navigation,screenProps}) => ({
		title:'FlatList',
		headerStyle:{backgroundColor:'#483D8B'},
		headerTintColor:'#FFFFFF',
	});
    // 构造
    constructor(props) {
        super(props);
    }
    refreshing(){
        let timer =  setTimeout(()=>{
                    clearTimeout(timer)
                    alert('刷新成功')
                },1500)
    }
    _onload(){
        let timer =  setTimeout(()=>{
            clearTimeout(timer)
            alert('加载成功')
        },1500)
    }

    componentDidMount(){
        
    }
    render() {
        var data = [];
        for (var i = 0; i < 100; i++) {
            data.push({key: i, title: i + ''});
        }

        return (
            <View style={{flex:1}}>
                <Button title='滚动到指定位置' onPress={()=>{
                    this._flatList.scrollToOffset({animated: true, offset: 2000});
                }}/>
                <View style={{flex:1}}>
                    <FlatList
                        ref={(flatList)=>this._flatList = flatList}
                        ListHeaderComponent={this._header}
                        ListFooterComponent={this._footer}
                        ItemSeparatorComponent={this._separator}
                        renderItem={this._renderItem}
                        onRefresh={this.refreshing}
                        refreshing={false}
                        onEndReachedThreshold={50}
                        onEndReached={
                            this._onload
                        }
                        getItemLayout={(data,index)=>(
                        {length: 100, offset: (100+20) * index, index}
                        )}

                        data={data}>
                    </FlatList>
                </View>

            </View>
        );
    }


    _renderItem = (item) => {
        var txt = '第' + item.index + '个' + ' title=' + item.item.title;
        var bgColor = item.index % 2 == 0 ? 'red' : 'blue';
        return (<ButtonUI
                   onPress={()=>{
                       this._alert();
                   }}
                    text={txt}/>)
    }

    _alert(){
       alert('我出来了') 
    }
    
    _header = () => {
        return <Text style={[styles.txt,{backgroundColor:'black'}]}>这是头部</Text>;
    }

    _footer = () => {
        return <Text style={[styles.txt,{backgroundColor:'black'}]}>这是尾部</Text>;
    }

    _separator = () => {
        return <View style={{height:2,backgroundColor:'#483D8B'}}/>;
    }


}
const styles=StyleSheet.create({
    container:{

    },
    content:{
        width:width,
        height:height,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'
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

})