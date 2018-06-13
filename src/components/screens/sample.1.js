import React,{Component} from 'react';
import {View,Text,Button} from 'react-native'
import {inject, observer} from 'mobx-react/native';
import {setNavigation,goToPage} from '../../utilities';
@inject('store') @observer
export default class SamplePage2 extends Component <Props>{

    constructor(props){
        super(props)
    }
    render(){
        return<View style={styles.wrap}>
            <Text>Second page</Text>
            <Text style={styles.storeDataStyle}>{this.props.store.sampleStore.inputData}</Text>
        </View>
    }
}

const styles = {
    wrap:{flex:1,alignItems:'center',justifyContent:'center'},
    storeDataStyle:{
        color:'#900',
        fontSize:20,
        paddingTop:20
    }
}