import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Form_Tu_Van from './Form_Tu_Van';
import Core from '../screens/Core';
import Category from './Category';
import DevJava from './LoadMap/DevJava';
import DevWeb from './LoadMap/DevWeb';
import DevMobile from './LoadMap/DevMobile';
import DevScript from './LoadMap/DevScript';
import BasicCore from '../screens/BasicCore';
import CourseCore from '../screens/CourseCore';

const Stack = createStackNavigator();

class Router_Core extends Component {
    render() {
        return (
            <Stack.Navigator headerMode='none' >
            <Stack.Screen name="Core" component={Core} />
            <Stack.Screen name="Form_Tu_Van" component={Form_Tu_Van} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="DevJava" component={DevJava} />
            <Stack.Screen name="DevWeb" component={DevWeb} />
            <Stack.Screen name="DevMobile" component={DevMobile} />
            <Stack.Screen name="DevScript" component={DevScript} />
            <Stack.Screen name="BasicCore" component={BasicCore} />
            <Stack.Screen name="Course" component={CourseCore} />
            {/* <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} /> */}
          </Stack.Navigator>
        );
    }
}

export default Router_Core;