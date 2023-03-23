import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ConnectingScreen } from '../screens/app';

interface AuthStackParamList {
  Connecting: undefined;
}

const NetWorkStack = createNativeStackNavigator<AuthStackParamList>();

// screens array
const screens = [
  {
    name: 'Connecting',
    component: ConnectingScreen,
    options: {
      headerShown: false,
    },
  },
] as const;

function NetWorkNav() {
  return (
    <NetWorkStack.Navigator>
      {screens.map((screen, index) => (
        <NetWorkStack.Screen
          key={index}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </NetWorkStack.Navigator>
  );
}

export default NetWorkNav;
