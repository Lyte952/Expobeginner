import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { styles } from '../config/theme';
import ImageViewer from '../components/imageViewer';
import Button from '../components/Button';
import InputText from '../components/inputText';

const placeholderImage = require('../assets/cart.png');
const leftArrow = require('../assets/leftArrow.png');

const LoginText = () => {
    return (
        <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: 600, fontSize: 15 }}>Already have an account, </Text>
            <Text style={{ color: '#ff6a1e', fontWeight: 600, fontSize: 15 }}>
                Login
            </Text>
        </View>
    );
};

export default function SignUp() {
    return (
        <View style={styles.container}>
            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: "row", width: 322 }}>
                    <Pressable><Image source={leftArrow} /></Pressable>
                    <Text style={{ ...styles.text, marginBottom: 15 }}>Sign up</Text>
                </View>
                <Text style={styles.subtext}>Create your own account</Text>
            </View>
            <View style={styles.imageContainer}>
                <ImageViewer placeholderImageSource={placeholderImage} />
            </View>
            <View style={{ marginBottom: 30 }}>
                <View style={styles.inputContainer}>
                    <InputText label="Enter email" />
                </View>
                <View style={styles.inputContainer}>
                    <InputText label="Enter password" />
                </View>
            </View>
            <View style={styles.footerContainer}>
                <Button theme="main" label="Sign up" />
                <View style={{ marginBottom: 50, marginTop: 20 }}>
                    <Button theme="second" label={<LoginText />} />
                </View>
            </View>
        </View>
    );
}
