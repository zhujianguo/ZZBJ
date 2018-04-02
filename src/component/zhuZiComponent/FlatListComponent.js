import React,{Component} from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Dimensions,
    Button,
	Alert
} from 'react-native';
import ButtonUI from '../../ui/ButtonUI';
import Buttons from '../../ui/Buttons';

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
         console.log('componentDidMount')
    }
    render() {
		console.log('render')
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
		console.log('_renderItem')
        var txt = '第' + item.index + '个' + ' title=' + item.item.title;
        var bgColor = item.index % 2 == 0 ? 'red' : 'blue';
        if(item.index<=20){return (
            <ButtonUI text={txt} onPress={()=>this._alert(txt)}/>)}else if(item.index==21){
                return(<View style={styles.cellcenter}><Text style={styles.txt}>我就是我，不一样的我</Text></View>)
            }else{
                return (
                    <Buttons text={txt} onPressHandler={()=>this._onPress}/>)
                //return(<View style={styles.cellbottom}><Text style={styles.txt}>{`另一个我${txt}`}</Text></View>)
            }
    }

    _alert(txt){
		alert(txt)   
      // console.log('是我是我就是我')
      // console.log(this)
       this.props.navigation.goBack();
    }
    _onPress=()=>{
       // console.log('不是我不是我')
        alert('我被点了')
      // console.log(this)
       this.props.navigation.goBack();//this直接使用必须在箭头函数中才可以
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
    cellcenter:{
        height:100,
        backgroundColor:'#FF00FF',
        alignItems:'center',
        justifyContent:'center',
        borderBottomColor:'#ececec',
        borderBottomWidth:1

    },
    cellbottom:{
        height:100,
        backgroundColor:'#0FF0F0',
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