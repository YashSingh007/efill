/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
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

import Login from '../screens/Login';
import Useraccount from '../screens/Useraccount';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import AnimatedSplash from "react-native-animated-splash-screen";

const Intro =({navigation}) => {
      return (
        <View style={styles.container}>
           <StatusBar backgroundColor='#fff' barStyle="light-content"/>
            <View style={styles.header}>
              <Animatable.Image
                animation="bounceIn"
                duration={1500}
                style={styles.logo}
                source={require('../assets/logo.png')}/>
                 </View>
                  <Animatable.View
                    animation ="fadeInUpBig"
                    style={styles.footer}>
                   <Text style={styles.title}>Welcome to E-Fill</Text>
                     <View style={styles.button}>
                       <TouchableOpacity
                          onPress={()=>navigation.navigate('Home')}>
                         <LinearGradient
                              colors= {['#A4FF8B','#22BC9D']}
                              style={styles.signIn}
                              >
                               <Text style={styles.textSign}>Get Started</Text>
                         </LinearGradient>
                    </TouchableOpacity>
          </View>
        </Animatable.View>
        </View>
      )
  }

export default Intro;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 0.7,
      backgroundColor: '#05294B',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      borderRadius:60/2
  },
  title: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 40
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});
