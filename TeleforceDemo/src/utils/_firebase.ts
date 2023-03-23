import { Alert } from 'react-native';

import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

// Register the device for FCM (Firebase Cloud Messaging) messages
async function registerAppWithFCM(): Promise<void> {
  await messaging().registerDeviceForRemoteMessages();
}

// Request permission to receive notifications
async function requestUserPermission(): Promise<void> {
  const authStatus: FirebaseMessagingTypes.AuthorizationStatus =
    await messaging().requestPermission();
  const enabled =
    authStatus === FirebaseMessagingTypes.AuthorizationStatus.AUTHORIZED ||
    authStatus === FirebaseMessagingTypes.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

// Get the FCM token for the device
async function getFCMToken(): Promise<void> {
  const token: string | undefined = await messaging().getToken();
  console.log('FCM token:', token);
}

// Listen for incoming background messages
messaging().setBackgroundMessageHandler(
  async (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
    console.log('Received background message:', remoteMessage);
  },
);

// Listen for incoming foreground messages
messaging().onMessage(async (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
  Alert.alert('A new notification has arrived!', remoteMessage.notification?.body ?? '');
});

// Listen for token refreshes
messaging().onTokenRefresh(async (token: string | undefined) => {
  console.log('FCM token refreshed:', token);
});

// Register the app with FCM, request permission, and get the FCM token
registerAppWithFCM();
requestUserPermission();
getFCMToken();
