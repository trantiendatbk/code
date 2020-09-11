import React, { Component } from "react";
import {  Dimensions, StyleSheet, Text, View } from "react-native";
import BackgroundCarousel   from "./BackgroundCarousel";
const DEVICE_WIDTH=Dimensions.get('window').width * 4
const images = [
  "http://core.trungtamjava.com/public/course/khoa-hoc-reactjs-p.jpg",
  "http://core.trungtamjava.com/public/course/khoa-hoc-spring-boot-p.jpg",
  "http://core.trungtamjava.com/public/course/khoa-hoc-java-network-lap-trinh-mang-p.jpg",
  "http://core.trungtamjava.com/public/course/khoa-hoc-sql-co-ban-p.jpg",
  "http://core.trungtamjava.com/public/course/khoa-hoc-spring-mvc-p.jpg"
];

class Slide extends Component {
  render() {
    return <View >
        <BackgroundCarousel images={images} />
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
export default Slide;