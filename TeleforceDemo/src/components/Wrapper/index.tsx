import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SafeAreaViewProps } from 'react-native-safe-area-context';
import { colors } from 'theme';

const Wrapper = (props: SafeAreaViewProps) => {
  const { children, style } = props;
  return <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>;
};

export default Wrapper;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
    padding: 40,
    // justifyContent: 'center',
  },
});
