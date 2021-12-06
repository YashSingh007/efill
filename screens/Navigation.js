import * as React from 'react';

import {
   TouchableOpacity,
     StatusBar,
     StyleSheet,
     Text,
     Dimensions,
     useColorScheme,
     View,
     Image,
   } from 'react-native';

import Intro from '../screens/Intro';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Otp from '../screens/Otp';
import Home from '../screens/Home';
import Useraccount from '../screens/Useraccount';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (

    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Useraccount" component={Useraccount} />
        <Stack.Screen name="Otp" component={Otp} />
      </Stack.Navigator>

  );
}

export default Navigation;
