import React, { Component } from 'react';
import { Dimensions,View, TextInput,TouchableOpacity,Text } from 'react-native';
import {FontAwesome,MaterialCommunityIcons,Fontisto,Entypo,Ionicons,Feather} from '@expo/vector-icons';

const DEVICE_WIDTH=Dimensions.get('window').width
const DEVICE_HEIGHT=Dimensions.get('window').height

class Search_Name extends Component {
  render() {
    return (
      <View style={{flexDirection:'row',backgroundColor:'#cccccc',marginTop:DEVICE_HEIGHT/20, width:DEVICE_WIDTH,height:DEVICE_HEIGHT/13,marginBottom:DEVICE_HEIGHT/50}} >
        <TextInput placeholder='nhap tim kiem' placeholderTextColor="gray"  style={{paddingLeft:15,fontSize:20,color:'#111111',marginLeft:10,borderBottomColor:'#eeeeee', height:DEVICE_HEIGHT/15, width:DEVICE_WIDTH/1.3, borderBottomWidth:1, borderLeftWidth:1, borderLeftColor:'#eeeeee'}} />
      <FontAwesome name='search' size={30} style={{marginTop:DEVICE_HEIGHT/70,marginLeft:DEVICE_WIDTH/30}} />
      </View>
    );
  }
}

export default Search_Name;