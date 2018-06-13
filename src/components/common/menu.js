import React,{Component} from 'react';
import {View,Text,Button,TouchableOpacity} from 'react-native'
import {setNavigation,goToPage} from '../../utilities';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const links = [
    {
        text:'Page 1',
        link:'SamplePage'
    },
    {
        text:'Page 2',
        link:'SamplePage2'
    }
]
export default class MenuPage extends Component <Props>{

    menuHeader = () => {
        return <View style={styles.menuHeader}>
                <Text>MENU</Text>
        </View>
    }
    menuBody = () => {
        return links.map((_,i) => {
            return <TouchableOpacity key={i} style={styles.linkWrap} onPress={()=>goToPage(_.link)}>
                    <Text style={styles.linkText}>{_.text}</Text>
                    <Icon name="chevron-right" size={30} color="#900" />
            </TouchableOpacity>
        })
    }

    render(){
        return<View style={styles.wrap}>
            {this.menuHeader()}
            {this.menuBody()}
        </View>
    }
}
const styles = {
    wrap:{
        flex:1
    },
    menuHeader:{
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        borderBottomWidth:1,
    },
    linkWrap:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    }
}