import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import PropTypes from 'prop-types';

function AnimationRotation(props) {
  console.log('update')
  const spinValue = useRef(new Animated.Value(0)).current;
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })
  useEffect(() => {
    console.log('init')
    Animated.loop(Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true
    })).start();
  }, [spinValue]);
  
  return (
    <Animated.View style={{
      ...props.style,
      transform: [{
        rotate: spin,
      }]
    }}>
      {props.children}
    </Animated.View>
  );
}
AnimationRotation.defaultProps = {};
AnimationRotation.propTypes = {};
export default AnimationRotation;