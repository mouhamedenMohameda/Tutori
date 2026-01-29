/**
 * API client for BrightTutor backend.
 * Uses EXPO_PUBLIC_API_URL (e.g. http://localhost:4000) for web/mobile.
 */
const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:4000';

export function getApiUrl(): string {
  return API_URL.replace(/\/$/, '');
}

export async function apiFetch<T = unknown>(
  path: string,
  options: RequestInit & { token?: string } = {}
): Promise<T> {
  const { token, ...fetchOptions } = options;
  const url = path.startsWith('http') ? path : `${getApiUrl()}${path.startsWith('/') ? path : `/${path}`}`;
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(typeof (fetchOptions.headers as Record<string, string>) === 'object' ? fetchOptions.headers : {}),
  };
  if (token) {
    (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
  }
  const res = await fetch(url, { ...fetchOptions, headers });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error((data as { error?: string }).error || `HTTP ${res.status}`);
  }
  return data as T;
}

export const api = {
  student: {
    login: (body: { username?: string; email?: string; password: string }) =>
      apiFetch<{ success: boolean; token: string; student: Record<string, unknown> }>('/api/student/login', {
        method: 'POST',
        body: JSON.stringify(body),
      }),
  },
  school: {
    login: (body: { email: string; password: string }) =>
      apiFetch<{ success: boolean; token: string; school: Record<string, unknown> }>('/api/school/login', {
        method: 'POST',
        body: JSON.stringify(body),
      }),
  },
  teacher: {
    login: (body: { email?: string; username?: string; password: string }) =>
      apiFetch<{ success: boolean; token: string; teacher: Record<string, unknown> }>('/api/teacher/login', {
        method: 'POST',
        body: JSON.stringify(body),
      }),
  },
  parent: {
    login: (body: { email: string; password: string }) =>
      apiFetch<{ success: boolean; token: string; parent: Record<string, unknown> }>('/api/parent/login', {
        method: 'POST',
        body: JSON.stringify(body),
      }),
  },
};
