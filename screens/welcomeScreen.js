import React from 'react'
import {View ,Text, TextInput, TouchableOpacity,StyleSheet,Alert,Image} from 'react-native'
import firebase from 'firebase'
import db from '../config'

export default class WelcomeScreen extends React.Component{
    
constructor(){
super()

this.state={emailid:'',password:''}

             }


userSignUp=(emailid,password)=>{

firebase.auth().createUserWithEmailAndPassword(emailid,password)

.then((response)=>{
return Alert.alert('USER ADDED SUCESSFULLY')})

.catch (function(error){

var errorMsg = error.message 

return Alert.alert(errorMsg)})

                                }


userlogin=(emailid,password)=>{
firebase.auth().signInWithEmailAndPassword(emailid,password)
.then((response)=>{
return Alert.alert('USER SUCESSFULLY LOGINED')})

.catch (function(error){
var errorMsg = error.message
return Alert.alert(errorMsg)})

                              }     


render(){

 return(
            <View style={styles.container}>     

            <View>    

                <Text style={styles.title}>
                BARTER SYSTEM 
                </Text>

            </View>

            <View>

                <TextInput
                    style={styles.loginBox}
                    placeholder='ENTER EMAIL ADRESS'
                    keyboardType='email-address'
                    onChangeText={(text)=>{

                    this.setState({

                    emailid:text})

                                  }}
                />
                
                <TextInput
                    style={styles.loginBox}
                    placeholder='ENTER PASSWORD'
                    secureTextEntry={true}
                    onChangeText={(text)=>{

                     this.setState({
                        password:text}) 

                                          }}
                />

            </View>

            <View>   
                         
                <TouchableOpacity style={[styles.button,{marginTop:30,marginBottom:40}]}
                
                    onPress={()=>{
                    this.userSignUp(this.state.emailid,this.state.password)
                             
                                 }}
                >         

                    <Text style={styles.buttonText}>    
                     SIGNUP
                    </Text>                

                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                
                    onPress={()=>{
                    this.userlogin(this.state.emailid,this.state.password)
                                 
                                 }}
                >         
                    <Text style={styles.buttonText}>                     
                     LOGIN
                    </Text> 

                </TouchableOpacity>

            </View>

            <View>

                <Image
                    source={require('../assets/barter.png')}
                    style={{width:400,height:400,marginLeft:10}}

                />

            </View>
            
            </View>

        )
        }
} 

const styles = StyleSheet.create({ 
    
container:{flex:1,backgroundColor:'grey'},

profileContainer:{flex:1,justifyContent:'center',alignItems:'center'}, 
     
title:{fontSize:52,fontWeight:'300',paddingBottom:30,color:'black',marginTop:50 ,fontWeight:'bold',shadowOffset:{width:0,height:8,},shadowOpacity:0.6,shadowRadius:5,elevation:122,}, 
     
loginBox:{width:300,height:40,borderBottomWidth:1.5,borderColor:'#ff8a65',fontSize:20,margin:10,paddingLeft:10,marginLeft:50,shadowOffset:{width:0,height:8,},shadowOpacity:20,shadowRadius:7,elevation:122},
          
button:{width:300,height:50,justifyContent:'center',alignItems:'center',borderRadius:25,backgroundColor:"#ff9800",shadowColor: "black",marginLeft:50, shadowOffset:{width:0,height:8,},shadowOpacity:1,shadowRadius:10.32,elevation:16,}, 
            
buttonText:{color:'black',fontWeight:'900',fontSize:20}, 
            
buttonContainer:{ flex:1,alignItems:'center'} 
        
                                })