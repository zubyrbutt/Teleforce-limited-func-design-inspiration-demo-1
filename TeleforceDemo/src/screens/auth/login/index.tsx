import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {LockIcon, UserIcon} from '../../../assets/icons/svg';
import {AuthButton, AuthInput, Wrapper} from '../../../components';

const LOGO = require('../../../assets/icons/Teo_logo.png');

const LoginScreen = () => {
  return (
    <Wrapper>
      <View style={styles.logo}>
        <Image
          source={LOGO}
          style={{
            width: 100,
            height: 100,
          }}
          resizeMode="contain"
        />
      </View>

      <AuthInput
        label="Username"
        icon={UserIcon}
        placeholder="Type your username"
      />

      <AuthInput
        label="Password"
        icon={LockIcon}
        placeholder="Type your password"
        secureTextEntry
      />

      <View
        style={{
          marginBottom: 40,
          alignSelf: 'flex-end',
        }}>
        <TouchableOpacity onPress={() => console.log('Forgot password')}>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <AuthButton onPress={() => console.log('submit')} />
    </Wrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    marginTop: 50,
    marginBottom: 70,
  },
  forgotText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
});
