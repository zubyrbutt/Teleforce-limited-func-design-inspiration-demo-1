import React, {memo} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {SvgXml} from 'react-native-svg';

type AuthInputProps = {
  label: string;
  icon: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
};

const AuthInput: React.FC<AuthInputProps> = memo(
  ({
    label,
    icon,
    placeholder = '',
    value,
    onChangeText,
    secureTextEntry = false,
  }) => {
    const inputType = secureTextEntry ? 'password' : 'default';

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{label}</Text>

        <View style={styles.inputWrapper}>
          <SvgXml width={20} height={20} style={styles.icon} xml={icon} />
          <TextInput
            placeholder={placeholder}
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType={inputType === 'default' ? 'default' : 'numeric'}
          />
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 8,
  },
  icon: {
    marginLeft: 4,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
});

export default AuthInput;
