import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, ScrollView, Button, Image,TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, Fontisto, Entypo, Ionicons, Feather } from '@expo/vector-icons';



const DEVICE_WIDTH = Dimensions.get('window').width
const DEVICE_HEIGHT = Dimensions.get('window').height
class BasicCore extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         go:this.props
      };
    };
  
    render() {
       
        return (
            <View style={{ marginBottom: 50 }}>

                <ScrollView >
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', height: DEVICE_HEIGHT / 10, marginLeft: 10, width: DEVICE_WIDTH / 2.5, marginTop: DEVICE_WIDTH / 10 }}>
                        <Image source={{ uri: 'http://core.trungtamjava.com/public/course/khoa-hoc-java-co-ban-p.jpg' }} style={{ width: DEVICE_WIDTH / 2, height: DEVICE_HEIGHT / 6 }} />
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 15, flexDirection: 'column', width: DEVICE_WIDTH / 2.5, height: DEVICE_HEIGHT / 5, marginTop: -DEVICE_HEIGHT / 40 }}>
                            <Text style={{ fontSize: 25, fontWeight: '700', color: '#555555' }}>
                                JavaCore Cơ Bản
                          </Text>
                            <Text>
                                Giáo viên: Đình Cường
                          </Text>
                            <View>
                                <View style={{ marginLeft: -DEVICE_WIDTH / 10 }}>
                                    <Text>
                                        Đánh giá
                          </Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Entypo name='star' size={20} color='#ffcc00' />
                                        <Entypo name='star' size={20} color='#ffcc00' />
                                        <Entypo name='star' size={20} color='#ffcc00' />
                                        <Entypo name='star' size={20} color='#ffcc00' />
                                        <Entypo name='star' size={20} color='#ffcc00' />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View style={{ marginTop: DEVICE_HEIGHT / 9, width: DEVICE_WIDTH, justifyContent: 'center', alignItems: 'center', height: DEVICE_HEIGHT / 15 }} >
                        <View style={{
                            width: DEVICE_WIDTH / 2, justifyContent: 'center', alignItems: 'center', height: DEVICE_HEIGHT / 15, backgroundColor: '#ffcc99', borderRadius: 5, borderWidth: 1,
                            shadowColor: "#ffcc99",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.5,
                            shadowRadius: 5.84,
                            elevation: 10,
                        }}>
                            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('CourseCore')}} >
                            <Text style={{ fontSize: 20, fontStyle: 'italic' }}>
                                Tham gia ngay
                            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: DEVICE_HEIGHT / 20, }}>
                        <View style={{ backgroundColor: '#DDDDDD', marginBottom: 5, flexDirection: 'row', borderRadius: 5, width: DEVICE_WIDTH / 1.1, marginLeft: DEVICE_WIDTH / 100, height: DEVICE_HEIGHT / 20 }}>
                            <Entypo name='star' size={25} color='#ff9966' />
                            <Text style={{ fontSize: 20, fontStyle: 'italic', fontWeight: '700' }}>
                                Thông tin chung
                    </Text>
                        </View>
                        <View style={{ width: DEVICE_WIDTH / 1.15, marginLeft: DEVICE_WIDTH / 50 }}>
                            <Text style={{ fontSize: 18 }}>
                                Lập trình Java là ngôn ngữ lập trình hướng đối tượng rất phổ biến hiện nay.

                                Khóa học cung cấp cho học viên các kiến thức cơ bản về Java, cách cài đặt, khởi tạo và xây dựng ứng dụng thực tế.
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginTop: DEVICE_HEIGHT / 20, }}>
                        <View style={{ backgroundColor: '#DDDDDD', marginBottom: 5, flexDirection: 'row', borderRadius: 5, width: DEVICE_WIDTH / 1.1, marginLeft: DEVICE_WIDTH / 100, height: DEVICE_HEIGHT / 20 }}>
                            <Entypo name='star' size={25} color='#ff9966' />
                            <Text style={{ fontSize: 20, fontStyle: 'italic', fontWeight: '700' }}>
                                Lợi ích từ khoá học
                    </Text>
                        </View>
                        <View style={{ width: DEVICE_WIDTH / 1.15, marginLeft: DEVICE_WIDTH / 50 }}>
                            <Text style={{ fontSize: 18 }}>
                                Khoá học sẽ giúp học viên có kiến thức cơ bản về ngôn ngữ lập trình Java.
                                Có khả năng giải quyết những bài toán căn bản.
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginTop: DEVICE_HEIGHT / 20, }}>
                        <View style={{ backgroundColor: '#DDDDDD', marginBottom: 5, flexDirection: 'row', borderRadius: 5, width: DEVICE_WIDTH / 1.1, marginLeft: DEVICE_WIDTH / 100, height: DEVICE_HEIGHT / 20 }}>
                            <Entypo name='star' size={25} color='#ff9966' />
                            <Text style={{ fontSize: 20, fontStyle: 'italic', fontWeight: '700' }}>
                            Phù hợp với
                    </Text>
                        </View>
                        <View style={{ width: DEVICE_WIDTH / 1.15, marginLeft: DEVICE_WIDTH / 50 }}>
                            <Text style={{ fontSize: 18 }}>
                            Sinh viên, nhân viên văn phòng thuộc lĩnh vực CNTT hoặc có đam mê tìm hiểu lập trình.
                            </Text>
                        </View>
                    </View>

                </ScrollView>
                <View style={{width:DEVICE_WIDTH,alignItems:'center'}}>
                <View style={{
                            width: DEVICE_WIDTH/2, justifyContent: 'center', alignItems: 'center', height: DEVICE_HEIGHT / 15, backgroundColor: '#ffcc66', borderRadius: 5,
                            shadowColor: "#ffcc99",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.5,
                            shadowRadius: 5.84,

                            elevation: 10,
                        }}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Core')} style={{flexDirection:'row',justifyContent:'space-between',alignItems:'stretch'}} >
              <Entypo name='arrow-with-circle-left' size={20} style={{marginRight:15,marginTop:3}} />
                            <Text style={{ fontSize: 20, fontStyle: 'italic'  }}>
                                Back
                            </Text>
                       
            </TouchableOpacity>
            </View>
                </View>
            </View>
        );
    }
}

export default BasicCore;