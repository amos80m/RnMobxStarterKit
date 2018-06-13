import React, { Component } from 'react';
import { createStackNavigator, NavigationActions, createDrawerNavigator } from 'react-navigation';
import { Text, View, TouchableOpacity, Animated, Easing } from 'react-native';
import {MYRoutes} from './routes';
import MenuPage from '../components/common/menu';
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



const HomeStack = createStackNavigator(MYRoutes,StackNavigatorConfig);
export const MainStack = createDrawerNavigator(
  {
    HomePage: {
      screen: HomeStack,
    },
  },
  {
    //contentComponent: ({ navigation }) => <Menu navigation={navigation} />,
    contentComponent: ({ navigation }) => <MenuPage navigation={navigation}/>,
    // drawerWidth: SCREEN_WIDTH * 0.75,
    drawerWidth: 280,
    drawerPosition: 'left',
     drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }
);
