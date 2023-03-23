import React, { useEffect, useState } from 'react'
import { Alert, BackHandler } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import CustomKeyboard from '../../../components/CustomKeyboard'
import { useAppSelector } from '../../../global/hooks'

const formattedPhoneNumber = (phoneNumber: string) =>
  phoneNumber.replace(/[^\d]/g, '');

const DialingScreen = React.memo(() => {
  const [search, setSearch] = useState('');

  const {contacts} = useAppSelector(state => state.contacts);

  const navigation = useNavigation();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (navigation.isFocused()) {
          Alert.alert('Hold on!', 'Are you sure you want to exit the app?', [
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'cancel',
            },
            {text: 'YES', onPress: BackHandler.exitApp},
          ]);

          return true;
        }
      },
    );

    return () => backHandler.remove();
  }, []);

  const filteredContacts = contacts.filter(contact => {
    const phoneNumber = contact.phoneNumbers?.[0]?.number;
    if (phoneNumber) {
      return formattedPhoneNumber(phoneNumber).includes(
        formattedPhoneNumber(search),
      );
    }
    return false;
  });

  return (
    <CustomKeyboard
      data={search.length > 0 ? filteredContacts : []}
      value={search}
      setSearch={setSearch}
    />
  );
});

export default DialingScreen;
