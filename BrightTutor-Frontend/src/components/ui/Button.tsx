import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle, ActivityIndicator } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  children: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const variantStyles: Record<ButtonVariant, ViewStyle> = {
  primary: { backgroundColor: '#58CC02', borderBottomWidth: 4, borderBottomColor: '#46a302' },
  secondary: { backgroundColor: '#1CB0F6', borderBottomWidth: 4, borderBottomColor: '#1899d6' },
  success: { backgroundColor: '#58CC02', borderBottomWidth: 4, borderBottomColor: '#46a302' },
  warning: { backgroundColor: '#FF9600', borderBottomWidth: 4, borderBottomColor: '#e68600' },
  danger: { backgroundColor: '#FF4B4B', borderBottomWidth: 4, borderBottomColor: '#e63939' },
  ghost: { backgroundColor: 'transparent', borderWidth: 2, borderColor: '#d1d5db' },
};

const sizeStyles: Record<ButtonSize, { paddingVertical: number; paddingHorizontal: number }> = {
  sm: { paddingVertical: 8, paddingHorizontal: 16 },
  md: { paddingVertical: 12, paddingHorizontal: 24 },
  lg: { paddingVertical: 16, paddingHorizontal: 32 },
  xl: { paddingVertical: 20, paddingHorizontal: 40 },
};

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  onPress,
  children,
  style,
  textStyle,
}: ButtonProps) {
  const isGhost = variant === 'ghost';
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.base,
        variantStyles[variant],
        sizeStyles[size],
        (disabled || loading) && styles.disabled,
        pressed && !disabled && !loading && styles.pressed,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={isGhost ? '#374151' : '#fff'} size="small" />
      ) : (
        <Text
          style={[
            styles.text,
            size === 'sm' && styles.textSm,
            size === 'lg' && styles.textLg,
            size === 'xl' && styles.textXl,
            isGhost && styles.textGhost,
            textStyle,
          ]}
        >
          {children}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  disabled: { opacity: 0.5 },
  pressed: { opacity: 0.9, transform: [{ scale: 0.98 }] },
  text: { color: '#fff', fontSize: 16, fontWeight: '700' },
  textSm: { fontSize: 14 },
  textLg: { fontSize: 18 },
  textXl: { fontSize: 20 },
  textGhost: { color: '#374151' },
});
