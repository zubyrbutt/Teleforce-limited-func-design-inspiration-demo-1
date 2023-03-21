// In App.js in a new project

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CallingScreen, ConnectingScreen} from '../screens/app';

type AppStackParamList = {
  Connecting: undefined;
  Calling: undefined;
};

const screens = [
  {
    name: 'Connecting',
    component: ConnectingScreen,
  },
  {
    name: 'Calling',
    component: CallingScreen,
  },
] as const;


const AppStack = createNativeStackNavigator<AppStackParamList>();

function AppNav() {
  return (
    <AppStack.Navigator
      initialRouteName="Calling"
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
