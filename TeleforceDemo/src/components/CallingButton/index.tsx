import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {CallingIcon} from '../../assets/icons/svg';

interface Props {
  color?: string;
  icon?: string;
  onPress: () => void;
}

const CallingButton = ({color, icon, onPress}: Props) => {
  const BGColor = color ? color : '#E64530';
  // 3FAE6C

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.container,
        {backgroundColor: BGColor, shadowColor: BGColor},
      ]}>
      <SvgXml fill={'#fff'} width={40} height={40} xml={CallingIcon} />
    </TouchableOpacity>
  );
};

export default CallingButton;

const styles = StyleSheet.create({
  container: {
    width: 75,
    height: 75,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 5,
  },
});
