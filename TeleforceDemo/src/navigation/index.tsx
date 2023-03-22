import React from 'react';

import AuthNav from '@authNav';
import {NavigationContainer} from '@react-navigation/native';

import {useAppSelector} from '../global/hooks';
import {checkInternetConnection} from '../utils/helpers';
import AppNav from './appNav';

function RootNav() {
  const {isLoggedIn} = useAppSelector(state => state.user);

  React.useEffect(() => {
    checkInternetConnection().then(isConnected => {
      console.log('isConnected', isConnected);
    });
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNav /> : <AuthNav />}
    </NavigationContainer>
  );
}

export default RootNav;
