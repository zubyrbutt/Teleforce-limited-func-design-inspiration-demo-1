import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {Wrapper} from '../../../components';

const TestScreen = () => {
  return (
    <Wrapper
      style={{
        justifyContent: 'center',
      }}>
      <Text>tst</Text>
    </Wrapper>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
