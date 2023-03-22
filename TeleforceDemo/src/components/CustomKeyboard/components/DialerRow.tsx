import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';

import DialerButton from './DialerButton';

interface Props {
  buttons: any;
}
interface Button {
  number: string;
  letters: string;
  onPress: () => void;
  onLongPress: () => void;
}

const DialerRow = memo(({buttons}: Props) => {
  return (
    <View style={styles.dialerRow}>
      {buttons.map(({number, letters, onPress, onLongPress}: Button) => (
        <DialerButton
          key={number}
          number={number}
          letters={letters}
          onPress={onPress}
          onLongPress={onLongPress}
        />
      ))}
    </View>
  );
});

export default DialerRow;

const styles = StyleSheet.create({
  dialerRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
});
