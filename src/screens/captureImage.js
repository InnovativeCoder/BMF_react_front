import React, { Component } from 'react'
import { View, Image, ScrollView, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import background from '../assets/images/capture_image_background.png'
import rectangle from '../assets/images/white_rectangle.png'
import cameraImage from '../assets/images/camera.png'
import { Constant } from '../constants'

export class CaptureImage extends Component {
    render() {
        return (
            <ImageBackground source={background} style={{ height: '100%', width: '100%' }} >
                <View style={styles.container} >
                    <Image source={rectangle} />
                    <View style={styles.paragraphContainer} >
                        <Text style={styles.paragraph} >Confirm us your</Text>
                        <Text style={styles.paragraph} >presence by</Text>
                        <Text style={styles.paragraph} >capturing</Text>
                        <Text style={styles.paragraph} >a pic with a smile</Text>
                        <TouchableOpacity style={styles.button} >
                            <Text style={styles.buttonText} >Capture</Text>
                        </TouchableOpacity>
                    </View>
                    <Image style={{ position: 'absolute', top: 150 }} source={cameraImage} />
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    paragraphContainer: {
        position: 'absolute',
        top: 270
    },
    paragraph: {
        fontFamily: Constant.Fonts.montserratRegular,
        fontSize: 12,
        textAlign: 'center',
        lineHeight: 15,
        color: Constant.Colors.loginTextBorder
    },
    button: {
        backgroundColor: Constant.Colors.captureButton,
        borderRadius: 5,
        paddingVertical: '12%',
        paddingHorizontal: '3%',
        marginTop: '15%'

    },
    buttonText: {
        fontFamily: Constant.Fonts.montserratRegular,
        color: Constant.Colors.loginTextBorder,
        textAlign: 'center',
        fontSize: 12,
        lineHeight: 15
    }
})

export default CaptureImage
