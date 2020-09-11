import React, { Component } from 'react';
import { Dimensions,View } from 'react-native';



const DEVICE_WIDTH = Dimensions.get('window').width
const DEVICE_HEIGHT = Dimensions.get('window').height
class CourseCore extends Component {
    render() {
        return (
            <View>
                <View style={{ alignItems: 'center', justifyContent: 'center', width: DEVICE_WIDTH, height: DEVICE_HEIGHT / 10, backgroundColor: '#ffffcc', position: 'absolute', flex: 0.1, left: 0, right: 0, top: 0, zIndex: 0 }}>
                    <Text style={{ fontSize: 25, fontWeight: '700', fontStyle: 'italic', color: '#555555' }}>
                        JavaCore
                    </Text>
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginTop:DEVICE_HEIGHT/8
                    }}
                />
            </View>
        );
    }
}

export default CourseCore;