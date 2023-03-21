import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {CallingIcon} from '../../assets/icons/svg';

interface Props {
  color?: string;
  icon?: string;
}

const CallingButton = ({color, icon}: Props) => {
  const BGColor = color ? color : '#E64530';
  // 3FAE6C

  return (
    <TouchableOpacity
      onPress={() => console.log('Calling')}
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
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 5,
  },
});
