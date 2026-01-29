import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Pressable } from 'react-native';
import { useLanguage } from '../contexts/LanguageContext';
import { languages, type Language } from '../lib/i18n';

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.trigger}
        onPress={() => setIsOpen(true)}
        activeOpacity={0.8}
      >
        <Text style={styles.flag}>{languages[language].flag}</Text>
        <Text style={styles.name}>{languages[language].name}</Text>
      </TouchableOpacity>

      <Modal visible={isOpen} transparent animationType="fade">
        <Pressable style={styles.backdrop} onPress={() => setIsOpen(false)}>
          <View style={styles.dropdown}>
            {Object.entries(languages).map(([code, lang]) => (
              <TouchableOpacity
                key={code}
                style={[styles.option, language === code && styles.optionActive]}
                onPress={() => handleLanguageChange(code as Language)}
                activeOpacity={0.7}
              >
                <Text style={styles.optionFlag}>{lang.flag}</Text>
                <Text style={[styles.optionName, language === code && styles.optionNameActive]}>
                  {lang.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    gap: 6,
  },
  flag: { fontSize: 18 },
  name: { fontSize: 14, fontWeight: '500', color: '#374151' },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 56,
    paddingRight: 16,
  },
  dropdown: {
    backgroundColor: '#fff',
    borderRadius: 12,
    minWidth: 160,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    overflow: 'hidden',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 12,
  },
  optionActive: { backgroundColor: '#eff6ff' },
  optionFlag: { fontSize: 18 },
  optionName: { fontSize: 14, color: '#374151' },
  optionNameActive: { color: '#1d4ed8', fontWeight: '600' },
});
