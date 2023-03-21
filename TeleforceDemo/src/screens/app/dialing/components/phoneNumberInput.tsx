import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

interface Props {
  placeholder: string;
  autoFocus: boolean;
  value: string;
  onChangeText: (text: string) => void;
}

const phoneNumberInput = (props: Props) => {
  const {placeholder, autoFocus, value, onChangeText} = props;

  const onChange = (text: string) => {
    onChangeText(text);
  };

  return (
    <View
      style={{
        width: '90%',
        // position: 'absolute',
        // bottom: 0,
      }}>
      <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        autoFocus={true}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

export default phoneNumberInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ccc',
    padding: 10,
    width: '100%',
  },
});
