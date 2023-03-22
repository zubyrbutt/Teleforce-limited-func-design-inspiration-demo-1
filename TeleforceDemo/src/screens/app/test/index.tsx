import React from 'react';
import {StyleSheet} from 'react-native';

import {Wrapper} from '../../../components';
import ConnectionLoader from '../../../components/ConnectionLoader';

const TestScreen = () => {
  return (
    <Wrapper
      style={{
        justifyContent: 'center',
      }}>
       <ConnectionLoader />
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
