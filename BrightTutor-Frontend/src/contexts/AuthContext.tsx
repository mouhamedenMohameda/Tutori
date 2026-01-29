import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'auth_token';
const ROLE_KEY = 'auth_role';
const USER_ID_KEY = 'auth_user_id';
const SCHOOL_ID_KEY = 'auth_school_id';
const SCHOOL_NAME_KEY = 'auth_school_name';

export type AuthRole = 'STUDENT' | 'SCHOOL_ADMIN' | 'TEACHER' | 'PARENT';

export interface AuthUser {
  token: string;
  role: AuthRole;
  userId: string;
  schoolId?: string;
  schoolName?: string;
  student?: Record<string, unknown>;
  school?: Record<string, unknown>;
  teacher?: Record<string, unknown>;
  parent?: Record<string, unknown>;
}

interface AuthContextValue {
  user: AuthUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (user: AuthUser) => Promise<void>;
  logout: () => Promise<void>;
  getToken: () => Promise<string | null>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadStoredAuth = useCallback(async () => {
    try {
      const token = await AsyncStorage.getItem(TOKEN_KEY);
      const role = await AsyncStorage.getItem(ROLE_KEY) as AuthRole | null;
      const userId = await AsyncStorage.getItem(USER_ID_KEY);
      const schoolId = await AsyncStorage.getItem(SCHOOL_ID_KEY);
      const schoolName = await AsyncStorage.getItem(SCHOOL_NAME_KEY);
      if (token && role && userId) {
        setUser({
          token,
          role,
          userId,
          schoolId: schoolId ?? undefined,
          schoolName: schoolName ?? undefined,
        });
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadStoredAuth();
  }, [loadStoredAuth]);

  const login = useCallback(async (authUser: AuthUser) => {
    await AsyncStorage.setItem(TOKEN_KEY, authUser.token);
    await AsyncStorage.setItem(ROLE_KEY, authUser.role);
    await AsyncStorage.setItem(USER_ID_KEY, authUser.userId);
    if (authUser.schoolId) await AsyncStorage.setItem(SCHOOL_ID_KEY, authUser.schoolId);
    if (authUser.schoolName) await AsyncStorage.setItem(SCHOOL_NAME_KEY, authUser.schoolName);
    setUser(authUser);
  }, []);

  const logout = useCallback(async () => {
    await AsyncStorage.multiRemove([TOKEN_KEY, ROLE_KEY, USER_ID_KEY, SCHOOL_ID_KEY, SCHOOL_NAME_KEY]);
    setUser(null);
  }, []);

  const getToken = useCallback(async () => {
    return await AsyncStorage.getItem(TOKEN_KEY);
  }, []);

  const value: AuthContextValue = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
    getToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
