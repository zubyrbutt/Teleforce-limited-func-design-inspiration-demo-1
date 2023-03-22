import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Wrapper} from '../../../components';

const ConnectingScreen = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Dialing');
    }, 3000);
  }, []);

  return (
    <Wrapper>
      <ActivityIndicator size="large" />
      <Text>Connecting to the server...</Text>
    </Wrapper>
  );
};

export default ConnectingScreen;

const styles = StyleSheet.create({});
