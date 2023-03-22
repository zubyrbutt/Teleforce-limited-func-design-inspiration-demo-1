import React from 'react';

import AuthNav from '@authNav';
import NetInfo from '@react-native-community/netinfo';
import {NavigationContainer} from '@react-navigation/native';

import {setOnline} from '../global/connectionSlice';
import {useAppDispatch, useAppSelector} from '../global/hooks';
import AppNav from './appNav';
import NetWorkNav from './netWorkNav';

function RootNav() {
  const {isLoggedIn} = useAppSelector(state => state.user);
  const {isOnline} = useAppSelector(state => state.connection);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.isConnected);
      dispatch(
        setOnline({
          isOnline: state.isConnected ? true : false,
        }),
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if (isOnline) {
    return (
      <NavigationContainer>
        {isLoggedIn ? <AppNav /> : <AuthNav />}
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <NetWorkNav />
    </NavigationContainer>
  );
}

export default RootNav;
