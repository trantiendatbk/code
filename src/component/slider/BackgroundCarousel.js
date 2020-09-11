import React, { Component } from 'react';
import { Dimensions, View, ScrollView,Image,StyleSheet,Text } from 'react-native';
import {FontAwesome,MaterialCommunityIcons,Fontisto,Entypo,Ionicons} from '@expo/vector-icons';


const DEVICE_WIDTH=Dimensions.get('window').width
const DEVICE_HEIGHT=Dimensions.get('window').height
class BackgroundCarousel extends Component {
    scrolRef=React.createRef()
    constructor(props) {
      super(props)
    
      this.state = {
         selectedIndex:0
      };
    };
       setSelectedIndex=event=>{
           const viewSize=event.nativeEvent.layoutMeasurement.width;
           const contentOffset=event.nativeEvent.contentOffset.x;
           const selectedIndex=Math.floor(contentOffset/viewSize);
           this.setState({selectedIndex:1})
       } 
    

    render() {
        const {images}=this.props
        const {selectedIndex}=this.state
    return (
            <View style={{width:DEVICE_WIDTH, height:DEVICE_HEIGHT/3+20, flexDirection:'column'}} >
               
               <View style={{marginTop:10,alignItems:'center',justifyContent:'center',backgroundColor:'#DDDDDD',marginBottom:5,  flexDirection:'row', borderRadius:5,width:DEVICE_WIDTH/1.1,marginLeft:DEVICE_WIDTH/24}}>
                    <Entypo name='star' size={25} color='#ff9966' />
                    <Text style={{ fontSize:20,fontStyle:'italic', fontWeight:'600'}}>
                        Các khóa học hiện có
                    </Text>
                </View>
                <ScrollView horizontal pagingEnabled
                onMomentumScrollEnd={this.setSelectedIndex}
                ref={this.scrolRef}
                style={{width:DEVICE_WIDTH, height:DEVICE_HEIGHT}}
                >
                    {images.map(image=>(
                       <Image
                       key={image}
                       source={{uri:image}}
                       size={30}
                       style={[{height:DEVICE_HEIGHT/3,width:DEVICE_WIDTH}]}
                       />
                    ))}
                </ScrollView>
                <View style={styles.circle} >
         {images.map((image,i)=>(
             <View key={image} style={[styles.whiteCircle,{opacity:i==selectedIndex?0.5:1}]} />
         ))}
                </View>
            </View>
        );
    }
    componentDidMount=()=>{
        setInterval(()=>{
this.setState(prev=>({
    selectedIndex:prev.selectedIndex===this.props.images.length-1?0:prev.selectedIndex+1
}),()=>{
    this.scrolRef.current.scrollTo({
        animated:true,
        y:0,
        x:DEVICE_WIDTH*this.state.selectedIndex
    })
})
        },3000)
    }
}
const styles= StyleSheet.create({
     circle:{
         position:'absolute',
         bottom:15,
         height:10,
         display:'flex',
         flexDirection:'row',
         justifyContent:'center',
         alignItems:'center',
         width:'100%'
     },
     whiteCircle:{
        margin:5,
         width:6,
         height:6,
         borderRadius:3,
         backgroundColor:'#fff',
         
     }
})
export default BackgroundCarousel;

