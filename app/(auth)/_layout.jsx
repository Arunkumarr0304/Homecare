import { View, Text } from 'react-native';
import React from 'react';
import {Stack} from "expo-router";



const AuthLayout = () => {
  return (
   <Stack>
    <Stack.Screen name='log_method' options={{headerShown: false}} />
    <Stack.Screen name='log_sign' options={{headerShown: false}} />
    <Stack.Screen name='forget_password' options={{headerShown: false}} />
    <Stack.Screen name='verification' options={{headerShown: false}} />
    <Stack.Screen name='verified' options={{headerShown: false}} />
    <Stack.Screen name='reset_password' options={{headerShown: false}} />
   </Stack>
  )
}

export default AuthLayout;