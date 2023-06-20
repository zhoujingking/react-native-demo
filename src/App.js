import React, { forwardRef, useEffect, useRef } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withSequence, withSpring, withTiming } from 'react-native-reanimated';

import { Circle, Svg } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

function CircleTest() {
  const sv = useSharedValue('5%');

  useEffect(() => {
    sv.value = withRepeat(withTiming('50%', {
      duration: 5000
    }), -1, true);
  }, []);

  return (
    <Svg height="200" width="200" style={{backgroundColor: 'cyan'}}>
      <AnimatedCircle cx="50%" cy="50%" fill="purple" r={sv} />
    </Svg>
  );
}

function App(props) {
  const angle = useSharedValue(0);
  const offset = useSharedValue(0);
  const sprinOffset = useSharedValue(-100);
  const rotateAniStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${angle.value}deg`
        }
      ]
    }
  });

  const moveAniStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: offset.value
        }
      ]
    }
  });

  const sprinAniStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: sprinOffset.value
        }
      ]
    }
  })

  useEffect(() => {
    angle.value = withRepeat(withTiming(720, {
      duration: 5000,
      easing: Easing.circle
    }), -1, false);

    offset.value = withRepeat(withSequence(
      withTiming(-100, {
        duration: 1000
      }),
      withTiming(100, {
        duration: 1000
      }),
    ), -1, true);

    sprinOffset.value = withRepeat(
      withSpring(100)
      , -1, true)
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 20
      }}>
        <Animated.View style={[styles.box, rotateAniStyle]}></Animated.View>
        <Animated.View style={[styles.box, moveAniStyle]}></Animated.View>
        <Animated.View style={[styles.box, sprinAniStyle]}></Animated.View>
        <CircleTest />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
    backgroundColor: '#2A66F6'
  }
})

App.defaultProps = {};
App.propTypes = {};
export default App;