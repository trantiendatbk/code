import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Entypo from 'react-native-vector-icons/Entypo';
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FontAwesome,MaterialCommunityIcons,Fontisto,Entypo,Ionicons} from '@expo/vector-icons';
import { Component} from 'react';
import Core from '../screens/Core';
import Js from '../screens/Js';
import Spring from '../screens/Spring';
import Web from '../screens/Web';
import Router_Core from './Router_Core';

const Tab = createBottomTabNavigator();



class TabNavigation extends Component {
    render() {
        return (
            // <NavigationContainer headerMode='none'  >
                <Tab.Navigator initialRouteName="Feed"
                    tabBarOptions={{
                        activeTintColor: '#e91e63',
                    }} >
                    <Tab.Screen name="Core" component={Router_Core} options={{
                        tabBarLabel: 'Core',
                        tabBarIcon: ({ color, size }) => (
                            <Fontisto name="java" color={color} size={size} />
                        ),
                        tabBarBadge: 3,
                    }} />
                    <Tab.Screen name="Js" component={Js} options={{
          tabBarLabel: 'Js',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="logo-javascript" color={color} size={size} />
          ),
        }} />
                    <Tab.Screen name="Spring" component={Spring} options={{
          tabBarLabel: 'Spring',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome
            name="leaf" color={color} size={size} />
          ),
        }} />
                    <Tab.Screen name="Web" component={Web} options={{
          tabBarLabel: 'Web',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="code" color={color} size={size} />
          ),
        }}/>
                </Tab.Navigator>
            
        );
    }
}

export default TabNavigation;