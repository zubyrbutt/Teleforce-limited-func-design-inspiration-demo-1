import React, { Fragment, memo } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { colors, fontSizes } from 'theme';

interface AuthInputProps {
  label: string;
  icon: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  error?: string | undefined | boolean;
  onBlur: (e: any) => void;
}

const AuthInput: React.FC<AuthInputProps> = memo(
  ({
    label,
    icon,
    placeholder = '',
    value,
    onChangeText,
    secureTextEntry = false,
    error,
    onBlur,
  }) => {
    return (
      <Fragment>
        <View style={styles.container}>
          <Text style={styles.title}>{label}</Text>

          <View style={styles.inputWrapper}>
            <SvgXml width={20} height={20} style={styles.icon} xml={icon} />
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={colors.placeholder}
              style={styles.input}
              value={value}
              onChangeText={onChangeText}
              secureTextEntry={secureTextEntry}
              autoCapitalize="none"
              autoCorrect={false}
              onBlur={onBlur}
            />
          </View>
        </View>
        <View style={styles.error}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      </Fragment>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    marginVertical: 10,
    width: '85%',
  },
  error: {
    bottom: 5,
    width: '85%',
  },
  errorText: {
    color: colors.error,
    fontSize: fontSizes.caption,
    fontWeight: '500',
    textAlign: 'left',
  },
  icon: {
    marginLeft: 4,
  },
  input: {
    color: colors.text,
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  inputWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 8,
    marginTop: 4,
  },
  title: {
    color: colors.text,
    fontSize: fontSizes.subtitle2,
    fontWeight: '500',
  },
});

export default AuthInput;
