// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';


// import Splash from '../screen/SplashScreen/Splash';
// import Login from '../AuthScreen/LoginScreen/Login';
// import Signup from '../AuthScreen/SignupScreen/Signup';
// import DashBoard from '../screen/DashboardScreen/DashBoard';

// const Stack = createNativeStackNavigator();

// const Navigation = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Splash" component={Splash} />
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Signup" component={Signup} />

//         <Stack.Screen name="DashBoard" component={DashBoard} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Navigation;

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

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { isAuthenticated } = useSelector(state => state.auth);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
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
