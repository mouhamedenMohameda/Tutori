import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useAuth } from '../contexts/AuthContext';

export default function StudentDashboardScreen() {
  const { user, logout } = useAuth();
  const student = user?.student as Record<string, unknown> | undefined;
  const studentName = student?.studentName ?? user?.userId ?? 'Étudiant';

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Tableau de bord</Text>
        <Text style={styles.subtitle}>Bonjour, {String(studentName)}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Espace étudiant</Text>
        <Text style={styles.info}>Carte du parcours, chat IA et BAC disponibles depuis cette interface.</Text>
        <TouchableOpacity style={styles.button} onPress={logout}>
          <Text style={styles.buttonText}>Se déconnecter</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f9ff' },
  content: { padding: 24, paddingTop: 60 },
  header: { marginBottom: 24 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#111' },
  subtitle: { fontSize: 16, color: '#6b7280', marginTop: 4 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTitle: { fontSize: 18, fontWeight: '600', color: '#111', marginBottom: 12 },
  info: { fontSize: 14, color: '#6b7280', marginBottom: 20 },
  button: {
    backgroundColor: '#10b981',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
