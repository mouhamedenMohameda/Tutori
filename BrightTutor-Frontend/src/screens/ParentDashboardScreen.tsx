import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/Button';

export default function ParentDashboardScreen() {
  const { user, logout } = useAuth();
  const { t } = useLanguage();
  const parent = user?.parent as Record<string, unknown> | undefined;
  const name = parent?.name ?? user?.userId ?? t('parentDashboard.stats.activeParent');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('parentDashboard.title')}</Text>
        <Text style={styles.subtitle}>{t('parentDashboard.welcomeBack')}, {String(name)}</Text>
      </View>
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>👨‍👩‍👧‍👦 {t('parentDashboard.welcomeBanner.title')}</Text>
        <Text style={styles.bannerDesc}>{t('parentDashboard.welcomeBanner.subtitle')}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{t('parentDashboard.childrenCards.studentDetails')}</Text>
        <Text style={styles.info}>{t('parentDashboard.childrenCards.noChildrenFound')}</Text>
        <Text style={styles.hint}>{t('parentDashboard.childrenCards.noChildrenSubtitle')}</Text>
        <Button variant="success" onPress={logout} style={styles.button}>
          {t('parentDashboard.logout')}
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#faf5ff' },
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
  banner: { backgroundColor: '#7c3aed', borderRadius: 16, padding: 20, marginBottom: 20 },
  bannerTitle: { fontSize: 18, fontWeight: '700', color: '#fff', marginBottom: 8 },
  bannerDesc: { fontSize: 14, color: 'rgba(255,255,255,0.9)' },
  cardTitle: { fontSize: 18, fontWeight: '600', color: '#111', marginBottom: 12 },
  info: { fontSize: 14, color: '#6b7280', marginBottom: 8 },
  hint: { fontSize: 13, color: '#94a3b8', marginBottom: 20 },
  button: { marginTop: 8 },
});
