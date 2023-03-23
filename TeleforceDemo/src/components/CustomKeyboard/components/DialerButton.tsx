import React, { memo } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, fontSizes } from 'theme';

interface Props {
  number: string;
  letters: string;
  onPress: () => void;
  onLongPress: () => void;
}

const DialerButton = memo(({ number, letters, onPress, onLongPress }: Props) => {
  return (
    <Pressable style={styles.dialerButton} onPress={onPress} onLongPress={onLongPress}>
      <Text style={styles.dialerButtonText}>{number}</Text>
      <Text style={styles.dialerButtonLetters}>{letters}</Text>
    </Pressable>
  );
});
export default DialerButton;

const styles = StyleSheet.create({
  dialerButton: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderRadius: 5,
    borderWidth: 1,
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    margin: 5,
  },
  dialerButtonLetters: {
    color: colors.placeholder,
    fontSize: fontSizes.caption,
    fontWeight: 'bold',
  },
  dialerButtonText: {
    color: colors.black,
    fontSize: fontSizes.h5,
    fontWeight: 'bold',
    marginBottom: 1,
  },
});
