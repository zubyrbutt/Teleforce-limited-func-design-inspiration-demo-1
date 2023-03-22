import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {CallingIcon} from '../../assets/icons/svg';

interface Props {
  isDisabled?: boolean;
  backgroundColor?: string;
  onPress: () => void;
}

const BUTTON_SIZE = 75;
const ICON_SIZE = 40;

const CallingButton: React.FC<Props> = ({
  isDisabled = false,
  backgroundColor = '#E64530',
  onPress,
}) => {
  const containerStyles: any = [
    styles.container,
    {backgroundColor: backgroundColor, shadowColor: backgroundColor},
  ];

  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={onPress}
      activeOpacity={0.8}
      style={containerStyles}>
      <SvgXml
        fill="#fff"
        width={ICON_SIZE}
        height={ICON_SIZE}
        xml={CallingIcon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    // bottom: 30,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 5,
  },
});

export default CallingButton;
