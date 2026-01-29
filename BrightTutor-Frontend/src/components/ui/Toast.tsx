import React from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import { useToast } from '../../hooks/useToast';

const { width } = Dimensions.get('window');

export function Toaster() {
  const { toasts, dismiss } = useToast();
  const visible = toasts.filter((t) => t.open).slice(0, 1);
  const top = visible[0];

  if (!top) return null;

  return (
    <View style={styles.container} pointerEvents="box-none">
      {visible.map((t) => (
        <Pressable
          key={t.id}
          style={[
            styles.toast,
            t.variant === 'destructive' && styles.toastDestructive,
            t.variant === 'success' && styles.toastSuccess,
          ]}
          onPress={() => dismiss(t.id)}
        >
          {t.title ? <Text style={styles.title}>{t.title}</Text> : null}
          {t.description ? (
            <Text style={styles.description}>{t.description}</Text>
          ) : null}
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 56,
    left: 16,
    right: 16,
    maxWidth: width - 32,
    alignSelf: 'center',
    zIndex: 9999,
  },
  toast: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  toastDestructive: {
    borderColor: '#fca5a5',
    backgroundColor: '#fef2f2',
  },
  toastSuccess: {
    borderColor: '#86efac',
    backgroundColor: '#f0fdf4',
  },
  title: { fontSize: 15, fontWeight: '600', color: '#111', marginBottom: 4 },
  description: { fontSize: 14, color: '#6b7280' },
});
