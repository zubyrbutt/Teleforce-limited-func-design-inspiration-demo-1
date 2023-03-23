import { Wrapper } from 'components';
import ConnectionLoader from 'components/ConnectionLoader';
import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { colors, fontSizes } from 'theme';

const TestScreen = () => {
  const { width } = useWindowDimensions();
  return (
    <Wrapper style={styles.container}>
      <View>
        <ConnectionLoader
          size={width * 0.4}
          dotRadius={width * 0.08}
          color={colors.black}
          key={width}
        />
        <Text style={styles.text}>Connecting</Text>
      </View>
    </Wrapper>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: colors.cancel,
    fontSize: fontSizes.subtitle1,
    fontWeight: '500',
    left: 0,
    position: 'absolute',
    right: 0,
    textAlign: 'center',
    top: '48%',
  },
});
