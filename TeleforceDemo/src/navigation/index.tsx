import {NavigationContainer} from '@react-navigation/native';

import AppNav from './appNav';
import AuthNav from './authNav';

function RootNav() {
  return (
    <NavigationContainer>
      {/* <AppNav /> */}
      <AuthNav />
    </NavigationContainer>
  );
}

export default RootNav;
