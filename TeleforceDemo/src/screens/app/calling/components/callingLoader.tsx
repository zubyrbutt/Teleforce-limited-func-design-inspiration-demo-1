import { useAppSelector } from 'global/hooks';
import { useNotification } from 'hooks/useNotification';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fontSizes } from 'theme';
import { onSendNotification } from 'utils/_firebase';

interface Props {}

const CallingLoader: React.FC<Props> = () => {
  const [dots, setDots] = useState<string>('.');
  const [seconds, setSeconds] = useState<number>(0);

  const deviceToken = useAppSelector((state) => state.user.token);

  const { displayNotification } = useNotification();

  useEffect(() => {
    // displayNotification is a local notification function
    // displayNotification('Calling', 'Your call is connecting. Please wait...');
    sendNotification();
    const timer = setTimeout(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const sendNotification = async () => {
    onSendNotification({
      to: deviceToken.token,
      notification: {
        title: 'Calling',
        body: 'Your call is connecting. Please wait...',
        sound: 'default',
        priority: 'high',
      },
    });
  };

  useEffect(() => {
    if (seconds % 3 === 0) {
      setDots((prevDots) => {
        if (prevDots === '...') {
          return '.';
        }
        return prevDots + '.';
      });
    }
  }, [seconds]);

  return (
    <View>
      <Text style={styles.calling}>Calling{dots}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  calling: {
    color: colors.text,
    fontSize: fontSizes.h6,
    fontWeight: '500',
  },
});

export default CallingLoader;
