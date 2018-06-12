import React, {Component} from 'react';

import MainHeader from '../components/common/Header';
/*
 APP PAGES
 */
import SamplePage from '../components/screens/sample';
import SamplePage2 from '../components/screens/sample.1';


// import {HEADER_COLOR} from '../constants/constants';

export const MYRoutes = {
    SamplePage: {
        screen: SamplePage,
        navigationOptions: ({navigation}) => ({
            header: <MainHeader title={'my header 1'}/>,
            gesturesEnabled: false
        })
    },
    SamplePage2: {
        screen: SamplePage2,
        navigationOptions: ({navigation}) => ({
            header: <MainHeader title={'my header 2'}/>,
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