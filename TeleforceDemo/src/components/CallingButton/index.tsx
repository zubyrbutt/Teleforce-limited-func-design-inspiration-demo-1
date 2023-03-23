import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { colors } from 'theme';

interface Props {
  isDisabled?: boolean;
  backgroundColor?: string;
  onPress: () => void;
  icon: any;
}

const BUTTON_SIZE = 75;
const ICON_SIZE = 40;

const CallingButton: React.FC<Props> = ({
  isDisabled = false,
  backgroundColor = colors.cancel,
  onPress,
  icon,
}) => {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.container,
        {
          backgroundColor,
          shadowColor: backgroundColor,
        },
      ]}
    >
      <SvgXml fill={colors.white} width={ICON_SIZE} height={ICON_SIZE} xml={icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: BUTTON_SIZE / 2,
    elevation: 5,
    height: BUTTON_SIZE,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    width: BUTTON_SIZE,
  },
});

export default CallingButton;
