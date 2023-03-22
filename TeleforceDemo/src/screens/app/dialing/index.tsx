import React, {useLayoutEffect, useState} from 'react';
import {Alert, BackHandler} from 'react-native';

import CustomKeyboard from '../../../components/CustomKeyboard';
import {useAppSelector} from '../../../global/hooks';

const DialingScreen = () => {
  const [search, setSearch] = useState('');

  const {contacts} = useAppSelector(state => state.contacts);

  useLayoutEffect(() => {
    // back press handler and exit app
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const formattedPhoneNumber = (phoneNumber: string) =>
    phoneNumber.replace(/[^\d]/g, '');

  const filteredContacts = contacts.filter(contact => {
    const phoneNumber = contact.phoneNumbers[0]?.number;
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
};

export default DialingScreen;
