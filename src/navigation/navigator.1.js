import React, { Component } from 'react';
import { StackNavigator, NavigationActions, createDrawerNavigator } from 'react-navigation';
import { Text, View, TouchableOpacity, Animated, Easing } from 'react-native';
import {MYRoutes} from './routes';
// import Menu from '../components/menu';
/************************************************************/


const StackNavigatorConfig = {
  transitionConfig : () => ({
  	transitionSpec: {
  		duration: 800,
      timing: Animated.timing,
      easing: Easing.out(Easing.poly(4)),
  	},
  })
}



const HomeStack = StackNavigator(MYRoutes,StackNavigatorConfig);
export const MainStack = createDrawerNavigator(
  {
    HomePage: {
      screen: HomeStack,
    },
  },
  {
    //contentComponent: ({ navigation }) => <Menu navigation={navigation} />,
    contentComponent: ({ navigation }) => <View style={{alignItems:'center',justifyContent:'center'}}><Text>Menue</Text></View>,
    // drawerWidth: SCREEN_WIDTH * 0.75,
    drawerWidth: 80,
    drawerPosition: 'left',
     drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }
);
