import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import CallingButton from '../CallingButton';

const DialerButton = ({number, letters, onPress}: any) => {
  return (
    <TouchableOpacity style={styles.dialerButton} onPress={onPress}>
      <Text style={styles.dialerButtonText}>{number}</Text>
      <Text style={styles.dialerButtonLetters}>{letters}</Text>
    </TouchableOpacity>
  );
};

const DialerIcon = ({icon, onPress}: any) => {
  return (
    <TouchableOpacity style={styles.dialerButton} onPress={onPress}>
      <Text></Text>
    </TouchableOpacity>
  );
};

const DialerRow = ({buttons}: any) => {
  return (
    <View style={styles.dialerRow}>
      {buttons.map(({number, letters, icon, onPress}: any) =>
        icon ? (
          <DialerIcon key={icon} icon={icon} onPress={onPress} />
        ) : (
          <DialerButton
            key={number}
            number={number}
            letters={letters}
            onPress={onPress}
          />
        ),
      )}
    </View>
  );
};

interface Props {
  data: any;
  //   keyExtractor: any;
  //   renderItem: any;
  value: string;
  setSearch: any;
}

const CustomKeyboard = (props: Props) => {
  const handleButtonPress = (value: string) => {
    // if length is 17 then return
    if (props.value.length === 17) {
      return;
    }
    props.setSearch(props.value + value);
  };

  const handleBackspacePress = () => {
    // setPhoneNumber(phoneNumber.slice(0, -1));
    props.setSearch(props.value.slice(0, -1));
  };

  const handleCallPress = () => {
    console.log(`Calling ${props.value}...`);
  };

  const handleClearPress = () => {
    // setPhoneNumber('');
    props.setSearch('');
  };

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
        {icon: 'backspace', onPress: handleBackspacePress},
        {number: '0', letters: '+', onPress: () => handleButtonPress('0')},
        {icon: 'phone', onPress: handleCallPress},
      ],
    },
  ];

  console.log('props.value', props.value);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '500',
            color: '#000',
            marginBottom: 1,
          }}>
          {props.data[0]?.givenName}
        </Text>
        {/* <Text
          style={{
            fontSize: 30,
            fontWeight: '500',
            color: '#000',
            marginBottom: 1,
          }}>
          {props.data[0]?.phoneNumbers[0].number}
        </Text> */}
      </View>
      <TextInput
        style={styles.phoneNumberInput}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        value={props.value}
      />
      <View style={styles.dialer}>
        {dialerRows.map((row, index) => (
          <DialerRow key={index} buttons={row.buttons} />
        ))}
      </View>
      <View
        style={{
          height: 100,
        }}
      />
      {/* <TouchableOpacity style={styles.clearButton} onPress={handleClearPress}>
        <Text style={styles.clearButtonText}>Clear</Text>
      </TouchableOpacity> */}
      <CallingButton color="#3FAE6C" />
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
    width: '90%',
    // height: 40,
    // borderWidth: 1,
    // borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 30,
    fontWeight: '500',
    color: '#000',
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
    margin: 5,
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
