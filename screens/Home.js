import React, { Component } from 'react';
import type { Node } from 'react';
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
    Keyboard,
    ToastAndroid,
    Alert,
    print
} from 'react-native';

import SignUp from '../screens/SignUp';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class Login extends Component {
    static navigationOptions = ({ navigation }) => ({

    });

    constructor(props) {
            super(props)
            this.state = {

                emailid: '',
                password:'',
               errormail: '',
               errorpasword:'',
            }
        }
         handleEmail = value => {
            this.setState({
              emailid: value,
            });
          };

          handlePwd = value => {
            this.setState({
              password: value,
            });
          };

          validate = () => {
            this.setState({
              errormail: '',
              errorpasword:'',
            });

            const expression =
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            if (!expression.test(this.state.emailid)==false) {
              this.setState({
                errormail: 'Invalid Email',
              });
              return false;
              }
           else if (this.state.emailid.length==0) {
                         this.setState({
                           errormail: ' Email is empty',
                         });
                         return false;
            } else if (this.state.password.length === 0) {
              this.setState({
                errorpasword: 'Password cannot be empty',
              });

              return false;
            } else if (this.state.password.length <=5) {
              this.setState({
                errorpasword: 'Password is too short',
              });
            }

            return true;
          };

    login = () => {

    if(this.validate()){

       const data = {emailid: '' ,password:''};

        fetch('http://65.0.24.136:3004/user-login-api', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                this.props.navigation.navigate("SignUp");
                console.warn(data)
                ToastAndroid.showWithGravity(
                    "Success",
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                );
            })
            .catch((error) => {
                //console.warn(error)
                console.error('Error:', error);
            });

}
        Keyboard.dismiss();
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#05294B' barStyle="light-content" />
                <View style={styles.header}>
                    <Text style={styles.text_header}>Home</Text>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={styles.footer}>
                    <Text style={styles.text_footer}>Email</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Email"
                            style={styles.textInput}
                            autoCapitalize="none"
                            keyboardType={'email-address'}
                            onChangeText={this.handleEmail}
                        />
                        <Feather
                            name="check-circle"
                            color="black"
                            size={2}
                        />

                    </View>
                    <Animatable.View animation="fadeInLeft" duration={500}>
                    {this.state.errormail.length === 0 ? null : (
                                <Text style={styles.errorMsg}>{this.state.errormail}</Text>
                              )}
                              </Animatable.View>
                    <Text style={[styles.text_footer,
                    { marginTop: 35 }]}>Password</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Password"
                            secureTextEntry={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={this.handlePwd}
                        />
                        <Feather
                            name="check-circle"
                            color="black"
                            size={2}
                        />
                    </View>
                     {this.state.errorpasword.length === 0 ? null : (
                     <Text style={styles.errorMsg}>{this.state.errorpasword}</Text>
                                                  )}
                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={() => this.login()}>
                            <LinearGradient
                                colors={['#A4FF8B', '#22BC9D']}
                                style={styles.signIn}
                            >
                                <Text style={styles.textSign}>Sign In</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#05294B'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});
