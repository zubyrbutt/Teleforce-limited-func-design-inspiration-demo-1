import { CallingIcon } from 'assets/icons/svg';
import { CallingButton, Wrapper } from 'components';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from 'theme';

import { useNavigation } from '@react-navigation/native';

import { Avatar } from './components';
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

const CallingScreen: React.FC<Props> = ({ route }) => {
  const { name = 'Unknown', number = 'Unknown' } = route.params;
  const [isCalling, setIsCalling] = useState(false);
  const navigation = useNavigation<any>();

  const handleCallingButton = () => {
    navigation.navigate('Dialing');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCalling(true);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
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
      <View style={styles.iconContainer}>
        <CallingButton icon={CallingIcon} onPress={handleCallingButton} />
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  iconContainer: {
    bottom: 40,
    position: 'absolute',
  },
  name: {
    color: colors.text,
    fontSize: 20,
    fontWeight: 'bold',
  },
  phone: {
    color: colors.text,
    fontSize: 32,
    fontWeight: '500',
    marginVertical: 20,
  },
  spacer: {
    marginTop: 30,
  },
});

export default CallingScreen;
