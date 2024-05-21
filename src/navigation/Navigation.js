import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screen/LoginScreen/Login';
import DashBoard from '../screen/DshaboardScreen/DashBoard';
import Signup from '../screen/SignupScreen/Signup';
import Splash from '../screen/SplashScreen/Splash';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />

        <Stack.Screen name="DashBoard" component={DashBoard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
