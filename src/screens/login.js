import React, { Component } from 'react'
import { View, ScrollView, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import background from '../assets/images/login_background.png'

import { Constant } from '../constants'
export class Login extends Component {

    render() {
        return (
            <ImageBackground source={background} style={{ width: '100%', height: '100%' }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                    <View style={{ alignItems: 'center' }} >
                        <Text style={styles.heading} >Be My Friend</Text>
                        <View style={{ width: '70%', marginTop: '2%', paddingBottom: '10%' }} >
                            <TextInput placeholderTextColor={Constant.Colors.loginTextBorder} style={{ fontSize: 12, lineHeight: 15, fontFamily: Constant.Fonts.montserratRegular, backgroundColor: Constant.Colors.loginInputField, borderBottomColor: Constant.Colors.loginTextBorder, borderBottomWidth: 1, paddingLeft: 15 }} placeholder='Email Address' />
                            <TextInput placeholderTextColor={Constant.Colors.loginTextBorder} style={{ fontSize: 12, lineHeight: 15, fontFamily: Constant.Fonts.montserratRegular, backgroundColor: Constant.Colors.loginInputField, paddingLeft: 15 }} placeholder='Password' />
                            <Text style={{ color: Constant.Colors.loginTextBorder, fontSize: 10, lineHeight: 12, textAlign: 'right', fontFamily: Constant.Fonts.montserratRegular, marginVertical: 5 }} onPress={() => { alert('In Progress') }} >Forgot your password?</Text>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('CaptureImage') }} style={[styles.button, { backgroundColor: Constant.Colors.loginButton }]} >
                                <Text style={styles.buttonText} >Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('CaptureImage') }} style={[styles.button, { backgroundColor: Constant.Colors.loginWithFacebook }]} >
                                <Text style={styles.buttonText} >Login Via Facebook</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('CaptureImage') }} style={[styles.button, { backgroundColor: Constant.Colors.loginWithGoogle }]} >
                                <Text style={styles.buttonText} >Login with Google</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    heading: {
        fontFamily: Constant.Fonts.qwigleyRegular,
        fontSize: 72,
        lineHeight: 90,
        textAlign: 'center',
        width: '100%',
        color: Constant.Colors.loginHeadingColor,
        textShadowColor: Constant.Colors.loginHeadingTextShadow,
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 4,
        marginTop: '35%'
    },
    button: {
        paddingVertical: '5%',
        marginTop: '5%',
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 4,
        elevation: 2
    },
    buttonText: {
        fontFamily: Constant.Fonts.montserratRegular,
        color: Constant.Colors.loginInputField,
        textAlign: 'center',
        fontSize: 12,
        lineHeight: 15
    }
})

export default Login
