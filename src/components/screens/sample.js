import React,{Component} from 'react';
import {View,Text,TextInput} from 'react-native'
import {inject, observer} from 'mobx-react/native';
import {setNavigation,goToPage} from '../../utilities';
@inject('store') @observer
export default class SamplePage extends Component <Props>{

    constructor(props){
        super(props)
        setNavigation(props.navigation);
    }
    updateStore = (text) => {
        this.props.store.sampleStore.updateStoreObservable(text)
    }
    render(){
        return<View style={styles.wrap}>
        <Text style={styles.topText}>First page</Text>
        <TextInput
        style={styles.input}
        onChangeText={(text) => this.updateStore(text)}
        value={this.props.store.sampleStore.inputData}
      />
        </View>
    }
}

const styles = {
    wrap:{
        flex:1,
        justifyContent:'center',
        padding:30
    },
    topText:{
        fontSize:20,
        color:'#900',
        textAlign:'center',
        paddingBottom:20
    },
    input:{height: 40, borderColor: 'gray', borderWidth: 1}
}