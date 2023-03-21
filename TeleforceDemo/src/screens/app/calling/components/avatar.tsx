import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {AvatarIcon} from '../../../../assets/icons/svg';

const Avatar = () => {
  return (
    <View style={styles.container}>
      <SvgXml width={80} height={80} xml={AvatarIcon} />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 130,
    borderRadius: 100,
    backgroundColor: '#0283BB',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
