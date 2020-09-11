import React, { Component,useState } from 'react';
import { Dimensions, Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight, View, ScrollView, Button,TouchableOpacity } from 'react-native';
import Slide from './slider/Slide';
import Search_Name from './Search_Name';
import { FontAwesome, MaterialCommunityIcons, Fontisto, Entypo, Ionicons,Feather } from '@expo/vector-icons';
import NativeForms from "native-forms";
// import { TouchableOpacity } from 'react-native-gesture-handler';

const DEVICE_WIDTH = Dimensions.get('window').width
const DEVICE_HEIGHT = Dimensions.get('window').height


  const   Form_Tu_Van = ({navigation}) => {
        const [hasForm, showForm] = useState(false);
        const show = () => showForm(true);
        const hide = () => showForm(false);
       

        return (
            <View style={styles.container}>
                
            <Text>trungtamjava.com</Text>
       
            <Button style={{borderRadius:5}} title="Đăng kí nhận tư vấn" onPress={show} color="#20f"  />
       
            {hasForm && (
              <NativeForms
                form="https://my.nativeforms.com/wZrpUZF1jZmEmWT50RM1Db"
                onClose={hide}
            
              />
            )}
            <TouchableOpacity style={{height:50, width:100, backgroundColor:'red', marginTop:30, justifyContent:'center', alignItems:'center'}} onPress={()=>navigation.navigate('Core')} >
                <Text>
                    Back
                </Text>
            </TouchableOpacity>
            
          </View>
        );
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
  });

export default Form_Tu_Van;