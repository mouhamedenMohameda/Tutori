import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SchoolDashboardScreen from '../screens/SchoolDashboardScreen';
import SchoolClassroomsScreen from '../screens/school/SchoolClassroomsScreen';
import SchoolTeachersScreen from '../screens/school/SchoolTeachersScreen';
import SchoolStudentsScreen from '../screens/school/SchoolStudentsScreen';
import SchoolParentsScreen from '../screens/school/SchoolParentsScreen';
import SchoolSubjectsScreen from '../screens/school/SchoolSubjectsScreen';
import type { SchoolStackParamList } from './types';

const Stack = createNativeStackNavigator<SchoolStackParamList>();

export default function SchoolStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#111',
        headerShadowVisible: false,
        contentStyle: { backgroundColor: '#f8fafc' },
      }}
    >
      <Stack.Screen name="Dashboard" component={SchoolDashboardScreen} options={{ title: 'Administration' }} />
      <Stack.Screen name="Classrooms" component={SchoolClassroomsScreen} options={{ title: 'Classes' }} />
      <Stack.Screen name="Teachers" component={SchoolTeachersScreen} options={{ title: 'Enseignants' }} />
      <Stack.Screen name="Students" component={SchoolStudentsScreen} options={{ title: 'Élèves' }} />
      <Stack.Screen name="Parents" component={SchoolParentsScreen} options={{ title: 'Parents' }} />
      <Stack.Screen name="Subjects" component={SchoolSubjectsScreen} options={{ title: 'Matières' }} />
    </Stack.Navigator>
  );
}
