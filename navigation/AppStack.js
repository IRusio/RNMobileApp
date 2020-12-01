import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import PhotoModuleScreen from '../screens/PhotoModuleScreen';
import FileScreen from '../screens/FileScreen';
import WebScreen from '../screens/WebScreen';
import AccelerometerScreen from '../screens/AccelerometerScreen';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PhotoModule" component={PhotoModuleScreen} />
      <Stack.Screen name="FileModule" component={FileScreen} />
      <Stack.Screen name="WebModule" component={WebScreen} />
      <Stack.Screen name="AccelerometerModule" component={AccelerometerScreen} />
    </Stack.Navigator>
  );
}
