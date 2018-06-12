import React, {Component} from 'react';

// import MainHeader from '../components/common/headers/mainHeader';
/*
 APP PAGES
 */
import SamplePage from '../components/screens/sample';


// import {HEADER_COLOR} from '../constants/constants';

export const MYRoutes = {
    MainScreen: {
        screen: SamplePage,
        navigationOptions: ({navigation}) => ({
            header: null,
            gesturesEnabled: false
        })
    },
    // MainScreen: {
    //     screen: MainScreen,
    //     navigationOptions: ({navigation}) => ({
    //         header: <MainHeader/>,
    //         gesturesEnabled: false
    //     })
    // },
};