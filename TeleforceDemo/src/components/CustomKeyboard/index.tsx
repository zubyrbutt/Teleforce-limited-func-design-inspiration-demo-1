import React, {useCallback} from 'react';
import {Keyboard, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {useNavigation} from '@react-navigation/native';

import {ClearIcon} from '../../assets/icons/svg';
import CallingButton from '../CallingButton';
import DialerRow from './components/DialerRow';
import {dialerRows} from './dialerData';
import {styles} from './styles';

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

  const rows = dialerRows(handleButtonPress);
  const isDisable = value.length === 0;

  const handleCallPress = () => {
    const number = data[0]?.phoneNumbers[0]?.number;
    navigation.navigate('Calling', {
      name: data[0]?.givenName || 'Unknown',
      number: number || value,
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleCallPress}
          disabled={isDisable}>
          <Text
            numberOfLines={1}
            style={[
              styles.name,
              {
                opacity: props.data[0]?.givenName ? 1 : 0,
              },
            ]}>
            {props.data[0]?.givenName || 'Unknown'}
          </Text>
        </TouchableOpacity>
        <View style={styles.phoneInputContainer}>
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
              style={styles.clearIcon}>
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
        {rows.map((row, index) => (
          <DialerRow key={index} buttons={row.buttons} />
        ))}
      </View>
      <CallingButton
        isDisabled={isDisable}
        onPress={handleCallPress}
        backgroundColor="#3FAE6C"
      />
    </View>
  );
};

export default CustomKeyboard;
