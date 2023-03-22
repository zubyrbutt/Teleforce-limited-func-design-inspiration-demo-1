import React, {useEffect} from 'react';
import {ActivityIndicator, Alert, StyleSheet, Text} from 'react-native';
import Contacts, {Contact} from 'react-native-contacts';

import {useNavigation} from '@react-navigation/native';

import {Wrapper} from '../../../components';
import {setContacts} from '../../../global/contactsSlice';
import {useAppDispatch, useAppSelector} from '../../../global/hooks';
import {openSettings, requestContactsPermission} from '../../../utils/helpers';

const ConnectingScreen = () => {
  const navigation = useNavigation<any>();

  const dispatch = useAppDispatch();
  const {isOnline} = useAppSelector(state => state.connection);

  useEffect(() => {
    handleGetContacts();
  }, []);

  const handleGetContacts = () => {
    requestContactsPermission()
      .then(() => {
        loadContacts();
      })
      .catch(error => {
        console.log(error);
      });
  };

  // open permission settings
  const loadContacts = async () => {
    try {
      const fetchedContacts = await Contacts.getAll();
      console.log('fetchedContacts', fetchedContacts);
      fetchedContacts.sort((a: Contact, b: Contact) =>
        a.givenName.localeCompare(b.givenName),
      );
      dispatch(setContacts({contacts: fetchedContacts}));
      navigation.navigate('Dialing');
    } catch (e: any) {
      if (e.message === 'denied') {
        Alert.alert(
          'Permission Denied!',
          'You need to give access to your contacts.',
          [
            {
              text: 'Cancel',
              onPress: () => navigation.navigate('Dialing'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => openSettings()},
          ],
        );
      }
    }
  };

  return (
    <Wrapper style={styles.container}>
      <ActivityIndicator size="large" />
      <Text
        style={{
          color: 'red',
        }}>
        {isOnline ? 'connecting' : 'lost connection'}
      </Text>
    </Wrapper>
  );
};

export default ConnectingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
