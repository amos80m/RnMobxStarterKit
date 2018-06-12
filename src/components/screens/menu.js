import React,{Component} from 'react';
import {View,Text,Button} from 'react-native'
import {setNavigation,goToPage} from '../../utilities';

export default class MenuPage extends Component <Props>{
    render(){
        return<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>Menu page</Text>
            <Button title={'page 1'} onPress={()=>goToPage('SamplePage')}/>
            <Button title={'page 2'} onPress={()=>goToPage('SamplePage2')}/>
        </View>
    }
}