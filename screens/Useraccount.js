import React,{Component} from 'react';
import type {Node} from 'react';
import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  Dimensions,
  useColorScheme,
  View,
  TextInput,
  Image,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Useraccount= ({navigation}) => {
return(
<View style = {styles.container} >
         <StatusBar backgroundColor='#05294B' barStyle="light-content"/>
          <View style={styles.button}>
                                 <TouchableOpacity
                                 alignItems='center'
                                    onPress={()=>navigation.navigate('Login')}>
                                   <LinearGradient
                                        colors= {['#A4FF8B','#22BC9D']}
                                        style={styles.signIn}
                                        >
                                         <Text style={styles.textSign}>Login</Text>
                                   </LinearGradient>
                              </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                                                     <TouchableOpacity
                                                     alignItems='center'
                                                        onPress={()=>navigation.navigate('SignUp')}>
                                                       <LinearGradient
                                                            colors= {['#A4FF8B','#22BC9D']}
                                                            style={styles.signIn}
                                                            >
                                                             <Text style={styles.textSign}>SignUp</Text>
                                                       </LinearGradient>
                                                  </TouchableOpacity>
                                        </View>
</View>
);
}

export default Useraccount;

const styles = StyleSheet.create({
    container:{
        flex :1,
        backgroundColor:'#05294B'
    },
    button: {
         alignItems: 'center',
         justifyContent:"center",
         marginTop: 40
     },
     signIn: {
         width: 180,
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