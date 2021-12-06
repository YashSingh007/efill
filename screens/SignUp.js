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
    Alert
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class SignUp extends Component {
    static navigationOptions = ({ navigation }) => ({
    });
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            emailid: '',
            contactnumber: '',
            password: ''

        }
    }
    submit() {
        let collection = {}
        collection.name = this.state.name,
            collection.emailid = this.state.emailid,

            collection.contactnumber = this.state.contactnumber,
            collection.password = this.state.password

        // const data = { name: '' ,emailid: '' ,contactnumber:'' ,password:''};



        fetch('http://65.0.24.136:3004/user-signup-api', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(collection),
        })
            .then(response => response.json())
            .then(collection => {
                console.log('Success:', collection);
                console.warn(collection)
                this.props.navigation.navigate("Otp");
                Alert.alert('registered')
            })
            .catch((error) => {
                //console.warn(error)
                console.error('Error:', error);
            });

    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#05294B' barStyle="light-content" />
                <View style={styles.header}>
                    <Text style={styles.text_header}>Singup</Text>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={styles.footer}>
                    <Text style={styles.text_footer}>Name</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Name"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={Name => this.setState({ Name })}
                        />
                        <Feather
                            name="check-circle"
                            color="black"
                            size={2}
                        />
                    </View>
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
                            onChangeText={Emailid => this.setState({ Emailid })}
                        />
                        <Feather
                            name="check-circle"
                            color="black"
                            size={2}
                        />
                    </View>
                    <Text style={styles.text_footer}>Contact_Number</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Contact"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={Contactnumber => this.setState({ Contactnumber })}
                        />
                        <Feather
                            name="check-circle"
                            color="black"
                            size={2}
                        />
                    </View>
                    <Text style={[styles.text_footer,
                    { marginTop: 5 }]}>Password</Text>
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
                            onChangeText={Password => this.setState({ Password })}
                        />
                        <Feather
                            name="check-circle"
                            color="black"
                            size={2}
                        />
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={() => this.submit()}>
                            <LinearGradient
                                colors={['#A4FF8B', '#22BC9D']}
                                style={styles.signIn}
                            >
                                <Text style={styles.signIn}>Sign Up</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        );
    }
}

export default SignUp;

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
        marginTop: 50
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
        fontSize: 18,
        fontWeight: 'bold'
    }
});
