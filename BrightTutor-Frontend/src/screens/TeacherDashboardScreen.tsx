import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/Button';
import type { TeacherStackParamList } from '../navigation/types';

type Nav = NativeStackNavigationProp<TeacherStackParamList, 'Dashboard'>;

export default function TeacherDashboardScreen() {
  const { user, logout } = useAuth();
  const { t } = useLanguage();
  const navigation = useNavigation<Nav>();
  const teacher = user?.teacher as Record<string, unknown> | undefined;
  const name = teacher?.name ?? user?.userId ?? t('teacherDashboard.stats.yourInstitution');

  const links: { name: Exclude<keyof TeacherStackParamList, 'Dashboard'>; labelKey: string }[] = [
    { name: 'Assignments', labelKey: 'teacherDashboard.lessonPlans.lessonPlans' },
    { name: 'Progress', labelKey: 'teacherDashboard.lessonPlans.viewAll' },
    { name: 'Students', labelKey: 'teacherDashboard.teachingTools.myStudents' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('teacherDashboard.title')}</Text>
        <Text style={styles.subtitle}>{t('teacherDashboard.welcomeBack')}, {String(name)}</Text>
      </View>
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>🎓 {t('teacherDashboard.welcomeBanner.title')}</Text>
        <Text style={styles.bannerDesc}>{t('teacherDashboard.welcomeBanner.subtitle')}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{t('teacherDashboard.teachingTools.title')}</Text>
        <Text style={styles.info}>{t('teacherDashboard.teachingTools.subtitle')}</Text>
        {links.map(({ name: screenName, labelKey }) => (
          <TouchableOpacity
            key={screenName}
            style={styles.linkButton}
            onPress={() => navigation.navigate(screenName)}
          >
            <Text style={styles.linkButtonText}>{t(labelKey)}</Text>
          </TouchableOpacity>
        ))}
        <Button variant="success" onPress={logout} style={styles.button}>
          {t('teacherDashboard.logout')}
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fefce8' },
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
  banner: { backgroundColor: '#854d0e', borderRadius: 16, padding: 20, marginBottom: 20 },
  bannerTitle: { fontSize: 18, fontWeight: '700', color: '#fff', marginBottom: 8 },
  bannerDesc: { fontSize: 14, color: 'rgba(255,255,255,0.9)' },
  cardTitle: { fontSize: 18, fontWeight: '600', color: '#111', marginBottom: 12 },
  info: { fontSize: 14, color: '#6b7280', marginBottom: 16 },
  linkButton: {
    backgroundColor: '#fef9c3',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  linkButtonText: { color: '#1e293b', fontSize: 15, fontWeight: '500' },
  button: { marginTop: 16 },
});
