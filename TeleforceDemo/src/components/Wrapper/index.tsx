import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {SafeAreaViewProps} from 'react-native-safe-area-context';

const Wrapper = (props: SafeAreaViewProps) => {
  const {children, style} = props;
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

export default Wrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 40,
    // justifyContent: 'center',
  },
});
