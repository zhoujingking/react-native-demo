import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { NativeBaseProvider, Box, Text } from 'native-base';

function App(props) {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="blue.100" justifyContent={'center'} alignItems={'center'}>
        <Text fontSize="xs">GODKING</Text>
      </Box>
    </NativeBaseProvider>
  );
}
App.defaultProps={};
App.propTypes={};
export default App;