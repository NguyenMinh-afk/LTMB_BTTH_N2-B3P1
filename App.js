import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './screen/SplashScreen';
import OnboardingScreen from './screen/OnboardingScreen';
import SignInScreen from './screen/SignInScreen';
import Number from './screen/Number'; 
import VerificationScreen from './screen/VerificationScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const navigationRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (navigationRef.current) {
        navigationRef.current.navigate('Onboarding');
      }
    }, 3000);

    return () => clearTimeout(timer);
  },);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="PhoneNumberInput" component={Number} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;