import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ParentDashboardScreen from '../screens/ParentDashboardScreen';
import type { ParentStackParamList } from './types';

const Stack = createNativeStackNavigator<ParentStackParamList>();

export default function ParentStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#111',
        headerShadowVisible: false,
        contentStyle: { backgroundColor: '#f8fafc' },
      }}
    >
      <Stack.Screen name="Dashboard" component={ParentDashboardScreen} options={{ title: 'Parent' }} />
    </Stack.Navigator>
  );
}
