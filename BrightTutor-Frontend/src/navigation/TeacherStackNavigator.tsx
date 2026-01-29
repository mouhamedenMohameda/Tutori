import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TeacherDashboardScreen from '../screens/TeacherDashboardScreen';
import TeacherAssignmentsScreen from '../screens/teacher/TeacherAssignmentsScreen';
import TeacherProgressScreen from '../screens/teacher/TeacherProgressScreen';
import TeacherStudentsScreen from '../screens/teacher/TeacherStudentsScreen';
import type { TeacherStackParamList } from './types';

const Stack = createNativeStackNavigator<TeacherStackParamList>();

export default function TeacherStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#111',
        headerShadowVisible: false,
        contentStyle: { backgroundColor: '#f8fafc' },
      }}
    >
      <Stack.Screen name="Dashboard" component={TeacherDashboardScreen} options={{ title: 'Enseignant' }} />
      <Stack.Screen name="Assignments" component={TeacherAssignmentsScreen} options={{ title: 'Devoirs' }} />
      <Stack.Screen name="Progress" component={TeacherProgressScreen} options={{ title: 'Progression' }} />
      <Stack.Screen name="Students" component={TeacherStudentsScreen} options={{ title: 'Élèves' }} />
    </Stack.Navigator>
  );
}
