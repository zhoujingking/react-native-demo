import React from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const WIDTH = Dimensions.get('window').width;

function App(props) {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView style={{
          backgroundColor: '#F4F5F6'
        }}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={{
            flexDirection: 'row'
          }}>
            <View style={{
              width: WIDTH,
              height: 500,
              backgroundColor: 'red'
            }}></View>
            <View style={{
              width: WIDTH,
              height: 500,
              backgroundColor: 'purple'
            }}></View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
App.defaultProps = {};
App.propTypes = {};
export default App;