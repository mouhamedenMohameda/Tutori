import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/Button';

export default function ContactScreen() {
  const { t } = useLanguage();
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Text style={styles.backText}>← {t('contactPage.navigation.backToHome')}</Text>
      </TouchableOpacity>
      <Text style={styles.tagline}>{t('contactPage.hero.tagline')}</Text>
      <Text style={styles.title}>{t('contactPage.hero.title')}</Text>
      <Text style={styles.titleHighlight}>{t('contactPage.hero.titleHighlight')}</Text>
      <Text style={styles.desc}>{t('contactPage.hero.description')}</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{t('contactPage.contactInfo.emailUs.title')}</Text>
        <Text style={styles.cardDesc}>{t('contactPage.contactInfo.emailUs.description')}</Text>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:contact@learn-to-win.com')}>
          <Text style={styles.link}>{t('contactPage.contactInfo.emailUs.email')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{t('contactPage.contactInfo.callUs.title')}</Text>
        <Text style={styles.cardDesc}>{t('contactPage.contactInfo.callUs.description')}</Text>
        <TouchableOpacity onPress={() => Linking.openURL('tel:+22243227748')}>
          <Text style={styles.link}>{t('contactPage.contactInfo.callUs.phone')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerDesc}>{t('contactPage.footer.description')}</Text>
        <Button variant="ghost" size="sm" onPress={() => navigation.navigate('About')}>
          {t('contactPage.footer.about')}
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 24, paddingTop: 56, paddingBottom: 48 },
  back: { marginBottom: 24 },
  backText: { fontSize: 14, color: '#1CB0F6', fontWeight: '500' },
  tagline: { fontSize: 14, color: '#1CB0F6', fontWeight: '600', marginBottom: 8 },
  title: { fontSize: 24, fontWeight: '700', color: '#111', marginBottom: 4 },
  titleHighlight: { fontSize: 24, fontWeight: '700', color: '#10b981', marginBottom: 16 },
  desc: { fontSize: 16, color: '#4b5563', lineHeight: 24, marginBottom: 24 },
  card: {
    backgroundColor: '#f8fafc',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  cardTitle: { fontSize: 18, fontWeight: '600', color: '#111', marginBottom: 8 },
  cardDesc: { fontSize: 14, color: '#64748b', marginBottom: 8 },
  link: { fontSize: 16, color: '#1CB0F6', fontWeight: '500' },
  footer: { marginTop: 24, paddingTop: 24, borderTopWidth: 1, borderTopColor: '#e5e7eb' },
  footerDesc: { fontSize: 14, color: '#6b7280', marginBottom: 12 },
});
