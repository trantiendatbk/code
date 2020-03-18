import React, { Component } from 'react';
import {TouchableHighlight,Modal,SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { render } from 'react-dom';




const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
];



export default class App extends Component {
  state= {
    modalVisible1: false,
    modalVisible2: false,
    modalVisible3: false,
  };
  

  setModalVisible1(visible) {
    this.setState({modalVisible1: visible});
  }
  setModalVisible2(visible) {
    this.setState({modalVisible2: visible});
  }
  setModalVisible3(visible) {
    this.setState({modalVisible3: visible});
  }
  Item=({item})=> {

    return (
      <View style={styles.item}>
      <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible1}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible1(false);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible1(true);
          }}>
          <Text>{item.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }

  render() {
    return (
      <FlatList
      data={DATA}
      renderItem={this.Item}
      keyExtractor={item => item.id}
    />
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
