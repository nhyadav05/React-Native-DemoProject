import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import Splash from '../screen/SplashScreen/Splash';
import Signup from '../AuthScreen/SignupScreen/Signup';
import Login from '../AuthScreen/LoginScreen/Login';
import DashBoard from '../screen/DashboardScreen/DashBoard';
import ForgotEmail from '../AuthScreen/ForgotEmailScreen/ForgotEmail';
import MobileOtp from '../AuthScreen/MobileOtpScreen/MobileOtp';
import OnboardingScreen from '../screen/SplashScreen/OnboardingScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { isAuthenticated } = useSelector(state => state.auth);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgotEmail" component={ForgotEmail} />
        <Stack.Screen name="MobileOtp" component={MobileOtp} />
        <Stack.Screen name="Dashboard" component={DashBoard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
