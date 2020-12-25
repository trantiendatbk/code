import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image, Dimensions } from 'react-native';
import SoundPlayer from 'react-native-sound-player'
import { Audio } from 'expo-av'
import { Animated } from 'react-native';
import { Card, CheckBox, Button } from 'react-native-elements';
import { ScrollView } from 'react-native';
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 100,
        height: 100,
    },
    logo: {
        width: 66,
        height: 58,
    },
    ball: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fadingContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "powderblue"
    },
    fadingText: {
        fontSize: 28,
        textAlign: "center",
        margin: 10
    },
   
});
const DEVICE_WIDTH = Dimensions.get('window').width
const DEVICE_HEIGHT = Dimensions.get('window').height
class Screen1 extends Component {

    constructor(props) {
        // this.ball =new Animated.ValueXY(0)
        // fadeAnim = useRef(new Animated.Value(0)).current;


        super(props)
        this.playbackObject = new Audio.Sound()
        this.state = {
            checked0: {
                ans:false,
                color:'white'
            },
            checked1: {
                ans:false,
                color:'white'
            },
            checked2: {
                ans:false,
                color:'white'
            },
            checked3: {
                ans:false,
                color:'white'
            },
            
            right: false,
            color: 'white',
            fadeAnim: new Animated.Value(0)
        };
    };

    runAudio = async () => {
        await Audio.requestPermissionsAsync();
        console.log("1")
        await Audio.Sound.createAsync(require('.././../assets/Faded.mp3'), { shouldPlay: true })
        console.log('LLL')
    }
    //https://avatar-nct.nixcdn.com/song/2017/11/20/f/c/e/7/1511141429975_640.jpg
    stopAudio = async () => {
        console.log("2")
        this.playbackObject.stopAsync();
        console.log('ttt')
    }
    fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(this.state.fadeAnim, {
            toValue: 1,
            duration: 5000
        }).start();
    };
    test = () => {
        if (this.state.checked0.ans == true) {
            this.setState({
                right: true,
                checked0:{color:'green',ans:true}
            })
            this.fadeIn()
        }
        else {
            this.setState({
                right: false,
               
            })
            if(this.state.checked1.ans){
                this.setState({checked1:{color:'red',ans:true}})
            }
            if(this.state.checked2.ans){
                this.setState({checked2:{color:'red',ans:true}})
            }
            if(this.state.checked3.ans){
                this.setState({checked3:{color:'red',ans:true}})
            }
            console.log(this.state.right)
        }
    }

    render() {
        return (
            <ScrollView  >
                <View style={{ marginTop: 10, width: DEVICE_WIDTH, height: DEVICE_HEIGHT, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', marginTop: 50,backgroundColor:this.state.checked0.color }}>
                        <CheckBox
                            checked={this.state.checked0.ans}
                            onPress={() => this.setState({
                                checked0:{ans : !this.state.checked0.ans,color:this.state.checked0.color},
                                checked1:{ans : false,color:'white'},
                                checked2:{ans : false,color:'white'},
                                checked3:{ans : false,color:'white'},
                            })}
                        />

                        <TouchableOpacity onPress={() => this.runAudio()} style={{ width: 50, height: 50, backgroundColor: 'red' }}>
                            <Image
                                style={styles.tinyLogo}
                                source={{ uri: 'https://avatar-nct.nixcdn.com/song/2017/11/20/f/c/e/7/1511141429975_640.jpg' }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 50,backgroundColor:this.state.checked1.color }}>
                        <CheckBox
                            checked={this.state.checked1.ans}
                            onPress={() => this.setState({
                                checked1:{ans : !this.state.checked1.ans,color:this.state.checked1.color},
                                checked0:{ans : false,color:'white'},
                                checked2:{ans : false,color:'white'},
                                checked3:{ans : false,color:'white'},
                            })}
                        />

                        <TouchableOpacity onPress={() => this.runAudio()} style={{ width: 50, height: 50, backgroundColor: 'red' }}>
                            <Image
                                style={styles.tinyLogo}
                                source={{ uri: 'https://avatar-nct.nixcdn.com/song/2017/11/20/f/c/e/7/1511141429975_640.jpg' }}
                            />
                        </TouchableOpacity>
                    </View>


                    <View  style={{ flexDirection: 'row', marginTop: 50,backgroundColor:this.state.checked2.color}}   >

                        <CheckBox
                            checked={this.state.checked2.ans}
                            onPress={() => this.setState({
                                checked2:{ans : !this.state.checked2.ans,color:this.state.checked2.color},
                                checked0:{ans : false,color:'white'},
                                checked1:{ans : false,color:'white'},
                                checked3:{ans : false,color:'white'},
                               
                            })}
                        />

                        <TouchableOpacity onPress={() => this.runAudio()} style={{ width: 50, height: 50, backgroundColor: 'red' }}>
                            <Image
                                style={styles.tinyLogo}
                                source={{ uri: 'https://avatar-nct.nixcdn.com/song/2017/11/20/f/c/e/7/1511141429975_640.jpg' }}
                            />
                        </TouchableOpacity>
                    </View>

                    
                        <View style={{ flexDirection: 'row', marginTop: 50,backgroundColor:this.state.checked3.color }}>
                            <CheckBox
                                checked={this.state.checked3.ans}
                                onPress={() => this.setState({
                                    checked3:{ans : !this.state.checked3.ans,color:this.state.checked3.color},
                                    checked0:{ans : false,color:'white'},
                                    checked2:{ans : false,color:'white'},
                                    checked1:{ans : false,color:'white'},
                                })}
                            />

                            <TouchableOpacity onPress={() => this.runAudio()} style={{ width: 50, height: 50 }}>
                                <Image
                                    style={styles.tinyLogo}
                                    source={{ uri: 'https://avatar-nct.nixcdn.com/song/2017/11/20/f/c/e/7/1511141429975_640.jpg' }}
                                />
                            </TouchableOpacity>
                        </View>
                  

                    <View style={styles.container}>
                        {this.state.right ?
                            <Animated.View
                                style={[
                                    styles.fadingContainer,
                                    {
                                        opacity: this.state.fadeAnim // Bind opacity to animated value
                                    }
                                ]}
                            >
                                <Text style={styles.fadingText}>Đúng roi!</Text>
                            </Animated.View>
                            :
                            <Animated.View
                                style={[
                                    styles.fadingContainer,
                                    {
                                        opacity: this.state.fadeAnim // Bind opacity to animated value
                                    }
                                ]}
                            >
                                <Text style={styles.fadingText}>Sai rồi!</Text>
                            </Animated.View>
                        }
                    </View>



                    <View style={styles.tinyLogo, [{ marginTop: 10, }]}>
                        <TouchableOpacity onPress={() => { this.test() }} style={{ backgroundColor: 'red', width: 150, height: 50 }}>
                            <Text>
                                Kiểm tra đáp án
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>



            </ScrollView>
        );
    }
}

export default Screen1;