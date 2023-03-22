import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';

import {Wrapper} from '../../../components';

const TestScreen = () => {
  const {width} = useWindowDimensions();
  return <Wrapper style={styles.container}></Wrapper>;
};

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
