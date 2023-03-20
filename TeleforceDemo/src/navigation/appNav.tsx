// In App.js in a new project

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ConnectingScreen} from '../screens/app';

type AppStackParamList = {
  Connecting: undefined;
};

const AppStack = createNativeStackNavigator<AppStackParamList>();

function AppNav() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Connecting" component={ConnectingScreen} />
    </AppStack.Navigator>
  );
}

export default AppNav;
