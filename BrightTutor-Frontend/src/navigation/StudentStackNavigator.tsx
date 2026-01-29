import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentTabNavigator from './StudentTabNavigator';
import LearnSectionScreen from '../screens/student/LearnSectionScreen';
import BacChatScreen from '../screens/student/BacChatScreen';
import type { StudentStackParamList } from './types';

const Stack = createNativeStackNavigator<StudentStackParamList>();

export default function StudentStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#111',
        headerShadowVisible: false,
        contentStyle: { backgroundColor: '#f8fafc' },
      }}
    >
      <Stack.Screen
        name="StudentTabs"
        component={StudentTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LearnSection"
        component={LearnSectionScreen}
        options={{ title: 'Section' }}
      />
      <Stack.Screen
        name="BacChat"
        component={BacChatScreen}
        options={{ title: 'Exercice BAC' }}
      />
    </Stack.Navigator>
  );
}
