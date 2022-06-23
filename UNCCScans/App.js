import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import WelcomeScreen from './app/screens/WelcomeScreen';
import MainScreen from './app/screens/MainScreen';
import NewScanScreen from './app/screens/NewScanScreen';
import Security from './app/screens/Security';
import colors from './app/config/colors';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* ADD WELCOME SCREEN TO THE NAVIGATION STACK */}
        <Stack.Screen  
          options={{ 
            headerShown: false,
            animationEnabled: false,
          }} 
          name="Welcome" 
          component={WelcomeScreen}
        />

        {/* ADD MAIN SCREEN TO THE NAVIGATION STACK */}
        <Stack.Screen 
          options={{ 
            headerShown: false,
            animationEnabled: false, 
            cardStyle: {
              backgroundColor: colors.white,
            },
          }} 
          name="Main"
          component={MainScreen}
        />
		
          {/* ADD SECURITY INFO SCREEN TO THE NAVIGATION STACK */}
        <Stack.Screen 
          options={{ 
            headerShown: false,
            animationEnabled: false, 
            cardStyle: {
              backgroundColor: colors.white,
            },
          }} 
          name="Security"
          component={Security}
        />

        {/* ADD NEW SCAN SCREEN TO NAVIGATION STACK */}
        <Stack.Screen 
          options={{
            headerShown: false,
            cardStyle: {
              backgroundColor: colors.white,
            }
          }}
          name="NewScan"
          component={NewScanScreen}
        />
		
      </Stack.Navigator>
    </NavigationContainer>
  );
}



// STYLES
const styles = StyleSheet.create({
 
});
