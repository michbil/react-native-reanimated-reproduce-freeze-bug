import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

const DefaultHeader = {
  headerTransparent: true,
  animationEnabled: false,
  title: '',
};

export default () => {
  console.log('Render login navigator');
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={DefaultHeader}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};
