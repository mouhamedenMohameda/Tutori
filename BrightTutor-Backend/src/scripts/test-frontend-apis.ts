/**
 * Test the 8 APIs used by BrightTutor-Frontend.
 * Run with: npx tsx src/scripts/test-frontend-apis.ts
 * Backend must be running (e.g. npm run dev). Set BASE_URL to override (default http://localhost:4000).
 */
import '@/lib/env-loader'
import { generateToken } from '@/lib/auth'

const BASE_URL = (process.env.BASE_URL || 'http://localhost:4000').replace(/\/$/, '')

interface TestResult {
  name: string
  ok: boolean
  status?: number
  message?: string
  body?: unknown
}

async function fetchJson(
  path: string,
  options: RequestInit & { token?: string } = {}
): Promise<{ status: number; data: unknown }> {
  const { token, ...init } = options
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(init.headers as Record<string, string>),
  }
  if (token) headers['Authorization'] = `Bearer ${token}`
  const res = await fetch(`${BASE_URL}${path}`, { ...init, headers })
  let data: unknown
  try {
    data = await res.json()
  } catch {
    data = await res.text()
  }
  return { status: res.status, data }
}

async function runTest(
  name: string,
  fn: () => Promise<{ ok: boolean; status?: number; message?: string; body?: unknown }>
): Promise<TestResult> {
  try {
    const out = await fn()
    return { name, ok: out.ok, status: out.status, message: out.message, body: out.body }
  } catch (e) {
    return { name, ok: false, message: e instanceof Error ? e.message : String(e) }
  }
}

async function main(): Promise<void> {
  console.log('Testing frontend APIs at', BASE_URL, '\n')

  const results: TestResult[] = []

  // 1. Health
  results.push(
    await runTest('GET /api/health', async () => {
      const { status, data } = await fetchJson('/api/health')
      const ok = status === 200
      return { ok, status, body: data, message: ok ? undefined : `expected 200, got ${status}` }
    })
  )

  // 2. POST /api/student/login — validation (missing credentials)
  results.push(
    await runTest('POST /api/student/login (validation)', async () => {
      const { status, data } = await fetchJson('/api/student/login', {
        method: 'POST',
        body: JSON.stringify({}),
      })
      const ok = status === 400
      return { ok, status, body: data, message: ok ? undefined : `expected 400, got ${status}` }
    })
  )

  // 3. POST /api/school/login — validation
  results.push(
    await runTest('POST /api/school/login (validation)', async () => {
      const { status, data } = await fetchJson('/api/school/login', {
        method: 'POST',
        body: JSON.stringify({}),
      })
      const ok = status === 400
      return { ok, status, body: data, message: ok ? undefined : `expected 400, got ${status}` }
    })
  )

  // 4. POST /api/teacher/login — validation
  results.push(
    await runTest('POST /api/teacher/login (validation)', async () => {
      const { status, data } = await fetchJson('/api/teacher/login', {
        method: 'POST',
        body: JSON.stringify({}),
      })
      const ok = status === 400
      return { ok, status, body: data, message: ok ? undefined : `expected 400, got ${status}` }
    })
  )

  // 5. POST /api/parent/login — validation
  results.push(
    await runTest('POST /api/parent/login (validation)', async () => {
      const { status, data } = await fetchJson('/api/parent/login', {
        method: 'POST',
        body: JSON.stringify({}),
      })
      const ok = status === 400
      return { ok, status, body: data, message: ok ? undefined : `expected 400, got ${status}` }
    })
  )

  // 6–9. GET school/* without token → 401
  for (const path of ['/api/school/students', '/api/school/teachers', '/api/school/parents', '/api/school/subjects']) {
    results.push(
      await runTest(`GET ${path} (no token)`, async () => {
        const { status, data } = await fetchJson(path)
        const ok = status === 401
        return { ok, status, body: data, message: ok ? undefined : `expected 401, got ${status}` }
      })
    )
  }

  // Valid school token for protected routes (same secret as backend)
  const schoolToken = generateToken({
    schoolId: 'test-school-id',
    email: 'test@test.com',
    role: 'SCHOOL_ADMIN',
  })

  // 10–13. GET school/* with token → 200 + expected shape
  results.push(
    await runTest('GET /api/school/students (with token)', async () => {
      const { status, data } = await fetchJson('/api/school/students', { token: schoolToken })
      const body = data as { success?: boolean; students?: unknown[]; pagination?: unknown }
      const ok = status === 200 && body.success === true && Array.isArray(body.students)
      return {
        ok,
        status,
        body: data,
        message: ok ? undefined : `expected 200 + success + students array, got ${status}`,
      }
    })
  )
  results.push(
    await runTest('GET /api/school/teachers (with token)', async () => {
      const { status, data } = await fetchJson('/api/school/teachers', { token: schoolToken })
      const body = data as { success?: boolean; teachers?: unknown[]; pagination?: unknown }
      const ok = status === 200 && body.success === true && Array.isArray(body.teachers)
      return {
        ok,
        status,
        body: data,
        message: ok ? undefined : `expected 200 + success + teachers array, got ${status}`,
      }
    })
  )
  results.push(
    await runTest('GET /api/school/parents (with token)', async () => {
      const { status, data } = await fetchJson('/api/school/parents', { token: schoolToken })
      const body = data as { success?: boolean; parents?: unknown[] }
      const ok = status === 200 && body.success === true && Array.isArray(body.parents)
      return {
        ok,
        status,
        body: data,
        message: ok ? undefined : `expected 200 + success + parents array, got ${status}`,
      }
    })
  )
  results.push(
    await runTest('GET /api/school/subjects (with token)', async () => {
      const { status, data } = await fetchJson('/api/school/subjects', { token: schoolToken })
      const body = data as { success?: boolean; subjects?: unknown[] }
      const ok = status === 200 && body.success === true && Array.isArray(body.subjects)
      return {
        ok,
        status,
        body: data,
        message: ok ? undefined : `expected 200 + success + subjects array, got ${status}`,
      }
    })
  )

  // Summary
  const passed = results.filter((r) => r.ok).length
  const failed = results.filter((r) => !r.ok)
  console.log('Results:')
  for (const r of results) {
    console.log(r.ok ? '  ✓' : '  ✗', r.name, r.status != null ? `(${r.status})` : '', r.message || '')
  }
  console.log('\n' + passed + '/' + results.length + ' passed')
  if (failed.length) {
    console.log('\nFailed:')
    for (const r of failed) {
      console.log('  -', r.name, r.message || '', r.body != null ? JSON.stringify(r.body).slice(0, 120) : '')
    }
    process.exit(1)
  }
}

main().catch((err) => {
  console.error('Script error:', err)
  process.exit(1)
})
