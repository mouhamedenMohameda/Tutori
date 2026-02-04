#!/bin/bash
BASE="http://localhost:3001"

echo "=== TESTING MOBILE APP APIs ==="
echo ""

test_api() {
    local method=$1
    local endpoint=$2
    local data=$3
    local name=$4
    
    if [ "$method" == "GET" ]; then
        RESP=$(curl -s -w "\n%{http_code}" "$BASE$endpoint" 2>&1)
    else
        RESP=$(curl -s -w "\n%{http_code}" -X $method "$BASE$endpoint" -H "Content-Type: application/json" -d "$data" 2>&1)
    fi
    
    CODE=$(echo "$RESP" | tail -1)
    BODY=$(echo "$RESP" | head -n -1)
    
    if [[ "$CODE" == "200" || "$CODE" == "201" || "$CODE" == "400" || "$CODE" == "401" || "$CODE" == "403" || "$CODE" == "409" ]]; then
        echo "✅ $name ($CODE)"
    elif [[ "$CODE" == "404" ]]; then
        echo "❌ $name - NOT FOUND (404)"
    elif [[ "$CODE" == "500" ]]; then
        echo "⚠️  $name - SERVER ERROR (500)"
    else
        echo "❌ $name - CODE: $CODE"
    fi
}

echo "--- PUBLIC ENDPOINTS ---"
test_api GET "/api/health" "" "Health Check"
test_api GET "/api/schools/list" "" "Schools List"
test_api GET "/api/startup" "" "Startup"

echo ""
echo "--- AUTHENTICATION ---"
test_api POST "/api/student/register" '{"name":"Test","age":15,"schoolId":"1","grade":"premier"}' "Student Register"
test_api POST "/api/student/login" '{"username":"test","password":"test"}' "Student Login"
test_api POST "/api/teacher/login" '{"email":"t@t.com","password":"t"}' "Teacher Login"
test_api POST "/api/parent/login" '{"email":"t@t.com","password":"t"}' "Parent Login"
test_api POST "/api/school/login" '{"email":"t@t.com","password":"t"}' "School Login"
test_api POST "/api/platform-admin/auth" '{"email":"t","password":"t"}' "Platform Admin Auth"

echo ""
echo "--- STUDENT APIs (need auth) ---"
test_api GET "/api/student/dashboard/test-id" "" "Student Dashboard"
test_api GET "/api/student/curriculum/test-id/1/math" "" "Student Curriculum"
test_api GET "/api/student/streak?studentId=test" "" "Student Streak"
test_api GET "/api/student/quiz-subjects/test-id" "" "Quiz Subjects"
test_api GET "/api/student/learning-progress/test-id" "" "Learning Progress"
test_api GET "/api/student/v2/profile/test-id" "" "Student Profile v2"
test_api POST "/api/student/track-session" '{"studentId":"test"}' "Track Session"
test_api POST "/api/student/push-token" '{"studentId":"test","token":"test"}' "Push Token"

echo ""
echo "--- AI APIs ---"
test_api POST "/api/ai/tutor-chat" '{"message":"test"}' "AI Tutor Chat"
test_api POST "/api/ai/generate-quiz" '{"topic":"test"}' "AI Generate Quiz"
test_api POST "/api/ai/generate-hint" '{"question":"test"}' "AI Generate Hint"
test_api POST "/api/ai/translate-math-content" '{"content":"test"}' "AI Translate Math"

echo ""
echo "--- AUDIO/VOICE APIs ---"
test_api POST "/api/audio/text-to-speech" '{"text":"test"}' "Text to Speech"
test_api POST "/api/audio/speech-to-text" '{}' "Speech to Text"
test_api POST "/api/voice/synthesize" '{"text":"test"}' "Voice Synthesize"
test_api POST "/api/voice/transcribe" '{}' "Voice Transcribe"

echo ""
echo "--- COMMUNITY APIs ---"
test_api GET "/api/community/leaderboard/test" "" "Leaderboard"
test_api GET "/api/community/messages?classroomYear=1" "" "Community Messages"

echo ""
echo "--- OTHER APIs ---"
test_api POST "/api/image/analyze" '{}' "Image Analyze"
test_api POST "/api/certificate/generate" '{}' "Certificate Generate"

echo ""
echo "=== TEST COMPLETE ==="
