import React, {useEffect, useState} from 'react';
import {
  Alert,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Contacts from 'react-native-contacts';

import {Wrapper} from '../../../components';
import CustomKeyboard from '../../../components/CustomKeyboard';

const DialingScreen = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: 'Please accept bare mortal',
      }).then(() => {
        loadContacts();
      });
    } else {
      loadContacts();
    }
  }, []);

  const loadContacts = () => {
    Contacts.getAll()
      .then(contacts => {
        contacts.sort((a, b) =>
          a.givenName.toLowerCase() > b.givenName.toLowerCase() ? 1 : -1,
        );
        setContacts(contacts);
      })
      .catch(e => {
        Alert.alert('Permission to access contacts was denied');
        console.warn('Permission to access contacts was denied');
      });
  };

  const keyExtractor = (item, idx) => {
    return item?.recordID?.toString() || idx.toString();
  };
  const renderItem = ({item, index}) => {
    return <Contact contact={item} />;
  };

  // search by phone number and return the contact object with the phone number and the name
  const filteredContacts = contacts.filter(c => {
    // search by phone number. phone number has to be in the format of
    // denmark: +45 12345678
    // usa: +1 1234567890
    // pk: +92 1234567890

    const phoneNumber = c.phoneNumbers[0]?.number;
    if (phoneNumber) {
      const formattedPhoneNumber = phoneNumber
        .replace(/ /g, '')
        .replace('+', '')
        .replace('(', '')
        .replace(')', '')
        .replace('-', '');
      return formattedPhoneNumber.includes(search);
    }
  });

  console.log('filteredContacts', filteredContacts);

  return (
    <Wrapper>
      <CustomKeyboard
        // keyExtractor={keyExtractor}
        // renderItem={renderItem}
        data={search.length > 0 ? filteredContacts : []}
        value={search}
        setSearch={setSearch}
      />
    </Wrapper>
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

const Contact = ({contact}: any) => {
  return (
    <View style={styles.contactCon}>
      <View style={styles.imgCon}>
        <View style={styles.placeholder}>
          <Text style={styles.txt}>{contact?.givenName[0]}</Text>
        </View>
      </View>
      <View style={styles.contactDat}>
        <Text style={styles.name}>
          {contact?.givenName} {contact?.middleName && contact.middleName + ' '}
          {contact?.familyName}
        </Text>
        <Text style={styles.phoneNumber}>
          {contact?.phoneNumbers[0]?.number}
        </Text>
      </View>
    </View>
  );
};
