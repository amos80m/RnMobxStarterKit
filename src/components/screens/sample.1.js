import React,{Component} from 'react';
import {View,Text,Button} from 'react-native'
import {setNavigation,goToPage} from '../../utilities';

export default class SamplePage2 extends Component <Props>{

    constructor(props){
        super(props)
        setNavigation(props.navigation);
    }
    render(){
        return<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>Second page</Text>
        </View>
    }
}