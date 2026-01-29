import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/Button';

export default function AboutScreen() {
  const { t } = useLanguage();
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Text style={styles.backText}>← {t('aboutPage.navigation.backToHome')}</Text>
      </TouchableOpacity>
      <Text style={styles.tagline}>{t('aboutPage.hero.tagline')}</Text>
      <Text style={styles.title}>{t('aboutPage.hero.title')}</Text>
      <Text style={styles.titleHighlight}>{t('aboutPage.hero.titleHighlight')}</Text>
      <Text style={styles.desc}>{t('aboutPage.hero.description')}</Text>
      <Text style={styles.sectionTitle}>{t('aboutPage.story.title')}</Text>
      <Text style={styles.paragraph}>{t('aboutPage.story.paragraph1')}</Text>
      <Text style={styles.paragraph}>{t('aboutPage.story.paragraph2')}</Text>
      <Text style={styles.paragraph}>{t('aboutPage.story.paragraph5')}</Text>
      <Text style={styles.paragraph}>{t('aboutPage.story.paragraph7')}</Text>
      <View style={styles.footer}>
        <Text style={styles.footerDesc}>{t('aboutPage.footer.description')}</Text>
        <Button variant="ghost" size="sm" onPress={() => navigation.navigate('Contact')}>
          {t('aboutPage.footer.contact')}
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
  desc: { fontSize: 16, color: '#4b5563', lineHeight: 24, marginBottom: 32 },
  sectionTitle: { fontSize: 20, fontWeight: '700', color: '#111', marginBottom: 16 },
  paragraph: { fontSize: 15, color: '#374151', lineHeight: 24, marginBottom: 12 },
  footer: { marginTop: 32, paddingTop: 24, borderTopWidth: 1, borderTopColor: '#e5e7eb' },
  footerDesc: { fontSize: 14, color: '#6b7280', marginBottom: 12 },
});
