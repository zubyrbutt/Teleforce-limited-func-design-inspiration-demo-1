import React, {useEffect} from 'react';
import {Alert, StyleSheet, Text, useWindowDimensions} from 'react-native';
import Contacts, {Contact} from 'react-native-contacts';

import {useNavigation} from '@react-navigation/native';

import {Wrapper} from '../../../components';
import ConnectionLoader from '../../../components/ConnectionLoader';
import {setContacts} from '../../../global/contactsSlice';
import {useAppDispatch, useAppSelector} from '../../../global/hooks';
import {colors, fontSizes} from '../../../theme/theme';
import {openSettings, requestContactsPermission} from '../../../utils/helpers';

const ConnectingScreen = () => {
  const navigation = useNavigation<any>();
  const {width} = useWindowDimensions();

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
      <ConnectionLoader
        size={width * 0.5}
        dotRadius={width * 0.08}
        color={colors.black}
        key={width}
      />
      <Text
        style={{
          textAlign: 'center',
          position: 'absolute',
          left: 0,
          right: 0,
          color: colors.cancel,
          fontSize: fontSizes.subtitle1,
          fontWeight: '500',
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
