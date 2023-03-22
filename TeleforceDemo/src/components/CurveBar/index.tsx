import React from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {CurveBar} from '../../assets/icons/svg';
import CallingButton from '../CallingButton';

interface Props {
  isDisabled: boolean;
  onPress: () => void;
  backgroundColor: string;
}

const FooterBar = ({isDisabled, onPress, backgroundColor}: Props) => {
  const {width} = useWindowDimensions();
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
      }}>
      <View
        style={{
          alignSelf: 'center',
          top: 65,
        }}>
        <CallingButton
          isDisabled={isDisabled}
          onPress={onPress}
          backgroundColor={backgroundColor}
        />
      </View>

      <SvgXml
        style={{
          top: 10,
        }}
        width={width}
        height={100}
        xml={CurveBar}
      />
    </View>
  );
};

export default FooterBar;

const styles = StyleSheet.create({});
