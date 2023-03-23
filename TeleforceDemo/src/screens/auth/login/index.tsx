import { LockIcon, UserIcon } from 'assets/icons/svg';
import { Formik } from 'formik';
import { useAppDispatch, useAppSelector } from 'global/hooks';
import { login } from 'global/userSlice';
import { useNotification } from 'hooks/useNotification';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import { colors, fontSizes } from 'theme';
import { onSendNotification } from 'utils/_firebase';
import { loginValidationSchema } from 'utils/validationSchema';

import { AuthButton, AuthInput } from '@components';

const LOGO = require('assets/icons/Teo_logo.png');
const LOGO_SIZE = 100;

const CREDENTIALS = {
  username: 'admin',
  password: 'admin',
};

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const deviceToken = useAppSelector((state) => state.user.token);
  const { displayNotification } = useNotification();

  const handleLogin = (values: { username: string; password: string }) => {
    const { username, password } = values;

    if (username === CREDENTIALS.username && password === CREDENTIALS.password) {
      dispatch(login({ username, password, isLoggedIn: true }));
    } else {
      // displayNotification is a local notification function
      // displayNotification(
      //   'Invalid credentials',
      //   'Please check your username and password. and try again',
      // );
      sendNotification();
    }
  };

  const sendNotification = async () => {
    onSendNotification({
      to: deviceToken.token,
      notification: {
        title: 'Invalid credentials',
        body: 'Please check your username and password. and try again',
        sound: 'default',
        priority: 'high',
      },
    });
  };

  return (
    <KeyboardAvoidingScrollView
      contentContainerStyle={{
        alignItems: 'center',
      }}
    >
      <View style={styles.logo}>
        <Image
          source={LOGO}
          style={{
            width: LOGO_SIZE,
            height: LOGO_SIZE,
          }}
          resizeMode="contain"
        />
      </View>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ username: '', password: '' }}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <AuthInput
              label="Username"
              icon={UserIcon}
              placeholder="Type your username"
              value={values.username}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              error={touched.username && errors.username}
            />

            <AuthInput
              label="Password"
              icon={LockIcon}
              placeholder="Type your password"
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry
              onBlur={handleBlur('password')}
              error={touched.password && errors.password}
            />

            <View style={styles.forgotContainer}>
              <TouchableOpacity
                onPress={() => {
                  console.log('Forgot password');
                }}
              >
                <Text style={styles.forgotText}>Forgot password?</Text>
              </TouchableOpacity>
            </View>

            <AuthButton title="LOGIN" onPress={handleSubmit} isDisable={false} />
          </>
        )}
      </Formik>
    </KeyboardAvoidingScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
    // paddingTop: 40,
  },
  forgotContainer: {
    alignItems: 'flex-end',
    alignSelf: 'center',
    marginBottom: 30,
    width: '85%',
  },
  forgotText: {
    color: colors.text,
    fontSize: fontSizes.button,
    fontWeight: '500',
  },
  logo: {
    marginBottom: 70,
    marginTop: 30,
  },
});
