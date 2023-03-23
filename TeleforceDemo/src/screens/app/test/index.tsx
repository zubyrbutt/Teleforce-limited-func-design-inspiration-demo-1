import { Wrapper } from 'components'
import ConnectionLoader from 'components/ConnectionLoader'
import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { colors, fontSizes } from 'theme'

const TestScreen = () => {
  const {width} = useWindowDimensions();
  return (
    <Wrapper style={styles.container}>
      <View
        style={
          {
            // backgroundColor: colors.green,
          }
        }>
        <ConnectionLoader
          size={width * 0.4}
          dotRadius={width * 0.08}
          color={colors.black}
          key={width}
        />
        <Text
          style={{
            // text center in parent
            textAlign: 'center',
            position: 'absolute',
            top: '48%',
            left: 0,
            right: 0,
            color: colors.cancel,
            fontSize: fontSizes.subtitle1,
            fontWeight: '500',
          }}>
          Connecting
        </Text>
      </View>
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
