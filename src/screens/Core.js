import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import Slide from '../component/slider/Slide';
import Search_Name from '../component/Search_Name';
import { FontAwesome, MaterialCommunityIcons, Fontisto, Entypo, Ionicons, Feather } from '@expo/vector-icons';
import SlideLoadMap from '../component/LoadMap/SlideLoadMap';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import Form_Tu_Van from '../component/Form_Tu_van';
// import { Actions } from 'react-native-router-flux';
// import Routers from './src/Routers';



const DEVICE_WIDTH = Dimensions.get('window').width
const DEVICE_HEIGHT = Dimensions.get('window').height

class Core extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         prips:this.props
      };
    };
    

    render() {
        return (
            <View style={{ marginBottom: 50 }} >
                <ScrollView >
                    <Search_Name />
                    <Slide />

                    <View>
                        <View style={{ marginTop: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#DDDDDD', marginBottom: 5, flexDirection: 'row', borderRadius: 5, width: DEVICE_WIDTH / 1.1, marginLeft: DEVICE_WIDTH / 24 }}>
                            <Entypo name='star' size={25} color='#ff9966' />
                            <Text style={{ fontSize: 20, fontStyle: 'italic', fontWeight: '600' }}>
                                Danh mục
                    </Text>
                        </View>
                        <View style={{flexDirection:'row',padding:5,alignItems:'center',justifyContent:'space-around'}}>
                            <View>
                                <FontAwesome name='th-list' size={30} />
                            </View>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Category')}>
                            <Text  style={{fontSize:20, fontStyle:'italic',textDecorationLine:'underline'}}>
                                Danh mục các khóa học
                            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <SlideLoadMap props={this.props}  />
                   <TouchableOpacity onPress={()=>this.props.navigation.navigate('BasicCore',{propsCourse:'hhhh'})}>
                   <View style={{ marginTop: DEVICE_HEIGHT / 20, marginLeft: DEVICE_WIDTH / 22, flexDirection: 'row', width: DEVICE_WIDTH / 1.1, justifyContent: 'space-between', alignItems: 'center', borderRadius: 5, borderWidth: 1, borderColor: '#00cc00' }} >
                        <FontAwesome name='book' color='#00cc00' size={30} style={{ marginTop: DEVICE_HEIGHT / 70, marginLeft: DEVICE_WIDTH / 30 }} />
                        <Text style={{ fontSize: 20, fontStyle: 'italic', fontWeight: '600' }}>
                            Khóa học javacore cơ bản
                    </Text>
                        <Feather name='chevron-right' color='#00cc00' size={30} style={{ marginTop: DEVICE_HEIGHT / 70, marginLeft: DEVICE_WIDTH / 30 }} />

                    </View>
                   </TouchableOpacity>
                    <View style={{ marginTop: DEVICE_HEIGHT / 20, marginLeft: DEVICE_WIDTH / 22, flexDirection: 'row', width: DEVICE_WIDTH / 1.1, justifyContent: 'space-between', alignItems: 'center', borderRadius: 5, borderWidth: 1, borderColor: '#00cc00' }} >
                        <FontAwesome name='book' color='#00cc00' size={30} style={{ marginTop: DEVICE_HEIGHT / 70, marginLeft: DEVICE_WIDTH / 30 }} />
                        <Text style={{ fontSize: 20, fontStyle: 'italic', fontWeight: '600' }}>
                            Khóa học javacore nâng cao
                    </Text>
                        <Feather name='chevron-right' color='#00cc00' size={30} style={{ marginTop: DEVICE_HEIGHT / 70, marginLeft: DEVICE_WIDTH / 30 }} />

                    </View>
                    <View style={{ marginTop: DEVICE_HEIGHT / 20, marginLeft: DEVICE_WIDTH / 22, flexDirection: 'row', width: DEVICE_WIDTH / 1.1, justifyContent: 'space-between', alignItems: 'center', borderRadius: 5, borderWidth: 1, borderColor: '#00cc00' }} >
                        <FontAwesome name='book' color='#00cc00' size={30} style={{ marginTop: DEVICE_HEIGHT / 70, marginLeft: DEVICE_WIDTH / 30 }} />
                        <Text style={{ fontSize: 20, fontStyle: 'italic', fontWeight: '600' }}>
                            Bộ câu hỏi phỏng vấn
                    </Text>
                        <Feather name='chevron-right' color='#00cc00' size={30} style={{ marginTop: DEVICE_HEIGHT / 70, marginLeft: DEVICE_WIDTH / 30 }} />

                    </View>
                    <View style={{ marginTop: DEVICE_HEIGHT / 20, marginLeft: DEVICE_WIDTH / 22, flexDirection: 'row', width: DEVICE_WIDTH / 1.1, justifyContent: 'space-between', alignItems: 'center', borderRadius: 5, borderWidth: 1, borderColor: '#00cc00' }} >
                        <FontAwesome name='book' color='#00cc00' size={30} style={{ marginTop: DEVICE_HEIGHT / 70, marginLeft: DEVICE_WIDTH / 30 }} />
                        <Text style={{ fontSize: 20, fontStyle: 'italic', fontWeight: '600' }}>
                            Mẹo trả lời phỏng vấn
                    </Text>
                        <Feather name='chevron-right' color='#00cc00' size={30} style={{ marginTop: DEVICE_HEIGHT / 70, marginLeft: DEVICE_WIDTH / 30 }} />

                    </View>
                    <View style={{ marginTop: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#DDDDDD', marginBottom: 5, flexDirection: 'row', borderRadius: 5, width: DEVICE_WIDTH / 1.1, marginLeft: DEVICE_WIDTH / 24 }}>
                        <Entypo name='star' size={25} color='#ff9966' />
                        <Text style={{ fontSize: 20, fontStyle: 'italic', fontWeight: '600' }}>
                            Các Review về khóa học
                    </Text>
                    </View>

                </ScrollView>
                <View style={{ height: 100, marginBottom: 500 }}>
                    {/* <ScrollView > */}
                    <Button style={{ borderRadius: 5 }} title="Đăng kí nhận tư vấn" onPress={() => this.props.navigation.navigate('Form_Tu_Van')} color="#20f" />
                    {/* </ScrollView>  */}
                    {/* <Routers/> */}
                </View>
            </View>
        );
    }
}

export default Core;