// Voice processing utilities
export const transcribeAudio = async (audioBlob: Blob): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append('file', audioBlob, 'audio.webm');
    formData.append('model', 'whisper-1');

    const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: formData,
    });

    const result = await response.json();
    return result.text || '';
  } catch (error) {
    console.error('Transcription error:', error);
    return '';
  }
};

export const synthesizeSpeech = async (text: string): Promise<ArrayBuffer> => {
  try {
    // Remove emojis and special characters
    const cleanText = text.replace(/[^\x00-\x7F]/g, ''); // Remove non-ASCII characters
    
    const response = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'tts-1-hd',
        voice: 'nova',
        input: cleanText,
        speed: 1.0,
      }),
    });

    return await response.arrayBuffer();
  } catch (error) {
    console.error('Speech synthesis error:', error);
    throw error;
  }
}; 