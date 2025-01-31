import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import * as yup from 'yup'
// import { Formik } from 'formik'

import { Image, ImageBackground } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Foundation'
import { Value } from 'react-native-reanimated'
import Home from './Home'

const image = {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7t3TPoPgmhbrIGkY5iLCfENgExc44sWJUg&usqp=CAU",
  };

const Login = ({ navigation }) => {

    
    const [isSelected, setIsSelected] = useState(false)
    const validate = yup.object({
        email: yup.string().required().min(8),
        password: yup.string().required().min(8),
    })


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <SafeAreaView >


                <View style={style.container}>
                <ImageBackground 
                 source={image}
                 resizeMode="cover"
                 style={style.image}
                 
                 >
                    <View style={style.crownContainer}>


                        <Icon name="crown" style={style.crown} size={80} color="#c2c4c3" />

                        <Text style={style.heading}>

                            Login

                        </Text >

                    </View>







                    <View style={style.backBox}>

                        {/* put form here NB */}


                        <ScrollView style={style.inputContainer}>
                            <View>
                                <View style={style.inputView}>
                                    <Icon style={style.icon} name="mail" color="#aeb0af" size={20} />

                                    <TextInput
                                    
                                        style={style.TextInput}

                                        placeholder="Email"
                                        placeholderTextColor="#000000"
                                        onChangeText={(email) => setEmail(email)}
                                    />
                                </View>

                                <View style={style.inputView}>
                                    <Icon style={style.icon} name="lock" color="#aeb0af" size={20} />
                                    <TextInput
                                        style={style.TextInput}
                                        placeholder="Password"
                                        placeholderTextColor="#000000"
                                        secureTextEntry={true}
                                        onChangeText={(password) => setPassword(password)}
                                    />
                                </View>



                            </View>
                       

                        <View style={style.logAndFogot}>

                            <TouchableOpacity style={style.forgot} onPress={() => navigation.navigate('ForgetPassword', { name: 'ForgetPassword' })}>
                                <Text style={style.forgot_button}>Forgot Password?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('home', { name: 'home' })} style={style.login}>
                                <Text style={{color:'#000',fontWeight:'bold'}}>
                                    Login
                                </Text>
                            </TouchableOpacity>
                           

                        </View>
                        
                        <Text style={style.line} >
                            _____________________________________
                        </Text>
                       
                        <View style={style.createAcc}>
                            <TouchableOpacity onPress={() => navigation.navigate('Registration', { name: 'Registration' })}>
                                <Text>
                                    Creact account
                                </Text>
                            </TouchableOpacity>
                         
                        </View>
                        </ScrollView>
                    </View>
                    </ImageBackground>

                </View>

            </SafeAreaView>

        </>
    )
}

const style = StyleSheet.create({

    container: {
      
        height: "100%",
    },
    inputContainer: {
        marginTop: 15,
    },

    createAcc: {

        marginBottom: 80,
        marginLeft: 120,
    },

    crownContainer: {
        flexDirection: "row",
       justifyContent:'space-between'
    },
    icon: {
        paddingLeft: 20
    },
    inputView: {
        backgroundColor: "#EFEFEF",
        borderRadius: 20,
        width: "90%",
        height: 45,
        marginBottom: 20,
        paddingTop: 0,
        marginLeft: 20,
        marginTop: 10,
        flexDirection: "row",
        alignContent:'center',
        alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },


    crown: {
        width: 100,
        height: 100,
        backgroundColor: "white",
        elevation:4,
        borderRadius: 100,
        alignContent: "center",
        justifyContent: "center",
        marginLeft: 11,
      
        padding: 20

    },
    heading: {

        width: "40%",
        marginLeft: "25%",
        marginTop: 30,
        marginBottom: 25,
        //backgroundColor:"red",
        fontSize: 22,
        fontWeight: "bold",
        color: "#000"

    },
    backBox: {
        height: "60%",
        width: "95%",
        marginLeft: 10,

        marginTop: 10,
        //backgroundColor:"red",
  elevation:4,
        borderRadius: 10,
        backgroundColor: "white"

    },

    login: {
        backgroundColor: "#c2c4c3",
        marginLeft: 25,
        borderRadius: 90,
        padding: 10,
        paddingLeft: 30,
        width: "100%",
        height: "100%",
    },
    logAndFogot: {
        flexDirection: "row",
        // backgroundColor:"blue",
        height: "10%",


    },
    line: {
        marginBottom: 0,
        // backgroundColor:"red",
        marginLeft: 50,
        marginBottom: 50


    },
    forgot: {

        padding: 1,

        marginTop: 10,
        paddingLeft: 60

    },
    image: {
        flex: 1,
        justifyContent: "center",
      },

})
export default Login
