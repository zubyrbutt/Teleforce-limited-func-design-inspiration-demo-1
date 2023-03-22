import {Formik} from 'formik';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {LockIcon, UserIcon} from '../../../assets/icons/svg';
import {AuthButton, AuthInput, Wrapper} from '../../../components';
import {useAppDispatch} from '../../../global/hooks';
import {login} from '../../../global/userSlice';
import {setItem} from '../../../utils/storage';
import {loginValidationSchema} from '../../../utils/validationSchema';

const LOGO = require('../../../assets/icons/Teo_logo.png');

const CREDENTIALS = {
  username: 'admin',
  password: 'admin',
};

const LoginScreen = () => {
  const dispatch = useAppDispatch();

  const handleLogin = (values: {username: string; password: string}) => {
    const {username, password} = values;
    console.log('values', values);

    if (
      username === CREDENTIALS.username &&
      password === CREDENTIALS.password
    ) {
      // navigation.navigate('Home');
      dispatch(login({username, password, isLoggedIn: true}));
      setItem('user', {username, password, isLoggedIn: true});
    }
  };

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
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <AuthInput
              label="Username"
              icon={UserIcon}
              placeholder="Type your username"
              value={values.username}
              onChangeText={handleChange('username')}
              // onBlur={handleBlur('username')}
              error={errors.username}
            />

            <AuthInput
              label="Password"
              icon={LockIcon}
              placeholder="Type your password"
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry
              // onBlur={handleBlur('password')}
              error={errors.password}
            />

            <View
              style={{
                marginBottom: 40,
                alignSelf: 'center',
                width: '85%',
                alignItems: 'flex-end',
              }}>
              <TouchableOpacity onPress={() => console.log('Forgot password')}>
                <Text style={styles.forgotText}>Forgot password?</Text>
              </TouchableOpacity>
            </View>

            <AuthButton
              title="LOGIN"
              onPress={handleSubmit}
              isDisable={false}
            />
          </>
        )}
      </Formik>
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
