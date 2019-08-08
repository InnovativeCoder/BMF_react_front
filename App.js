import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import {createStackNavigator} from 'react-navigation'
import Login from './src/screens/login'
import CaptureImage from './src/screens/captureImage'

const Navigation = createStackNavigator({
    Login: {
        screen: Login
    },
    CaptureImage: {
        screen: CaptureImage
    }
},
    {
        headerMode: 'none'
    });

class App extends Component {

    componentDidMount() {
        StatusBar.setHidden(true, 'fade');
        SplashScreen.hide();
    }

    render (){
        return (
            <Navigation/>
        )
    }
}

export default App