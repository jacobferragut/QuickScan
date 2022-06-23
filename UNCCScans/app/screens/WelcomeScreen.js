import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert } from 'react-native';

// IMPORT COLORS.js
import colors from '../config/colors';
import MainScreen from './MainScreen';


// Create welcome screen
function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* LOGO IMAGE */}
            <Image  style={styles.logo} source={require('../assets/UNCCLogo.png')}/>

            {/* LOGO TEXT */}
            <View style={styles.logoTextContainer}>
                <Text style={styles.logoText}>UNCC Scans</Text>
            </View>

            {/* LOGIN BUTTON */}
            <TouchableOpacity style={styles.logInButton} onPress={()=>{
                // RENDER MAIN SCREEN ON PRESS OF LOGIN
                Alert.alert(
                    "Closed Beta",
                    "UNCC Scans is in a closed beta stage and sign in is not supported. Navigating to main page.",
                    [
                        { text: "OK" }
                    ]    
                );
                navigation.replace('Main');
            }}>
                <Text style={styles.welcomeButtonText}>LOG IN</Text>
            </TouchableOpacity>

            {/* SIGN UP BUTTON */}
            <TouchableOpacity style={styles.signUpButton}onPress={()=>{
                // SIGN UP NOT SUPPORT CURRENTLY, SEND ALERT
                Alert.alert(
                    "Closed Beta",
                    "UNCC Scans is in a closed beta stage, sign up not supported",
                    [
                        { text: "OK"}
                    ]
                );
            }}>
                <Text style={styles.welcomeButtonText}>SIGN UP</Text>
            </TouchableOpacity>

            {/* VERSION NUMBER */}
            <Text style={{color: 'grey', textAlign: 'right', right: 15, bottom: 30}}>v2.1.0-beta</Text>
        </View>
    );
}

// Welcome screen styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'flex-end'
    },
    logo: {
        width: 150,
        resizeMode: 'contain',
        alignSelf: 'center',
        top: -250
    },
    logoTextContainer: {
        alignSelf: 'center',
        bottom: 380,
    },
    logoText: {
        fontFamily: 'Futura',
        fontSize: 40, 
        fontWeight: 'bold',
        color: colors.primary,
    },
    logInButton: {
        backgroundColor: colors.primary,
        width: '100%', 
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signUpButton: {
        backgroundColor: colors.alt,
        width: '100%',
        height: 60,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeButtonText: {
        color: colors.secondary,
        fontSize: 18,
        fontFamily: 'Futura',
    },
})

export default WelcomeScreen;