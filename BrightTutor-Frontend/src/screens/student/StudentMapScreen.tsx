import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StudentMapScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carte du parcours</Text>
      <Text style={styles.hint}>Contenu à porter depuis l’app d’origine.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f9ff' },
  title: { fontSize: 20, fontWeight: '600', color: '#111', marginBottom: 8 },
  hint: { fontSize: 14, color: '#666' },
});
