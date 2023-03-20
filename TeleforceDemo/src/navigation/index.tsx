import AuthNav from '@authNav';
import {NavigationContainer} from '@react-navigation/native';

import AppNav from './appNav';

function RootNav() {
  return (
    <NavigationContainer>
       <AuthNav />
    </NavigationContainer>
  );
}

export default RootNav;
