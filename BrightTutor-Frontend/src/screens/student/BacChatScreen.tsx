import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { StudentStackScreenProps } from '../../navigation/types';

export default function BacChatScreen({ route }: StudentStackScreenProps<'BacChat'>) {
  const { exerciseId } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercice BAC: {exerciseId}</Text>
      <Text style={styles.hint}>Chat exercice à porter.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fef3c7' },
  title: { fontSize: 18, fontWeight: '600', color: '#111', marginBottom: 8 },
  hint: { fontSize: 14, color: '#666' },
});
