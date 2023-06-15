import React from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const WIDTH = Dimensions.get('window').width;

function App(props) {
  const bgs = ['blue', 'red', 'purple', 'yellow', 'green', 'cyan', 'grey']
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          rowGap: 10,
          columnGap: 10,
          padding: 4,
          backgroundColor: '#F4F5F6'
        }}>
          {
            bgs.map((color, index) => (
              <View key={index} style={{
                width: 150,
                height: 50,
                backgroundColor: color,
              }}>
                <Text style={{
                  color: 'black'
                }}>{color}</Text>
              </View>
            ))
          }
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
App.defaultProps = {};
App.propTypes = {};
export default App;