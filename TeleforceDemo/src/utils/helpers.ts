import {Alert, Linking, PermissionsAndroid, Platform} from 'react-native';
import Contacts from 'react-native-contacts';

import NetInfo from '@react-native-community/netinfo';

export const requestContactsPermission = async () => {
  try {
    if (Platform.OS === 'ios') {
      return true;
    }

    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }
    Alert.alert(
      'Permission denied',
      'You have denied permission to access contacts.',
    );
    return false;
  } catch (err) {
    console.warn(err);
    return false;
  }
};

// open settings
export const openSettings = () => {
  Contacts.checkPermission().then(response => {
    if (response === 'denied') {
      Linking.openSettings();
    }
  });
};

export const checkInternetConnection = async () => {
  const state = await NetInfo.fetch();
  return state.isConnected;
};
