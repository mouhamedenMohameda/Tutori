import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StudentChatScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat tuteur</Text>
      <Text style={styles.hint}>Conversation IA à porter.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f3ff' },
  title: { fontSize: 20, fontWeight: '600', color: '#111', marginBottom: 8 },
  hint: { fontSize: 14, color: '#666' },
});
