import React, { Component } from 'react';
import {  Dimensions,View, Image,Text, ScrollView } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, Fontisto, Entypo, Ionicons,Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


const DEVICE_WIDTH = Dimensions.get('window').width
const DEVICE_HEIGHT = Dimensions.get('window').height
class SlideLoadMap extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         go:this.props.props
      };
    };
    
    render() {
        return (
            <View style={{paddingLeft:15, flexDirection:'column',marginTop:15}}>
                 <View style={{marginTop:10,alignItems:'center',justifyContent:'center',backgroundColor:'#DDDDDD',marginBottom:5,  flexDirection:'row', borderRadius:5,width:DEVICE_WIDTH/1.1,marginLeft:DEVICE_WIDTH/24}}>
                    <Entypo name='star' size={25} color='#ff9966' />
                    <Text style={{ fontSize:20,fontStyle:'italic', fontWeight:'600'}}>
                        Lộ trình 
                    </Text>
                </View>
                <ScrollView horizontal>
               <View style={{flexDirection:'row', marginTop:15}}>
                  
               <TouchableOpacity onPress={()=>this.state.go.navigation.navigate('DevJava')}>
               <View style={{paddingLeft:0}}>
                    <Image source={{uri:'http://core.trungtamjava.com/public/course/khoa-hoc-reactjs-p.jpg'}} style={{width:DEVICE_WIDTH/3+50, height:DEVICE_HEIGHT/6}} />
                    <View style={{justifyContent:'center', alignItems:'center',width:DEVICE_WIDTH/3+50, height:DEVICE_HEIGHT/15, backgroundColor:'#bbbbbb', borderBottomLeftRadius:5,borderBottomRightRadius:5}}>
                    <Text style={{fontSize:17,fontWeight:'600',color:'#440000'  }}>
                        Lộ trình Java Dev
                    </Text>
                    </View>
                   
                </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={()=>this.state.go.navigation.navigate('DevWeb')}>
               <View style={{paddingLeft:5}}>
                    <Image source={{uri:'http://core.trungtamjava.com/public/course/khoa-hoc-reactjs-p.jpg'}} style={{width:DEVICE_WIDTH/3+50, height:DEVICE_HEIGHT/6}} />
                    <View style={{justifyContent:'center', alignItems:'center',width:DEVICE_WIDTH/3+50, height:DEVICE_HEIGHT/15, backgroundColor:'#bbbbbb', borderBottomLeftRadius:5,borderBottomRightRadius:5}}>
                    <Text style={{fontSize:17,fontWeight:'600',color:'#440000'  }}>
                        Lộ trình Web Dev
                    </Text>
                    </View>
                   
                </View>
               </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.state.go.navigation.navigate('DevMobile')}>
              <View style={{paddingLeft:5}}>
                    <Image source={{uri:'http://core.trungtamjava.com/public/course/khoa-hoc-reactjs-p.jpg'}} style={{width:DEVICE_WIDTH/3+50, height:DEVICE_HEIGHT/6}} />
                    <View style={{justifyContent:'center', alignItems:'center',width:DEVICE_WIDTH/3+50, height:DEVICE_HEIGHT/15, backgroundColor:'#bbbbbb', borderBottomLeftRadius:5,borderBottomRightRadius:5}}>
                    <Text style={{fontSize:17,fontWeight:'600',color:'#440000'  }}>
                        Lộ trình Mobile Dev
                    </Text>
                    </View>
                   
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.state.go.navigation.navigate('DevScript')}>
              <View style={{paddingLeft:5}}>
                    <Image source={{uri:'http://core.trungtamjava.com/public/course/khoa-hoc-reactjs-p.jpg'}} style={{width:DEVICE_WIDTH/3+50, height:DEVICE_HEIGHT/6}} />
                    <View style={{justifyContent:'center', alignItems:'center',width:DEVICE_WIDTH/3+50, height:DEVICE_HEIGHT/15, backgroundColor:'#bbbbbb', borderBottomLeftRadius:5,borderBottomRightRadius:5}}>
                    <Text style={{fontSize:17,fontWeight:'600',color:'#440000', alignItems:'center',justifyContent:'center',width:DEVICE_WIDTH/3+50, height:DEVICE_HEIGHT/15  }}>
                        Lộ trình Javascript Dev
                    </Text>
                    </View>
                   
                </View>
              </TouchableOpacity>
              
               
                
               
               </View>
               </ScrollView>
            </View>
        );
    }
}

export default SlideLoadMap;