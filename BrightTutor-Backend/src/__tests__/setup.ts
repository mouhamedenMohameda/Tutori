process.env.NODE_ENV = 'test'
process.env.JWT_SECRET =
  process.env.JWT_SECRET || 'test-jwt-secret-at-least-32-characters-long'
process.env.CRON_SECRET =
  process.env.CRON_SECRET || 'test-cron-secret-for-tests'
