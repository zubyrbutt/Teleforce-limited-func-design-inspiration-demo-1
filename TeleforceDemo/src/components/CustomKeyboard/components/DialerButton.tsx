import React, {memo} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

interface Props {
  number: string;
  letters: string;
  onPress: () => void;
  onLongPress: () => void;
}

const DialerButton = memo(({number, letters, onPress, onLongPress}: Props) => {
  return (
    <Pressable
      style={styles.dialerButton}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Text style={styles.dialerButtonText}>{number}</Text>
      <Text style={styles.dialerButtonLetters}>{letters}</Text>
    </Pressable>
  );
});
export default DialerButton;

const styles = StyleSheet.create({
  dialerButton: {
    flex: 1,
    height: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  dialerButtonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 1,
  },
  dialerButtonLetters: {
    fontSize: 12,
    color: '#9f9f9f',
    fontWeight: 'bold',
  },
});
