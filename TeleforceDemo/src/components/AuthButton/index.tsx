import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors, fontSizes } from 'theme';

interface AuthButtonProps {
  onPress: () => void;
  title: string;
  isDisable: boolean;
}

const AuthButton = ({ onPress, title, isDisable = true }: AuthButtonProps) => {
  return (
    <TouchableOpacity
      disabled={isDisable}
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.wrapper}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.container}
        colors={['#65D4DD', '#E340FC']}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 25,
    elevation: 2,
    height: 50,
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
  },
  text: {
    color: colors.white,
    fontSize: fontSizes.body1,
    fontWeight: 'bold',
  },
  wrapper: {
    width: '85%',
  },
});
