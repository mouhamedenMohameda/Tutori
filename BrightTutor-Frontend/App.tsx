import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/contexts/AuthContext';
import { LanguageProvider } from './src/contexts/LanguageContext';
import { Toaster } from './src/components/ui/Toast';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <LanguageProvider>
        <AuthProvider>
          <NavigationContainer>
            <AppNavigator />
            <Toaster />
          </NavigationContainer>
          <StatusBar style="auto" />
        </AuthProvider>
      </LanguageProvider>
    </SafeAreaProvider>
  );
}
