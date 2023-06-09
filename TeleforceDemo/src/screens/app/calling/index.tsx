import { CallingIcon } from 'assets/icons/svg';
import { CallingButton, Wrapper } from 'components';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Avatar } from './components';
import CallingLoader from './components/callingLoader';
import Timer from './components/timer';
import { styles } from './styles';

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

export default CallingScreen;
