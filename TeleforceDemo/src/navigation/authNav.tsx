import { LoginScreen } from 'screens/auth'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

type AuthStackParamList = {
  Login: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

// screens array
const screens = [
  {
    name: 'Login',
    component: LoginScreen,
    options: {
      headerShown: false,
    },
  },
] as const;

function AuthNav() {
  return (
    <AuthStack.Navigator>
      {screens.map((screen, index) => (
        <AuthStack.Screen
          key={index}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </AuthStack.Navigator>
  );
}

export default AuthNav;
