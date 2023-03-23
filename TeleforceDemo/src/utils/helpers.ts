import { Linking, PermissionsAndroid, Platform } from 'react-native';

import NetInfo from '@react-native-community/netinfo';

export const requestContactsPermission = async () => {
  try {
    if (Platform.OS === 'ios') {
      return true;
    }

    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    });
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }
    return false;
  } catch (err) {
    console.warn(err);
    return false;
  }
};

// open settings
export const openSettings = async () => {
  try {
    const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_CONTACTS);
    if (!granted) {
      Linking.openSettings();
    }
  } catch (error) {
    console.warn(error);
  }
};

export const checkInternetConnection = async () => {
  const state = await NetInfo.fetch();
  return state.isConnected;
};
