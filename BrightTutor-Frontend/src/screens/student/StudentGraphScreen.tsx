import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StudentGraphScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Graphiques</Text>
      <Text style={styles.hint}>Traceur de courbes à porter.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fce7f3' },
  title: { fontSize: 20, fontWeight: '600', color: '#111', marginBottom: 8 },
  hint: { fontSize: 14, color: '#666' },
});
