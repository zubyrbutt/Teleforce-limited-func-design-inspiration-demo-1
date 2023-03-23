import { useNotification } from 'hooks/useNotification';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fontSizes } from 'theme';

interface Props {}

const CallingLoader: React.FC<Props> = () => {
  const [dots, setDots] = useState<string>('.');
  const [seconds, setSeconds] = useState<number>(0);

  const { displayNotification } = useNotification();

  useEffect(() => {
    displayNotification('Calling', 'Your call is connecting. Please wait...');
    const timer = setTimeout(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

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
