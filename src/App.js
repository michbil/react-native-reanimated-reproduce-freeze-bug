import React from 'react';
import {View, Button} from 'react-native';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import LoginNavigator from './LoginNavigator';
import WelcomingNavigator from './WelcomingNavigator';
import {useStore} from './store';
import LoginScreen from './LoginScreen';

const Navigator = (props: Props) => {
  const showWelcoming = useStore(state => state.showWelcoming);
  let route;
  if (showWelcoming) {
    route = <WelcomingNavigator />;
  } else {
    route = <LoginNavigator />;
  }

  console.log('RootNavigator:', showWelcoming);

  return <NavigationContainer>{route}</NavigationContainer>;
};

export default Navigator;
