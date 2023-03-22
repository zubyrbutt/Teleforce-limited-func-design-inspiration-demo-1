import React, {useLayoutEffect, useState} from 'react';
import {Alert, BackHandler, PermissionsAndroid, Platform} from 'react-native';
import Contacts, {Contact} from 'react-native-contacts';

import CustomKeyboard from '../../../components/CustomKeyboard';

const DialingScreen = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [search, setSearch] = useState('');

  useLayoutEffect(() => {
    requestContactsPermission();

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

  const requestContactsPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
            buttonPositive: 'Please accept bare mortal',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          loadContacts();
        } else {
          Alert.alert('Permission to access contacts was denied');
          console.warn('Permission to access contacts was denied');
        }
      } else {
        loadContacts();
      }
    } catch (e) {
      console.warn('Error while requesting contacts permission', e);
    }
  };

  const loadContacts = async () => {
    try {
      const fetchedContacts = await Contacts.getAll();
      fetchedContacts.sort((a: Contact, b: Contact) =>
        a.givenName.localeCompare(b.givenName),
      );
      setContacts(fetchedContacts);
    } catch (e) {
      Alert.alert('Permission to access contacts was denied');
      console.warn('Permission to access contacts was denied');
    }
  };

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

  console.log('filteredContacts', filteredContacts);

  return (
    <CustomKeyboard
      data={search.length > 0 ? filteredContacts : []}
      value={search}
      setSearch={setSearch}
    />
  );
};

export default DialingScreen;
