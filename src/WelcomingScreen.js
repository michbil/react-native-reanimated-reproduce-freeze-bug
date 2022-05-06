import React from 'react';
import {View, Text} from 'react-native';
import Reanimated, {FadeInDown, FadeOutDown} from 'react-native-reanimated';

const WelcomingScreen = () => {
  return (
    <View>
      <Text>Welcoming screen</Text>
      <Reanimated.View
        entering={FadeInDown.duration(5000).springify().delay(300)}
        exiting={FadeOutDown.duration(3000)}>
        <Text>Slowly appearing</Text>
      </Reanimated.View>
    </View>
  );
};
export default WelcomingScreen;

/*  */
