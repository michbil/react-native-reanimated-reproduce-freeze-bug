import React from 'react';
import {Button, Text, View, TouchableHighlight} from 'react-native';
import {useStore} from './store';
import Reanimated, {FadeInDown, FadeOutDown} from 'react-native-reanimated';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const LoginScreen = () => {
  const setShowWelcoming = useStore(state => state.setShowWelcoming);
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        padding: 16,
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        height: '100%',
      }}>
      <Button
        title="Login"
        onPress={() => {
          setShowWelcoming();
        }}></Button>
    </KeyboardAwareScrollView>
  );
};
export default LoginScreen;
