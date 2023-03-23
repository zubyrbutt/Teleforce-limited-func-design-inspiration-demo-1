import messaging from '@react-native-firebase/messaging';

import { useNotification } from '../hooks/useNotification';
import { getData, storeData } from './_storage';

const SERVER_KEY =
  'AAAAL6Nq-2Q:APA91bErt2bcHdPjt99j4AobR3LVHkdeHMjCfnZ7a5-B4BWshzr7OUEMGsnuyALwFH_npVieqN7mcwVEVVbw9eeYef96zsKSaIz8UfxfoQ4IBsX880hDwxEDDj8y7l1b8MjMI1O7VIam';

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  if (enabled) {
    // Do something here
  }
};

export const getFCMToken = async () => {
  let fcmToken = await getData('fcmToken');
  if (!fcmToken) {
    const token = await messaging().getToken();
    if (token) {
      fcmToken = token;
      await storeData('fcmToken', token);
    }
  }
  return fcmToken;
};

export const onNotificationOpenedFromBackground = async (remoteMessage: any) => {
  console.log(
    'Notification caused app to open from background state:',
    remoteMessage?.notification,
  );
  // Alert.alert("background", JSON.stringify(remoteMessage.notification));
};

export const onNotificationOpenedFromQuitState = async (remoteMessage: any) => {
  console.log('Notification caused app to open from quit state:', remoteMessage?.notification);
  // Alert.alert("quit state", JSON.stringify(remoteMessage.notification));
};

export const displayNewFCMMessage = async (remoteMessage: any) => {
  console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
  const { notification } = remoteMessage;
  useNotification().displayNotification(notification?.title!, notification?.body!);
};

export const notificationListener = async () => {
  const enabled = await messaging().hasPermission();
  if (enabled) {
    getFCMToken();
  } else {
    requestUserPermission();
  }

  messaging().onNotificationOpenedApp(onNotificationOpenedFromBackground);

  messaging().getInitialNotification().then(onNotificationOpenedFromQuitState);

  messaging().onMessage(displayNewFCMMessage);
};

export const onSendNotification = async (message: any) => {
  const headers = {
    Accept: 'application/json',
    'Accept-encoding': 'gzip, deflate',
    'Content-Type': 'application/json',
    Authorization: `key=${SERVER_KEY}`, // Replace with your server key
  };

  try {
    const response = await fetch('https://fcm.googleapis.com/fcm/send', {
      method: 'POST',
      headers,
      body: JSON.stringify(message),
    });

    const data = await response.json();
    console.log('onSendNotification data', data);
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};
