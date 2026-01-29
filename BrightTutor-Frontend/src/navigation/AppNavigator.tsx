import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../contexts/AuthContext';
import type { AuthRole } from '../contexts/AuthContext';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';
import StudentStackNavigator from './StudentStackNavigator';
import SchoolStackNavigator from './SchoolStackNavigator';
import TeacherStackNavigator from './TeacherStackNavigator';
import ParentStackNavigator from './ParentStackNavigator';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  if (user) {
    const role: AuthRole = user.role;
    if (role === 'STUDENT') return <StudentStackNavigator />;
    if (role === 'SCHOOL_ADMIN') return <SchoolStackNavigator />;
    if (role === 'TEACHER') return <TeacherStackNavigator />;
    if (role === 'PARENT') return <ParentStackNavigator />;
  }

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#111',
        headerShadowVisible: false,
        contentStyle: { backgroundColor: '#fff' },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tutori', headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Connexion', headerShown: false }} />
      <Stack.Screen name="About" component={AboutScreen} options={{ title: 'À propos' }} />
      <Stack.Screen name="Contact" component={ContactScreen} options={{ title: 'Contact' }} />
    </Stack.Navigator>
  );
}
