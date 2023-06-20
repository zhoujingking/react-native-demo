import React, { forwardRef, useEffect, useRef } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Animated, { Easing, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withRepeat, withSequence, withSpring, withTiming } from 'react-native-reanimated';

import { GestureHandlerRootView, PanGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';

const TapCircle = props => {
  const pressed = useSharedValue(false);

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      console.log(event, ctx);
      pressed.value = true;
    },
    onEnd: (event, ctx) => {
      console.log(event, ctx);
      pressed.value = false;
    }
  });

  const boxAniStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? '#2A66F6' : 'purple',
      transform: [
        {
          scale: withSpring(pressed.value ? 1.5 : 1)
        }
      ]
    }
  })
  return (
    <TapGestureHandler onGestureEvent={eventHandler}>
      <Animated.View style={[styles.box, boxAniStyle]}>

      </Animated.View>
    </TapGestureHandler>
  )
}

const MoveCircle = props => {
  const initPosition = 0;
  const xOffset = useSharedValue(initPosition);
  const yOffset = useSharedValue(initPosition);

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      console.log(event, ctx);
    },
    onEnd: (event, ctx) => {
      console.log(event, ctx);
      xOffset.value = withSpring(initPosition);
      yOffset.value = withSpring(initPosition);
    },
    onActive: (event, ctx) => {
      xOffset.value = initPosition + event.translationX;
      yOffset.value = initPosition + event.translationY;
    }
  });

  const boxAniStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: 'purple',
      transform: [
        {
          translateX: xOffset.value
        },
        {
          translateY: yOffset.value
        }
      ]
    }
  })
  return (
    <PanGestureHandler onGestureEvent={eventHandler}>
      <Animated.View style={[styles.box, boxAniStyle]}>

      </Animated.View>
    </PanGestureHandler>
  )
}

function App(props) {

  return (
    <GestureHandlerRootView style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      rowGap: 20
    }}>
      <TapCircle />
      <MoveCircle />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
    borderRadius: 50,
  }
})

App.defaultProps = {};
App.propTypes = {};
export default App;