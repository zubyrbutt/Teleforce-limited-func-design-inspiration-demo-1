import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {CallingButton, Wrapper} from '../../../components';
import {Avatar} from './components';
import CallingLoader from './components/callingLoader';
import Timer from './components/timer';

interface Props {
  route: {
    params: {
      name: string;
      number: string;
    };
  };
}

const CallingScreen: React.FC<Props> = ({route}) => {
  const {name = 'Un Known', number = 'Un Known'} = route.params;
  const [isCalling, setIsCalling] = useState(false);
  const navigation = useNavigation<any>();

  const handleCallingButton = () => {
    navigation.navigate('Dialing');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCalling(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper>
      <View style={styles.spacer} />
      <Avatar />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.phone}>{number}</Text>
        {isCalling ? <Timer /> : <CallingLoader />}
      </View>
      <CallingButton onPress={handleCallingButton} />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  spacer: {
    marginTop: 30,
  },
  detailsContainer: {
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
    fontSize: 32,
    fontWeight: '500',
    color: '#333',
    marginVertical: 20,
  },
});

export default CallingScreen;
