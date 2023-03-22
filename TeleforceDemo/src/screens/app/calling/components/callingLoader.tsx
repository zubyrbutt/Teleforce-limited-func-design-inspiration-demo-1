import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {}

const CallingLoader: React.FC<Props> = () => {
  const [dots, setDots] = useState<string>('.');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDots(prevDots => {
        if (prevDots === '...') {
          return '.';
        }
        return prevDots + '.';
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, [dots]);

  return (
    <View>
      <Text style={styles.calling}>Calling{dots}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  calling: {
    fontSize: 20,
    fontWeight: '500',
    color: '#4d4d4d',
  },
});

export default CallingLoader;
