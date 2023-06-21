import React from 'react';
import { PropsWithChildren } from 'react';
import { Text, View, ViewProps, ViewStyle, StyleProp } from 'react-native';

export type BoxProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>,
  title: String
}>

function Box(props: BoxProps) {
  return (
    <View style={props.style}>
      <Text>{props.title}</Text>
      {props.children}
    </View>
  );
}
export default Box;