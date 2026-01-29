import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { StudentStackScreenProps } from '../../navigation/types';

export default function LearnSectionScreen({ route }: StudentStackScreenProps<'LearnSection'>) {
  const { subject, sectionId } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Section: {subject} / {sectionId}</Text>
      <Text style={styles.hint}>Contenu d’apprentissage à porter.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0fdf4' },
  title: { fontSize: 18, fontWeight: '600', color: '#111', marginBottom: 8 },
  hint: { fontSize: 14, color: '#666' },
});
