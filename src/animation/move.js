import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import PropTypes from 'prop-types';

function AnimationMovement(props) {
  const moveAniValue = useRef(new Animated.Value(0)).current;
  const rotateAniValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(moveAniValue, {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(moveAniValue, {
            toValue: 0,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(rotateAniValue, {
          toValue: 1,
          duration: 6000,
          easing: Easing.linear,
          useNativeDriver: true
        })
      ])
      
    ).start();
  }, [moveAniValue]);

  const xCoord = moveAniValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300]
  });
  const yCoord = moveAniValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300]
  });

  const degree = rotateAniValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  return (
    <Animated.View style={{
      width: 50,
      height: 50,
      transform: [
        {
          translateX: xCoord,
        },
        {
          translateY: yCoord
        },
        {
          rotate: degree
        }
      ]
    }}>
      <View style={{
        width: 50,
        height: 50,
        backgroundColor: 'purple'
      }}></View>
    </Animated.View>
  );
}
AnimationMovement.defaultProps={};
AnimationMovement.propTypes={};
export default AnimationMovement;