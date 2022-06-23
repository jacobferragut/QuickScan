import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, Image, Alert } from 'react-native';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import colors from '../config/colors';

function MainScreen({ navigation }) {
    return (
        <View styles={styles.container}>

            {/* HEADER THAT READS "UNCC Scans" */}
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>UNCC Scans</Text>
            </View>

            {/* CREATE VIEW FOR MOST RECENT SCAN */}
            <View style={styles.lastScanContainer}>
                {/* TODO: IMPLEMENT DATABASE AND DISPLAY MOST RECENT SCAN HERE.
                    CURRENTLY A PLACEHOLDER IMAGE. */}
                <Text style={styles.lastScanTitle}>Most Recent Scan</Text>
                <Image 
                    source={require("../assets/scansPlaceholder.jpg")}
                    style={styles.lastScanImage}
                />
            </View>
            
            {/* CREATE VIEW FOR MY SCANS AND NEW SCAN BUTTON */}
            <View style={styles.buttonsContainer}>
                {/* MY SCANS BUTTON */}
                <TouchableOpacity 
                    style={styles.myScansButton}

                    // ON PRESS FOR MY SCANS BUTTON
                    // TODO: ADD PREVIOUS SCANS NAVIGATION. CURRENTLY DISPLAYS ALERT
                    onPress={() => {
						
                        Alert.alert(
                            "My Scans",
                            "Previous scan functionality has not yet been implemented.",
                            [
                                { text: "OK" }
                            ]
                        );
                    }}
                >
                    <Text style={styles.buttonText}>MY SCANS</Text>
                </TouchableOpacity>

                {/* NEW SCAN BUTTON */}
                <TouchableOpacity 
                    style={styles.newScanButton}
                    onPress={()=> {
                        navigation.navigate('NewScan');
                    }}
                >
                    <Text style={styles.buttonText}>NEW SCAN</Text>
                </TouchableOpacity>

                

            </View>

            <View style={styles.lockButtonContainer}>
            <TouchableOpacity
                        
                            onPress={() => navigation.navigate('Security')}>
                                <Image style={styles.lockIcon} source={require('../assets/lockIcon.webp')} />
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonsContainer: {
        bottom: 170,
    },
    myScansButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.alt,
        alignItems: 'center',
        justifyContent: 'center',
    },
    newScanButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: colors.white,
        fontFamily: 'Futura',
        fontSize: 18
    },
    lastScanContainer: {
        alignItems: 'center',
        bottom: 40
    },
    lastScanTitle: {
        fontFamily: 'Futura',
        fontSize: 24,
        color: colors.primary,
        position: 'absolute',
        top: 200
    },
    lastScanImage: {
        width: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    logoContainer: {
        alignItems: 'center',
    },
    logoText: {
        fontFamily: 'Futura',
        fontSize: 40, 
        fontWeight: 'bold',
        color: colors.primary,
        top: 60
    },
    lockButtonContainer: {
        bottom: 370,
        left: 10, 
    },
    lockIcon: {  
        height: 45,
        width: 45,   
    }

})

export default MainScreen;