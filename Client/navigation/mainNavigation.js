// MainNavigator.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../screens/LoginPage';
import SignUpPage from '../screens/signupPage';
import ForgetPasswordPage from '../screens/forgetPassword';
import OTPInputPage from '../screens/OTPInput';
import ResetPasswordPage from '../screens/resetPaswwordPage';
import OnboardingScreen from '../screens/onboardingScreen';
import SplashScreen from '../screens/splashScreen';
import HomePage from '../screens/homeScreen';
const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginPage} options={{  headerShown:false }} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordPage} />
        <Stack.Screen name="OTP" component={OTPInputPage} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordPage} />
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
