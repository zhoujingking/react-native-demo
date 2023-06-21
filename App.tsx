import React from 'react';
import { Button, SafeAreaView, StyleSheet, ViewStyle } from 'react-native';
import Box from './src/core/Box';


function App() {
  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      rowGap: 20
    }}>
      <Box style={{
        padding: 20,
        backgroundColor: 'cyan'
      }}
        title="GODKING">
          <Button title="btn" color={'red'}></Button>
      </Box>
    </SafeAreaView>
  );
}
export default App;