import React, {useEffect, useState} from 'react';
import {Alert, PermissionsAndroid, Platform, StyleSheet} from 'react-native';
import Contacts, {Contact} from 'react-native-contacts';

import CustomKeyboard from '../../../components/CustomKeyboard';

const DialingScreen = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    requestContactsPermission();
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

const styles = StyleSheet.create({
  contactCon: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d9d9d9',
  },
  imgCon: {},
  placeholder: {
    width: 55,
    height: 55,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactDat: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  txt: {
    fontSize: 18,
  },
  name: {
    fontSize: 16,
  },
  phoneNumber: {
    color: '#888',
  },
});
