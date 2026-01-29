import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

export interface CardProps {
  children: React.ReactNode;
  gradient?: boolean;
  hover?: boolean;
  colorful?: boolean;
  style?: ViewStyle;
}

export function Card({ children, gradient, hover, colorful, style }: CardProps) {
  return (
    <View
      style={[
        styles.card,
        gradient && styles.gradient,
        colorful && styles.colorful,
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  gradient: { backgroundColor: '#fafafa' },
  colorful: { backgroundColor: 'transparent' },
  header: { marginBottom: 16 },
  title: { fontSize: 22, fontWeight: '700', color: '#111', marginBottom: 4 },
  description: { fontSize: 14, color: '#6b7280' },
  content: {},
  footer: { flexDirection: 'row', alignItems: 'center', paddingTop: 16 },
});

export function CardHeader({ children, style }: { children: React.ReactNode; style?: ViewStyle }) {
  return <View style={[styles.header, style]}>{children}</View>;
}

export function CardTitle({ children, style }: { children: React.ReactNode; style?: ViewStyle }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

export function CardDescription({ children, style }: { children: React.ReactNode; style?: ViewStyle }) {
  return <Text style={[styles.description, style]}>{children}</Text>;
}

export function CardContent({ children, style }: { children: React.ReactNode; style?: ViewStyle }) {
  return <View style={[styles.content, style]}>{children}</View>;
}

export function CardFooter({ children, style }: { children: React.ReactNode; style?: ViewStyle }) {
  return <View style={[styles.footer, style]}>{children}</View>;
}
