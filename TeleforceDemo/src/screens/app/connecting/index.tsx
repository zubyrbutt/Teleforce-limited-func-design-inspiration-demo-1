import { Wrapper } from 'components'
import ConnectionLoader from 'components/ConnectionLoader'
import { setContacts } from 'global/contactsSlice'
import { useAppDispatch, useAppSelector } from 'global/hooks'
import React, { useEffect } from 'react'
import { StyleSheet, Text, useWindowDimensions } from 'react-native'
import Contacts, { Contact } from 'react-native-contacts'
import { colors, fontSizes } from 'theme'
import { requestContactsPermission } from 'utils/helpers'

import { useNavigation } from '@react-navigation/native'

const ConnectingScreen = () => {
  const navigation = useNavigation<any>();
  const {width} = useWindowDimensions();

  const dispatch = useAppDispatch();
  const {isOnline} = useAppSelector(state => state.connection);

  useEffect(() => {
    loadContacts();
  }, []);

  // open permission settings
  const loadContacts = async () => {
    try {
      const granted = await requestContactsPermission();
      if (granted) {
        const fetchedContacts = await Contacts.getAll();
        console.log('fetchedContacts', fetchedContacts);
        fetchedContacts.sort((a: Contact, b: Contact) =>
          a.givenName.localeCompare(b.givenName),
        );
        dispatch(setContacts({contacts: fetchedContacts}));
        navigation.navigate('Dialing');
      } else {
        navigation.navigate('Dialing');
      }
    } catch (e: any) {
      console.log(e);
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
