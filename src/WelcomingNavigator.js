import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomingScreen from './WelcomingScreen';

const Stack = createStackNavigator();

const DefaultHeader = {
  headerTransparent: true,
  animationEnabled: false,
  title: '',
};

export default () => {
  console.log('Render welcoming navigator');
  return (
    <Stack.Navigator
      initialRouteName="WelcomingContainer"
      screenOptions={DefaultHeader}>
      <Stack.Screen name="WelcomingContainer" component={WelcomingScreen} />
    </Stack.Navigator>
  );
};
