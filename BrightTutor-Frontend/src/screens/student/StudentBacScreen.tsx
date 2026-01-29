import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StudentBacScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BAC</Text>
      <Text style={styles.hint}>Exercices BAC à porter.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fef3c7' },
  title: { fontSize: 20, fontWeight: '600', color: '#111', marginBottom: 8 },
  hint: { fontSize: 14, color: '#666' },
});
