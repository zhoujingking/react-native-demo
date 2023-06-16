import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, ScrollView, Text, View } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AnimationMovement from './animation/move';
import AnimationRotation from './animation/rotate';

const FadeView = props => {
  const fadeValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeValue, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true
    }).start();
  }, [fadeValue]);

  return (
    <Animated.View style={{
      opacity: fadeValue
    }}>
      {
        props.children
      }
    </Animated.View>
  )
};

function App(props) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
      }}>
        <AnimationMovement>
        </AnimationMovement>
        <AnimationRotation style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'yellow'
        }}>
          <Text style={{
            backgroundColor: 'red'
          }}>GODKING</Text>
        </AnimationRotation>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
App.defaultProps = {};
App.propTypes = {};
export default App;