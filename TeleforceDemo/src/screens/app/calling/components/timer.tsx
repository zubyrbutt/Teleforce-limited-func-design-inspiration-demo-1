import { useNotification } from 'hooks/useNotification';
import { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors, fontSizes } from 'theme';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const { displayNotification } = useNotification();

  useEffect(() => {
    // when call connected
    displayNotification('Call connected', 'Your call is connected. Enjoy!');
    const interval = setInterval(() => {
      // Increment seconds
      setSeconds((seconds) => {
        if (seconds === 59) {
          setMinutes((minutes) => {
            if (minutes === 59) {
              setHours((hours) => hours + 1);
            }
            return minutes + 1;
          });
          return 0;
        }
        return seconds + 1;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const pad = (n) => (n < 10 ? `0${n}` : n);

  return <Text style={styles.calling}>{`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`}</Text>;
};

export default Timer;

const styles = StyleSheet.create({
  calling: {
    color: colors.black,
    fontSize: fontSizes.h6,
    fontWeight: '500',
  },
});
