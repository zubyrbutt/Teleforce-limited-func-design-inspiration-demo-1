import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

import {useAppSelector} from '../../global/hooks';

const ConnectionLoader = () => {
  const {isOnline} = useAppSelector(state => state.connection);
  return (
    <View>
      <ActivityIndicator />
      <Text>{isOnline ? 'Online' : 'Offline'}</Text>
    </View>
  );
};

export default ConnectionLoader;
