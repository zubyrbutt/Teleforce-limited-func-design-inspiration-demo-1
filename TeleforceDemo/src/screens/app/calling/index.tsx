import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {CallingButton, Wrapper} from '../../../components';
import {Avatar} from './components';

const CallingScreen = () => {
  return (
    <Wrapper>
      <View style={styles.spacer} />
      <Avatar />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>Denmark</Text>
        <Text style={styles.phone}>(+45) 123 456 789</Text>
        <Text style={styles.calling}>Calling...</Text>
      </View>
      <CallingButton />
    </Wrapper>
  );
};

export default CallingScreen;

const styles = StyleSheet.create({
  spacer: {
    marginTop: 30,
  },

  detailsContainer: {
    // flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  phone: {
    fontSize: 40,
    fontWeight: '500',
    color: '#333',
    marginVertical: 20,
  },
  calling: {
    fontSize: 20,
    fontWeight: '500',
    color: '#4d4d4d',
  },
});
