import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface AuthButtonProps {
  onPress: () => void;
  title: string;
  isDisable: boolean;
}

const AuthButton = ({onPress, title, isDisable = true}: AuthButtonProps) => {
  return (
    <TouchableOpacity
        disabled={isDisable}
      activeOpacity={0.8}
      onPress={onPress}
      style={{width: '85%'}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.container}
        colors={['#65D4DD', '#E340FC']}>
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // width: '80%',
    height: 50,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 2,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
