import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/Button';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function HomeScreen() {
  const { t, isRTL } = useLanguage();
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.nav}>
        <Text style={styles.logo}>Tutori</Text>
        <View style={styles.navLinks}>
          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <Text style={styles.navLink}>{t('landingPage.navigation.about')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.navLink}>{t('landingPage.navigation.contact')}</Text>
          </TouchableOpacity>
          <LanguageSwitcher />
          <Button
            variant="success"
            size="md"
            onPress={() => navigation.navigate('Login')}
          >
            {t('landingPage.navigation.getStarted')}
          </Button>
        </View>
      </View>
      <View style={styles.hero}>
        <Text style={styles.heroTagline}>{t('landingPage.hero.tagline')}</Text>
        <Text style={styles.heroTitle}>{t('landingPage.hero.title')}</Text>
        <Text style={styles.heroHighlight}>{t('landingPage.hero.titleHighlight')}</Text>
        <Text style={styles.heroDesc}>
          {t('landingPage.hero.description')}{' '}
          <Text style={styles.heroDescHighlight}>{t('landingPage.hero.timeHighlight')}</Text>{' '}
          {t('landingPage.hero.descriptionEnd')}
        </Text>
        <Button variant="success" size="lg" onPress={() => navigation.navigate('Login')} style={styles.cta}>
          {t('landingPage.hero.registerAsStudent')}
        </Button>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerDesc}>{t('landingPage.footer.description')}</Text>
        <View style={styles.footerLinks}>
          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <Text style={styles.footerLink}>{t('landingPage.footer.about')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.footerLink}>{t('landingPage.footer.contact')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 24, paddingTop: 56, paddingBottom: 48 },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 48,
    flexWrap: 'wrap',
    gap: 12,
  },
  logo: { fontSize: 24, fontWeight: '700', color: '#111' },
  navLinks: { flexDirection: 'row', alignItems: 'center', gap: 16, flexWrap: 'wrap' },
  navLink: { fontSize: 14, fontWeight: '500', color: '#4b5563' },
  hero: { marginBottom: 48 },
  heroTagline: { fontSize: 14, color: '#1CB0F6', fontWeight: '600', marginBottom: 8 },
  heroTitle: { fontSize: 28, fontWeight: '700', color: '#111', marginBottom: 4 },
  heroHighlight: { fontSize: 28, fontWeight: '700', color: '#10b981', marginBottom: 16 },
  heroDesc: { fontSize: 16, color: '#4b5563', lineHeight: 24, marginBottom: 24 },
  heroDescHighlight: { fontWeight: '600', color: '#111' },
  cta: { alignSelf: 'flex-start' },
  footer: { borderTopWidth: 1, borderTopColor: '#e5e7eb', paddingTop: 24 },
  footerDesc: { fontSize: 14, color: '#6b7280', marginBottom: 12 },
  footerLinks: { flexDirection: 'row', gap: 16 },
  footerLink: { fontSize: 14, fontWeight: '500', color: '#1CB0F6' },
});
