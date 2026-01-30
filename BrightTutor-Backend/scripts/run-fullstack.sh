#!/usr/bin/env bash
# Run BrightTutor-Backend + Tutori-MobileApp (Expo)
# Usage: from BrightTutor-Backend: ./scripts/run-fullstack.sh
# Or: npm run dev:fullstack

set -e
BACKEND_PORT="${PORT:-4000}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BACKEND_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
MOBILE_DIR="${MOBILE_DIR:-$BACKEND_DIR/../Tutori-MobileApp}"

if [ ! -d "$MOBILE_DIR" ] || [ ! -f "$MOBILE_DIR/package.json" ]; then
  echo "Tutori-MobileApp not found at: $MOBILE_DIR"
  echo "Set MOBILE_DIR to your Tutori-MobileApp path, or place it next to BrightTutor-Backend."
  exit 1
fi

echo "Backend: BrightTutor-Backend  (port $BACKEND_PORT)"
echo "Mobile:  Tutori-MobileApp     ($MOBILE_DIR)"
echo "API URL: http://localhost:${BACKEND_PORT}"
echo ""

# Start backend in background
cd "$BACKEND_DIR"
export PORT="$BACKEND_PORT"
npm run dev &
BACKEND_PID=$!

# Wait for backend to be up
echo "Waiting for backend..."
for i in {1..30}; do
  if curl -s -o /dev/null -w "%{http_code}" "http://localhost:${BACKEND_PORT}/api/health-check" 2>/dev/null | grep -q 200; then
    echo "Backend is up."
    break
  fi
  if [ $i -eq 30 ]; then
    kill $BACKEND_PID 2>/dev/null || true
    echo "Backend did not start in time."
    exit 1
  fi
  sleep 1
done

# Kill backend when script exits (e.g. Ctrl+C)
trap "kill $BACKEND_PID 2>/dev/null || true; exit" EXIT INT TERM

# Start Tutori-MobileApp (Expo) with API URL
cd "$MOBILE_DIR"
export EXPO_PUBLIC_API_URL="http://localhost:${BACKEND_PORT}"
echo "Starting Tutori-MobileApp (EXPO_PUBLIC_API_URL=$EXPO_PUBLIC_API_URL)..."
echo "Press w for web, a for Android, i for iOS."
# Use npx so expo is resolved from node_modules (avoids 'expo: command not found')
if [ ! -d "node_modules" ]; then
  echo "Installing Tutori-MobileApp dependencies..."
  npm install --legacy-peer-deps
fi
npx expo start --lan
