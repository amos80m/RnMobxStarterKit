import React, { Component } from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {inject, observer} from 'mobx-react/native';
import {MainStack} from './navigation/navigator';

type Props = {};
@inject('store') @observer
export default class Root extends Component<Props> {
  // constructor(props) {
  //   super(props)
  // }
  
  getCurrentRouteName = (navigationState) => {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return this.getCurrentRouteName(route);
    }
    return route.routeName;
}
  render() {
    return (
      <View style={styles.container}>
        <MainStack onNavigationStateChange={(prevState, currentState) => {
        const currentScreen = this.getCurrentRouteName(currentState)
        const prevScreen = this.getCurrentRouteName(prevState)
        //tore.NavStore.updateMYNavigation(currentScreen, prevScreen)//Will set current page to detrmen if will go back one page
    }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
