import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { apiFetch } from '../api/client';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import LanguageSwitcher from '../components/LanguageSwitcher';
import type { SchoolStackParamList } from '../navigation/types';

type Nav = NativeStackNavigationProp<SchoolStackParamList, 'Dashboard'>;

interface Student { id: string; firstName?: string; lastName?: string; grade?: string; class?: string; }
interface Teacher { id: string; name?: string; subjects?: string[]; classes?: string[]; }
interface Parent { id: string; name?: string; children?: string[]; }
interface Subject { id: string; name?: string; description?: string; createdAt?: string; }

export default function SchoolDashboardScreen() {
  const { user, logout } = useAuth();
  const { t, isRTL } = useLanguage();
  const navigation = useNavigation<Nav>();
  const [students, setStudents] = useState<Student[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [parents, setParents] = useState<Parent[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    const token = user?.token;
    if (!token) return;
    setLoading(true);
    try {
      const [studentsRes, teachersRes, parentsRes, subjectsRes] = await Promise.all([
        apiFetch<{ students?: Student[] }>('/api/school/students', { token }),
        apiFetch<{ teachers?: Teacher[] }>('/api/school/teachers', { token }),
        apiFetch<{ parents?: Parent[] }>('/api/school/parents', { token }),
        apiFetch<{ subjects?: Subject[] }>('/api/school/subjects', { token }),
      ]);
      setStudents(studentsRes.students || []);
      setTeachers(teachersRes.teachers || []);
      setParents(parentsRes.parents || []);
      setSubjects(subjectsRes.subjects || []);
    } catch (e) {
      console.error('Failed to load dashboard data', e);
    } finally {
      setLoading(false);
    }
  }, [user?.token]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const getActiveClasses = () => {
    const set = new Set<string>();
    students.forEach((s) => s.class && set.add(s.class));
    teachers.forEach((t) => t.classes?.forEach((c) => set.add(c)));
    return set.size;
  };

  const links: { name: Exclude<keyof SchoolStackParamList, 'Dashboard'>; labelKey: string }[] = [
    { name: 'Classrooms', labelKey: 'schoolDashboard.management.cards.classroomManagement.title' },
    { name: 'Teachers', labelKey: 'schoolDashboard.management.cards.teacherManagement.title' },
    { name: 'Students', labelKey: 'schoolDashboard.management.cards.studentManagement.title' },
    { name: 'Parents', labelKey: 'schoolDashboard.management.cards.parentManagement.title' },
    { name: 'Subjects', labelKey: 'schoolDashboard.management.cards.subjectManagement.title' },
  ];

  if (loading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color="#2563eb" />
        <Text style={styles.loadingText}>{t('schoolDashboard.title')}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.schoolName}>{user?.schoolName ?? 'Tutori'}</Text>
            <Text style={styles.title}>{t('schoolDashboard.title')}</Text>
          </View>
          <View style={styles.headerActions}>
            <LanguageSwitcher />
            <Button variant="ghost" size="sm" onPress={logout}>
              🚪 {t('schoolDashboard.logout')}
            </Button>
          </View>
        </View>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>🎓 {t('schoolDashboard.welcomeBanner.title')}</Text>
        <Text style={styles.bannerDesc}>{t('schoolDashboard.welcomeBanner.description')}</Text>
      </View>

      <View style={styles.statsRow}>
        <Card style={styles.statCard}>
          <CardContent style={styles.statContent}>
            <Text style={styles.statNumber}>{students.length}</Text>
            <Text style={styles.statLabel}>{t('schoolDashboard.stats.students')}</Text>
            <Text style={styles.statHint}>{t('schoolDashboard.stats.totalCapacity')}</Text>
          </CardContent>
        </Card>
        <Card style={styles.statCard}>
          <CardContent style={styles.statContent}>
            <Text style={[styles.statNumber, styles.statGreen]}>{teachers.length}</Text>
            <Text style={styles.statLabel}>{t('schoolDashboard.stats.teachers')}</Text>
            <Text style={styles.statHint}>{t('schoolDashboard.stats.totalCapacity')}</Text>
          </CardContent>
        </Card>
        <Card style={styles.statCard}>
          <CardContent style={styles.statContent}>
            <Text style={[styles.statNumber, styles.statPurple]}>{getActiveClasses()}</Text>
            <Text style={styles.statLabel}>{t('schoolDashboard.stats.classes')}</Text>
            <Text style={styles.statHint}>{t('schoolDashboard.stats.active')}</Text>
          </CardContent>
        </Card>
        <Card style={styles.statCard}>
          <CardContent style={styles.statContent}>
            <Text style={[styles.statNumber, styles.statPink]}>{parents.length}</Text>
            <Text style={styles.statLabel}>{t('schoolDashboard.stats.parents')}</Text>
            <Text style={styles.statHint}>{t('schoolDashboard.stats.registered')}</Text>
          </CardContent>
        </Card>
      </View>

      <Card style={styles.managementCard}>
        <Text style={styles.managementTitle}>🚀 {t('schoolDashboard.management.title')}</Text>
        <Text style={styles.managementDesc}>{t('schoolDashboard.management.description')}</Text>
        <View style={styles.linkList}>
          {links.map(({ name, labelKey }) => (
            <TouchableOpacity
              key={name}
              style={styles.linkButton}
              onPress={() => navigation.navigate(name)}
            >
              <Text style={styles.linkButtonText}>{t(labelKey)}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Button variant="success" onPress={logout} style={styles.logoutButton}>
          {t('schoolDashboard.logout')}
        </Button>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  content: { padding: 16, paddingBottom: 40 },
  centered: { justifyContent: 'center', alignItems: 'center' },
  loadingText: { marginTop: 12, fontSize: 14, color: '#64748b' },
  header: { marginBottom: 20 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  schoolName: { fontSize: 20, fontWeight: '700', color: '#111' },
  title: { fontSize: 14, color: '#64748b', marginTop: 2 },
  headerActions: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  banner: {
    backgroundColor: '#2563eb',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  bannerTitle: { fontSize: 18, fontWeight: '700', color: '#fff', marginBottom: 8 },
  bannerDesc: { fontSize: 14, color: 'rgba(255,255,255,0.9)' },
  statsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 20 },
  statCard: { flex: 1, minWidth: '45%' },
  statContent: { alignItems: 'center', paddingVertical: 16 },
  statNumber: { fontSize: 28, fontWeight: '700', color: '#2563eb', marginBottom: 4 },
  statGreen: { color: '#16a34a' },
  statPurple: { color: '#9333ea' },
  statPink: { color: '#db2777' },
  statLabel: { fontSize: 14, color: '#374151', fontWeight: '500' },
  statHint: { fontSize: 12, color: '#94a3b8', marginTop: 2 },
  managementCard: { padding: 20 },
  managementTitle: { fontSize: 18, fontWeight: '700', color: '#111', marginBottom: 8 },
  managementDesc: { fontSize: 14, color: '#64748b', marginBottom: 16 },
  linkList: { gap: 10 },
  linkButton: {
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 8,
  },
  linkButtonText: { color: '#1e293b', fontSize: 15, fontWeight: '500' },
  logoutButton: { marginTop: 16 },
});
