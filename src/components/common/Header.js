import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {MenueActions} from '../../utilities'

    export const MainHeader = (props) => {
        return (
            <View style={styles.wrap}>
              <Button onPress={() => MenueActions('o')} title={'menu'} />
              <Text>{props.title}</Text> 
            </View>
        );
    }


const styles = {
    wrap: {
        backgroundColor: '#fff',
        padding: 10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    icon: {
        margin: 0, padding: 0,
        marginLeft: 15    
    },
    mainTitle: {
        backgroundColor: 'transparent',
        color: "#fff", alignSelf: 'center',
        fontWeight: '500',
        fontSize: 30,
        padding: 0,
        margin: 0
    },
    subTitle: {
        backgroundColor: 'transparent',
        color: "#fff", alignSelf: 'center',
        fontWeight: '300',
        fontSize: 26,
        padding: 0,
        margin: 0
    }
}

export default MainHeader;
