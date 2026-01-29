import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { api } from '../api/client';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import LanguageSwitcher from '../components/LanguageSwitcher';
import type { AuthRole } from '../contexts/AuthContext';

type UserType = 'student' | 'parent' | 'teacher' | 'admin';

const USER_TYPES: { id: UserType; labelKey: string; icon: string; role: AuthRole; apiKey: keyof typeof api }[] = [
  { id: 'student', labelKey: 'loginPage.userTypes.student', icon: '👶', role: 'STUDENT', apiKey: 'student' },
  { id: 'parent', labelKey: 'loginPage.userTypes.parent', icon: '👨‍👩‍👧‍👦', role: 'PARENT', apiKey: 'parent' },
  { id: 'teacher', labelKey: 'loginPage.userTypes.teacher', icon: '👨‍🏫', role: 'TEACHER', apiKey: 'teacher' },
  { id: 'admin', labelKey: 'loginPage.userTypes.admin', icon: '🏫', role: 'SCHOOL_ADMIN', apiKey: 'school' },
];

function checkIfBacStudent(student: Record<string, unknown> | undefined): boolean {
  if (!student) return false;
  const classroomYear = String(student.classroomYear || '').trim().toUpperCase();
  if (classroomYear === 'BAC' || classroomYear === 'YEAR5' || classroomYear === 'YEAR 5' || classroomYear.includes('BAC')) return true;
  const grade = String(student.grade || '').toLowerCase();
  if (grade.includes('bac') || grade.includes('terminal')) return true;
  const className = String(student.className || '').toLowerCase();
  if (className.includes('bac') || className.includes('terminal')) return true;
  return false;
}

export default function LoginScreen() {
  const { t, isRTL } = useLanguage();
  const { login } = useAuth();
  const [userType, setUserType] = useState<UserType>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const config = USER_TYPES.find((c) => c.id === userType)!;
  const isEmail = userType === 'teacher' || userType === 'admin';
  const isParent = userType === 'parent';
  const inputLabel = userType === 'student' ? t('loginPage.inputLabels.studentUsername') : userType === 'parent' ? t('loginPage.inputLabels.parentUsername') : t('loginPage.inputLabels.adminEmail');
  const placeholder = userType === 'student' ? t('loginPage.placeholders.studentUsername') : userType === 'parent' ? t('loginPage.placeholders.parentUsername') : userType === 'teacher' ? t('loginPage.placeholders.teacherEmail') : t('loginPage.placeholders.adminEmail');
  const buttonText = userType === 'student' ? t('loginPage.buttonTexts.startLearning') : userType === 'parent' ? t('loginPage.buttonTexts.viewChildProgress') : userType === 'teacher' ? t('loginPage.buttonTexts.openDashboard') : t('loginPage.buttonTexts.adminDashboard');

  const handleLogin = async () => {
    setError('');
    if (!password.trim()) {
      setError(t('loginPage.messages.loginFailed'));
      return;
    }
    const identifier = email.trim();
    if (!identifier) {
      setError(t('loginPage.messages.loginFailed'));
      return;
    }
    setLoading(true);
    try {
      if (config.apiKey === 'student') {
        const data = await api.student.login({ username: identifier, email: identifier, password });
        if (!data.student?.id) throw new Error(t('loginPage.messages.loginFailed'));
        await login({
          token: data.token,
          role: 'STUDENT',
          userId: (data.student as any).id,
          schoolId: (data.student as any).schoolId,
          student: data.student as Record<string, unknown>,
        });
      } else if (config.apiKey === 'school') {
        const data = await api.school.login({ email: identifier, password });
        await login({
          token: data.token,
          role: 'SCHOOL_ADMIN',
          userId: (data.school as any).id,
          schoolId: (data.school as any).id,
          schoolName: (data.school as any).schoolName,
          school: data.school as Record<string, unknown>,
        });
      } else if (config.apiKey === 'teacher') {
        const data = await api.teacher.login({ email: identifier, username: identifier, password });
        await login({
          token: data.token,
          role: 'TEACHER',
          userId: (data.teacher as any).id,
          schoolId: (data.teacher as any).schoolId,
          teacher: data.teacher as Record<string, unknown>,
        });
      } else if (config.apiKey === 'parent') {
        const data = await api.parent.login({ email: identifier, password });
        await login({
          token: data.token,
          role: 'PARENT',
          userId: (data.parent as any).id,
          schoolId: (data.parent as any).schoolId,
          parent: data.parent as Record<string, unknown>,
        });
      }
    } catch (e: any) {
      setError(e?.message || t('loginPage.messages.loginFailed'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        <View style={styles.headerRow}>
          <Text style={styles.backLink}>← {t('loginPage.backToHome')}</Text>
          <LanguageSwitcher />
        </View>
        <View style={styles.hero}>
          <Text style={styles.welcome}>{t('loginPage.welcomeBack')}</Text>
          <Text style={styles.subtitle}>{t('loginPage.signInToTutori')}</Text>
        </View>

        <Card style={styles.card}>
          <CardHeader>
            <CardTitle>{t('loginPage.signIn')} 🚀</CardTitle>
            <CardDescription>{t('loginPage.chooseAccountType')}</CardDescription>
          </CardHeader>
          <CardContent>
            <View style={styles.tabs}>
              {USER_TYPES.map((type) => (
                <Button
                  key={type.id}
                  variant={userType === type.id ? 'success' : 'ghost'}
                  size="sm"
                  onPress={() => setUserType(type.id)}
                  style={styles.tabButton}
                >
                  {t(type.labelKey)}
                </Button>
              ))}
            </View>
            <Text style={styles.inputLabel}>{inputLabel}</Text>
            <TextInput
              style={styles.input}
              placeholder={placeholder}
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType={isEmail ? 'email-address' : 'default'}
              editable={!loading}
            />
            <Text style={styles.inputLabel}>{t('loginPage.inputLabels.password')}</Text>
            <TextInput
              style={styles.input}
              placeholder={t('loginPage.placeholders.password')}
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              editable={!loading}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <Button loading={loading} onPress={handleLogin} style={styles.submitButton}>
              {buttonText}
            </Button>
          </CardContent>
        </Card>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1e40af' },
  scroll: { padding: 24, paddingTop: 56, maxWidth: 420, width: '100%', alignSelf: 'center' },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  backLink: { fontSize: 14, color: '#fff' },
  hero: { marginBottom: 24 },
  welcome: { fontSize: 28, fontWeight: '700', color: '#fff', marginBottom: 4 },
  subtitle: { fontSize: 16, color: 'rgba(255,255,255,0.9)' },
  card: { marginBottom: 24 },
  tabs: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 20 },
  tabButton: { marginRight: 0 },
  inputLabel: { fontSize: 14, fontWeight: '500', color: '#374151', marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 16,
    color: '#111',
    backgroundColor: '#fff',
  },
  error: { color: '#dc2626', marginBottom: 12, fontSize: 14 },
  submitButton: { marginTop: 8 },
});
