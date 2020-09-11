import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button } from 'react-native';
import TabNavigation from './src/component/TabNavigation';
import Slide from './src/component/slider/Slide';
import Category from './src/component/Category';
import BasicCore from './src/screens/BasicCore';
// import Routes from './src/Routes';

// import Routers from './src/Routers';

// import Search from './src/component/Search'
// import Search from 'react-native-search-box';
// import Slide from './src/component/slider/Slide';
// import TabNavigation from './src/component/TabNavigation';

export default function App() {
  return (
    // <View >
    // <Routes></Routes>

// {/* <BasicCore/> */}
     <NavigationContainer>
     
      <TabNavigation />
    </NavigationContainer> 
    

  //  </View>
   

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
