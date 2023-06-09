import { CallDialingIcon, CurveBar } from 'assets/icons/svg';
import React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import CallingButton from '../CallingButton';

interface Props {
  isDisabled: boolean;
  onPress: () => void;
  backgroundColor: string;
}

const FooterBar = ({ isDisabled, onPress, backgroundColor }: Props) => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <SvgXml
        style={{
          top: 10,
        }}
        width={width}
        height={100}
        xml={CurveBar}
      />
      <View style={styles.button}>
        <CallingButton
          isDisabled={isDisabled}
          onPress={onPress}
          backgroundColor={backgroundColor}
          icon={CallDialingIcon}
        />
      </View>
    </View>
  );
};

export default FooterBar;

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    bottom: 30,
    position: 'absolute',
  },
  container: {
    bottom: 0,
    position: 'absolute',
  },
});
