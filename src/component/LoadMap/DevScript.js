import React, { Component } from 'react';
import { Dimensions, View, TouchableOpacity, Text, Image } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width
const DEVICE_HEIGHT = Dimensions.get('window').height
class DevScript extends Component {
    render() {
        return (
            <View>
                <Text>
                    day la script
                </Text>
                <View style={{width:DEVICE_WIDTH,height:DEVICE_HEIGHT/5, justifyContent:'center', alignItems:'center', marginBottom:DEVICE_HEIGHT/5}}>
                <TouchableOpacity style={{height:50, width:100, backgroundColor:'#bbbbbb', marginTop:30, justifyContent:'center', alignItems:'center',marginBottom:50,borderRadius:5}} onPress={()=>this.props.navigation.navigate('Core')} >
                <Text>
                    Back
                </Text>
            </TouchableOpacity>
                </View>
                

            </View>
        );
    }
}

export default DevScript;