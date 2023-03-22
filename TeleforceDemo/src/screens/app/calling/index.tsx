import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {CallingButton, Wrapper} from '../../../components';
import {Avatar} from './components';
import Timer from './components/timer';

const CallingScreen = (props: any) => {
  const {name, number} = props.route.params;

  const [isCalling, setIsCalling] = React.useState(false);

  const navigation = useNavigation<any>();

  const handleCallingButton = () => {
    navigation.navigate('Dialing');
  };

  // start timer after 5 seconds

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCalling(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // calling dots animation

  const [dots, setDots] = React.useState('.');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (dots === '...') {
        setDots('.');
      } else {
        setDots(dots + '.');
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [dots]);

  return (
    <Wrapper>
      <View style={styles.spacer} />
      <Avatar />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name || 'Un Known'}</Text>
        <Text style={styles.phone}>{number || 'Un Known'}</Text>

        {isCalling ? (
          <Timer />
        ) : (
          <Text style={styles.calling}>Calling{dots}</Text>
        )}
      </View>
      <CallingButton onPress={handleCallingButton} />
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
