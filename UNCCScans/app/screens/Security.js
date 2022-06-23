import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, Image, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../config/colors';

function MainScreen({ navigation }) {
    return (
        <View styles={styles.container}>

            {/* HEADER THAT READS "OUR SECURITY POLICY" */}
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>OUR SECURITY POLICY</Text>
            </View>

            {/* CREATE TEXT FOR SECURITY INFO */}
            <View style={styles.securityContainer}>
                <Text style={styles.securityText}>  We strongly believe that our users' security is top priority and desire to be transparent about the information and image 
                stored on our application. All of our users' credentials will be stored in a secure database utilizing the most up-to-date tools available to us such as password
                 hashing, SQL parameterization, XSS prevention, and no third-parties handling sensitive user information. We will never share or access any user information stored
                  in the application and will take extra steps to ensure that the only person accessing your data, is you. We want to provide a convenient and easy-to-use interface 
                  without the added anxiety of your data's safety when you need to use our scanner.  </Text>
            </View>

            {/* CREATE VIEW FOR RETURN BUTTON */}
            <View style={styles.buttonsContainer}>
                
                {/* RETURN TO MAIN */}
                <TouchableOpacity 
                    style={styles.returnButton}
                    onPress={()=> {
                        navigation.navigate('Main');
                    }}
                >
                    <Text style={styles.buttonText}>BACK TO MAIN MENU</Text>
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
        top: 675
    },
    returnButton: {
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
    securityText: {
        fontFamily: 'Futura',
        fontSize: 18,
        color: colors.primary,
        position: 'absolute',
        top: 160,
        borderWidth: 2,
        borderColor: colors.alt,
        width: '90%',
        paddingLeft: 10,
        paddingRight: 10
    },
    titleContainer: {
        alignItems: 'center',
    },
    titleText: {
        fontFamily: 'Futura',
        fontSize: 36, 
        fontWeight: 'bold',
        color: colors.primary,
        top: 70,
        textAlign: 'center',
        borderWidth: 2,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderColor: colors.alt
    },
    securityContainer: {
        alignItems: 'center'
        
        
    }
})

export default MainScreen;