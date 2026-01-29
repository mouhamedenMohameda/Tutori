import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import StudentMapScreen from '../screens/student/StudentMapScreen';
import StudentLearnScreen from '../screens/student/StudentLearnScreen';
import StudentBacScreen from '../screens/student/StudentBacScreen';
import StudentChatScreen from '../screens/student/StudentChatScreen';
import StudentGraphScreen from '../screens/student/StudentGraphScreen';
import type { StudentTabParamList } from './types';

const Tab = createBottomTabNavigator<StudentTabParamList>();

function TabIcon({ name, focused }: { name: string; focused: boolean }) {
  return <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.6 }}>{name}</Text>;
}

export default function StudentTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1CB0F6',
        tabBarInactiveTintColor: '#666',
        tabBarStyle: { backgroundColor: '#fff', borderTopColor: '#eee' },
      }}
    >
      <Tab.Screen
        name="Map"
        component={StudentMapScreen}
        options={{
          title: 'Carte',
          tabBarIcon: ({ focused }) => <TabIcon name="🗺️" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Learn"
        component={StudentLearnScreen}
        options={{
          title: 'Apprendre',
          tabBarIcon: ({ focused }) => <TabIcon name="📚" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="BAC"
        component={StudentBacScreen}
        options={{
          title: 'BAC',
          tabBarIcon: ({ focused }) => <TabIcon name="📝" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={StudentChatScreen}
        options={{
          title: 'Chat',
          tabBarIcon: ({ focused }) => <TabIcon name="💬" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Graph"
        component={StudentGraphScreen}
        options={{
          title: 'Graph',
          tabBarIcon: ({ focused }) => <TabIcon name="📈" focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
}
