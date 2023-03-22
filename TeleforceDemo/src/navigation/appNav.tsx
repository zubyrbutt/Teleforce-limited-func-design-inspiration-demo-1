// In App.js in a new project

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CallingScreen, ConnectingScreen, DialingScreen} from '../screens/app';
import TestScreen from '../screens/app/test';

type AppStackParamList = {
  Connecting: undefined;
  Dialing: undefined;
  Calling: undefined;
  Test: undefined;
};

const screens = [
  {
    name: 'Connecting',
    component: ConnectingScreen,
  },
  {
    name: 'Dialing',
    component: DialingScreen,
  },
  {
    name: 'Calling',
    component: CallingScreen,
  },
  {
    name: 'Test',
    component: TestScreen,
  },
] as const;

const AppStack = createNativeStackNavigator<AppStackParamList>();

function AppNav() {
  return (
    <AppStack.Navigator
      initialRouteName="Dialing"
      screenOptions={{
        headerShown: false,
      }}>
      {screens.map((screen, index) => (
        <AppStack.Screen
          key={index}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </AppStack.Navigator>
  );
}

export default AppNav;
