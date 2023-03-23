import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fontSizes } from 'theme';

interface Props {}

const CallingLoader: React.FC<Props> = () => {
  const [dots, setDots] = useState<string>('.');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDots((prevDots) => {
        if (prevDots === '...') {
          return '.';
        }
        return prevDots + '.';
      });
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [dots]);

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
