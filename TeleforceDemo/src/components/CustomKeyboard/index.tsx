import React, {memo, useCallback} from 'react';
import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {useNavigation} from '@react-navigation/native';

import {ClearIcon} from '../../assets/icons/svg';
import CallingButton from '../CallingButton';

const DialerButton = memo(({number, letters, onPress, onLongPress}: any) => {
  return (
    <Pressable
      style={styles.dialerButton}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Text style={styles.dialerButtonText}>{number}</Text>
      <Text style={styles.dialerButtonLetters}>{letters}</Text>
    </Pressable>
  );
});

const DialerRow = memo(({buttons}: any) => {
  return (
    <View style={styles.dialerRow}>
      {buttons.map(({number, letters, onPress, onLongPress}: any) => (
        <DialerButton
          key={number}
          number={number}
          letters={letters}
          onPress={onPress}
          onLongPress={onLongPress}
        />
      ))}
    </View>
  );
});
interface Props {
  data: any;
  value: string;
  setSearch: any;
}

const CustomKeyboard = (props: Props) => {
  const {data, value, setSearch} = props;

  const navigation = useNavigation<any>();

  const handleButtonPress = (value: string) => {
    if (value.length === 17) {
      return;
    }
    setSearch(props.value + value);
  };

  const handleBackspacePress = useCallback(() => {
    setSearch(value.slice(0, -1));
  }, [setSearch, value]);

  const dialerRows = [
    {
      buttons: [
        {number: '1', letters: '', onPress: () => handleButtonPress('1')},
        {number: '2', letters: 'ABC', onPress: () => handleButtonPress('2')},
        {number: '3', letters: 'DEF', onPress: () => handleButtonPress('3')},
      ],
    },
    {
      buttons: [
        {number: '4', letters: 'GHI', onPress: () => handleButtonPress('4')},
        {number: '5', letters: 'JKL', onPress: () => handleButtonPress('5')},
        {number: '6', letters: 'MNO', onPress: () => handleButtonPress('6')},
      ],
    },
    {
      buttons: [
        {number: '7', letters: 'PQRS', onPress: () => handleButtonPress('7')},
        {number: '8', letters: 'TUV', onPress: () => handleButtonPress('8')},
        {number: '9', letters: 'WXYZ', onPress: () => handleButtonPress('9')},
      ],
    },
    {
      buttons: [
        {number: '*', letters: '', onPress: () => handleButtonPress('*')},
        {
          number: '0',
          letters: '+',
          onPress: () => handleButtonPress('0'),
          onLongPress: () => handleButtonPress('+'),
        },
        {number: '#', letters: '', onPress: () => handleButtonPress('#')},
      ],
    },
  ];

  const handleCallPress = () => {
    // navigate to calling screen with the number
    navigation.navigate('Calling', {
      number: props.data[0]?.phoneNumbers[0]?.number,
      name: props.data[0]?.givenName,
    });
  };

  return (
    <View style={styles.container}>
      <View>
        {props.data[0]?.givenName ? (
          <Text
            numberOfLines={1}
            style={{
              fontSize: 30,
              fontWeight: '500',
              color: '#000',
            }}>
            {props.data[0]?.givenName}
          </Text>
        ) : (
          <Text
            style={{
              fontSize: 30,
              fontWeight: '500',
              opacity: 0,
            }}>
            "No Name"
          </Text>
        )}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TextInput
            style={styles.phoneNumberInput}
            placeholder=""
            keyboardType="phone-pad"
            value={props.value}
            onFocus={() => {
              Keyboard.dismiss();
            }}
          />
          {props.value.length > 0 ? (
            <TouchableOpacity
              onPress={handleBackspacePress}
              style={{
                bottom: 10,
                width: 40,
                height: 40,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <SvgXml width={30} height={30} xml={ClearIcon} />
            </TouchableOpacity>
          ) : (
            <View
              style={{
                width: 40,
                height: 40,
              }}
            />
          )}
        </View>
      </View>

      <View style={styles.dialer}>
        {dialerRows.map((row, index) => (
          <DialerRow key={index} buttons={row.buttons} />
        ))}
      </View>
      <CallingButton onPress={handleCallPress} color="#3FAE6C" />
    </View>
  );
};

export default CustomKeyboard;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  phoneNumberInput: {
    width: '79%',
    paddingVertical: 10,
    marginBottom: 20,
    fontSize: 30,
    fontWeight: '500',
    color: '#000',
    // backgroundColor: '#ccc',
  },
  dialer: {
    width: '100%',
    height: '50%',
    // backgroundColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    // margin: 10,
  },
  dialerRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },

  dialerButton: {
    flex: 1,
    height: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  dialerButtonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 1,
  },
  dialerButtonLetters: {
    fontSize: 12,
    color: '#9f9f9f',
    fontWeight: 'bold',
  },
  clearButton: {
    width: '80%',
    height: 40,
    backgroundColor: '#ccc',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  clearButtonText: {
    fontSize: 20,
  },
});
