import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TextInput,
} from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { apiFetch } from '../../api/client';
import { Card, CardContent } from '../../components/ui/Card';

interface Student {
  id: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  grade?: string;
  class?: string;
}

export default function SchoolStudentsScreen() {
  const { user } = useAuth();
  const { t } = useLanguage();
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState('');

  const loadStudents = useCallback(async () => {
    const token = user?.token;
    if (!token) return;
    try {
      const res = await apiFetch<{ students?: Student[] }>('/api/school/students', { token });
      setStudents(res.students || []);
    } catch (e) {
      console.error('Failed to load students', e);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [user?.token]);

  useEffect(() => {
    loadStudents();
  }, [loadStudents]);

  const onRefresh = () => {
    setRefreshing(true);
    loadStudents();
  };

  const filtered = students.filter(
    (s) =>
      !search.trim() ||
      [s.firstName, s.lastName, s.username, s.email].some(
        (v) => v && String(v).toLowerCase().includes(search.toLowerCase())
      )
  );

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#2563eb" />
        <Text style={styles.loadingText}>{t('studentManagement.studentsList.title')}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder={t('studentManagement.studentsList.searchPlaceholder')}
        placeholderTextColor="#94a3b8"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#2563eb']} />
        }
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyTitle}>{t('studentManagement.studentsList.noStudentsYet')}</Text>
            <Text style={styles.emptyDesc}>{t('studentManagement.studentsList.noStudentsDesc')}</Text>
          </View>
        }
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <CardContent style={styles.cardContent}>
              <Text style={styles.name}>
                {[item.firstName, item.lastName].filter(Boolean).join(' ') || item.username || item.id}
              </Text>
              {item.username ? (
                <Text style={styles.meta}>{t('studentManagement.studentsList.username')} {item.username}</Text>
              ) : null}
              {item.email ? (
                <Text style={styles.meta}>{t('studentManagement.studentsList.email')} {item.email}</Text>
              ) : null}
            </CardContent>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { marginTop: 12, fontSize: 14, color: '#64748b' },
  search: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    margin: 16,
    fontSize: 16,
    color: '#111',
  },
  list: { padding: 16, paddingBottom: 40 },
  card: { marginBottom: 12 },
  cardContent: { paddingVertical: 12 },
  name: { fontSize: 16, fontWeight: '600', color: '#111', marginBottom: 4 },
  meta: { fontSize: 14, color: '#64748b', marginTop: 2 },
  empty: { padding: 32, alignItems: 'center' },
  emptyTitle: { fontSize: 18, fontWeight: '600', color: '#475569', marginBottom: 8 },
  emptyDesc: { fontSize: 14, color: '#94a3b8', textAlign: 'center' },
});
