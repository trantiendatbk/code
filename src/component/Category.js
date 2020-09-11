import React, { Component } from 'react';
import { Dimensions, View, TouchableOpacity, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const DEVICE_WIDTH = Dimensions.get('window').width
const DEVICE_HEIGHT = Dimensions.get('window').height
class Category extends Component {
    render() {
        return (
            <View >
                 <View style={{ alignItems: 'center', justifyContent: 'center', width: DEVICE_WIDTH, height: DEVICE_HEIGHT / 10, backgroundColor:'#ffffcc',position:'absolute', flex:0.1,left: 0,right: 0,top:0,zIndex:0}}>
                    <Text style={{ fontSize: 25, fontWeight: '700', fontStyle: 'italic', color: '#555555' }}>
                        Các Khóa Học
                    </Text>
                </View>
                <ScrollView style={{position:'relative',zIndex:1,top:DEVICE_HEIGHT / 10}}>
               
                <View style={{flexDirection:'row',marginTop:50}}>

                    <View style={{flexDirection:'column'}}>
                        <View style={{ height: DEVICE_HEIGHT / 10, marginLeft: 10 }}>
                            <Image source={{ uri: 'http://core.trungtamjava.com/public/course/khoa-hoc-reactjs-p.jpg' }}  style={{  width: DEVICE_WIDTH / 2-10,height: DEVICE_HEIGHT / 5 }} />
                        {/* </View> */}
                        {/* <View> */}
                            <View style={{justifyContent:'center', alignItems:'center', marginTop:10}}>
                            <Text style={{fontSize:25, fontWeight:'700'}}>
                                React js
                          </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <View style={{ height: DEVICE_HEIGHT / 10, marginLeft: 10 }}>
                            <Image source={{ uri: 'http://core.trungtamjava.com/public/course/khoa-hoc-reactjs-p.jpg' }}  style={{  width: DEVICE_WIDTH / 2-10,height: DEVICE_HEIGHT / 5 }} />
                            <View style={{justifyContent:'center', alignItems:'center', marginTop:10}}>
                            <Text style={{fontSize:25, fontWeight:'700'}}>
                                React js
                          </Text>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={{flexDirection:'row', marginTop:DEVICE_HEIGHT/5}}>

                    <View style={{flexDirection:'column'}}>
                        <View style={{ height: DEVICE_HEIGHT / 10, marginLeft: 10 }}>
                            <Image source={{ uri: 'http://core.trungtamjava.com/public/course/khoa-hoc-reactjs-p.jpg' }}  style={{  width: DEVICE_WIDTH / 2-10,height: DEVICE_HEIGHT / 5 }} />
                        {/* </View> */}
                        {/* <View> */}
                            <View style={{justifyContent:'center', alignItems:'center', marginTop:10}}>
                            <Text style={{fontSize:25, fontWeight:'700'}}>
                                React js
                          </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <View style={{ height: DEVICE_HEIGHT / 10, marginLeft: 10 }}>
                            <Image source={{ uri: 'http://core.trungtamjava.com/public/course/khoa-hoc-reactjs-p.jpg' }}  style={{  width: DEVICE_WIDTH / 2-10,height: DEVICE_HEIGHT / 5 }} />
                        {/* </View> */}
                        {/* <View> */}
                            <View style={{justifyContent:'center', alignItems:'center', marginTop:10}}>
                            <Text style={{fontSize:25, fontWeight:'700'}}>
                                React js
                          </Text>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={{flexDirection:'row', marginTop:DEVICE_HEIGHT/5}}>

                    <View style={{flexDirection:'column'}}>
                        <View style={{ height: DEVICE_HEIGHT / 10, marginLeft: 10 }}>
                            <Image source={{ uri: 'http://core.trungtamjava.com/public/course/khoa-hoc-reactjs-p.jpg' }}  style={{  width: DEVICE_WIDTH / 2-10,height: DEVICE_HEIGHT / 5 }} />
                        {/* </View> */}
                        {/* <View> */}
                            <View style={{justifyContent:'center', alignItems:'center', marginTop:10}}>
                            <Text style={{fontSize:25, fontWeight:'700'}}>
                                React js
                          </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <View style={{ height: DEVICE_HEIGHT / 10, marginLeft: 10 }}>
                            <Image source={{ uri: 'http://core.trungtamjava.com/public/course/khoa-hoc-reactjs-p.jpg' }}  style={{  width: DEVICE_WIDTH / 2-10,height: DEVICE_HEIGHT / 5 }} />
                        {/* </View> */}
                        {/* <View> */}
                            <View style={{justifyContent:'center', alignItems:'center', marginTop:10}}>
                            <Text style={{fontSize:25, fontWeight:'700'}}>
                                React js
                          </Text>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={{flexDirection:'row', marginTop:DEVICE_HEIGHT/5,marginBottom:DEVICE_HEIGHT/5}}>

                    <View style={{flexDirection:'column'}}>
                        <View style={{ height: DEVICE_HEIGHT / 10, marginLeft: 10 }}>
                            <Image source={{ uri: 'http://core.trungtamjava.com/public/course/khoa-hoc-reactjs-p.jpg' }}  style={{  width: DEVICE_WIDTH / 2-10,height: DEVICE_HEIGHT / 5 }} />
                        {/* </View> */}
                        {/* <View> */}
                            <View style={{justifyContent:'center', alignItems:'center', marginTop:10}}>
                            <Text style={{fontSize:25, fontWeight:'700'}}>
                                React js
                          </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <View style={{ height: DEVICE_HEIGHT / 10, marginLeft: 10 }}>
                            <Image source={{ uri: 'http://core.trungtamjava.com/public/course/khoa-hoc-reactjs-p.jpg' }}  style={{  width: DEVICE_WIDTH / 2-10,height: DEVICE_HEIGHT / 5 }} />
                        {/* </View> */}
                        {/* <View> */}
                            <View style={{justifyContent:'center', alignItems:'center', marginTop:10}}>
                            <Text style={{fontSize:25, fontWeight:'700'}}>
                                React js
                          </Text>
                            </View>
                        </View>
                    </View>
                   
                </View>
                <View style={{width:DEVICE_WIDTH,height:DEVICE_HEIGHT/5, justifyContent:'center', alignItems:'center', marginBottom:DEVICE_HEIGHT/5}}>
                <TouchableOpacity style={{height:50, width:100, backgroundColor:'#bbbbbb', marginTop:30, justifyContent:'center', alignItems:'center',marginBottom:50,borderRadius:5}} onPress={()=>this.props.navigation.navigate('Core')} >
                <Text>
                    Back
                </Text>
            </TouchableOpacity>
                </View>
                </ScrollView>
                
            </View>
        );
    }
}

export default Category;