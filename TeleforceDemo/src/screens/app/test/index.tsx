import React from 'react';
import {StyleSheet, View} from 'react-native';

import ConnectionLoader from '../../../components/ConnectionLoader';
import FooterBar from '../../../components/CurveBar';

const TestScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: '#ccc',
      }}>
      <FooterBar />
    </View>
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
