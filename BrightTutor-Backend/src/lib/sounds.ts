/**
 * Sound effects for exercises
 * Uses Web Audio API for better performance
 */

class SoundManager {
  private audioContext: AudioContext | null = null
  private sounds: Map<string, AudioBuffer> = new Map()

  async init() {
    if (typeof window === 'undefined') return
    
    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    } catch (error) {
      console.warn('Web Audio API not supported:', error)
    }
  }

  private async loadSound(name: string, frequency: number, duration: number, type: 'sine' | 'square' | 'triangle' = 'sine'): Promise<AudioBuffer | null> {
    if (!this.audioContext) return null

    try {
      const sampleRate = this.audioContext.sampleRate
      const buffer = this.audioContext.createBuffer(1, sampleRate * duration, sampleRate)
      const data = buffer.getChannelData(0)

      for (let i = 0; i < buffer.length; i++) {
        const t = i / sampleRate
        if (type === 'sine') {
          data[i] = Math.sin(2 * Math.PI * frequency * t) * 0.3
        } else if (type === 'square') {
          data[i] = Math.sign(Math.sin(2 * Math.PI * frequency * t)) * 0.3
        } else {
          data[i] = (2 / Math.PI) * Math.asin(Math.sin(2 * Math.PI * frequency * t)) * 0.3
        }
        // Add fade out
        const fadeOut = 1 - (i / buffer.length) * 0.5
        data[i] *= fadeOut
      }

      return buffer
    } catch (error) {
      console.warn(`Failed to create sound ${name}:`, error)
      return null
    }
  }

  async playCorrectSound() {
    if (!this.audioContext) return

    try {
      // Create a pleasant ascending chord (C-E-G)
      const frequencies = [523.25, 659.25, 783.99] // C5, E5, G5
      
      frequencies.forEach((freq, index) => {
        setTimeout(() => {
          const oscillator = this.audioContext!.createOscillator()
          const gainNode = this.audioContext!.createGain()
          
          oscillator.connect(gainNode)
          gainNode.connect(this.audioContext!.destination)
          
          oscillator.frequency.value = freq
          oscillator.type = 'sine'
          
          gainNode.gain.setValueAtTime(0.3, this.audioContext!.currentTime)
          gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext!.currentTime + 0.3)
          
          oscillator.start(this.audioContext!.currentTime)
          oscillator.stop(this.audioContext!.currentTime + 0.3)
        }, index * 50)
      })
    } catch (error) {
      console.warn('Failed to play correct sound:', error)
    }
  }

  async playIncorrectSound() {
    if (!this.audioContext) return

    try {
      // Duolingo-style wrong sound: Two-tone descending "error" sound
      // More pleasant than a harsh buzz
      const now = this.audioContext.currentTime
      
      // First tone (higher)
      const osc1 = this.audioContext.createOscillator()
      const gain1 = this.audioContext.createGain()
      osc1.connect(gain1)
      gain1.connect(this.audioContext.destination)
      
      osc1.frequency.setValueAtTime(400, now)
      osc1.frequency.exponentialRampToValueAtTime(300, now + 0.15)
      osc1.type = 'sine'
      
      gain1.gain.setValueAtTime(0.15, now)
      gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.15)
      
      osc1.start(now)
      osc1.stop(now + 0.15)
      
      // Second tone (lower, slightly delayed) - creates the "error" effect
      const osc2 = this.audioContext.createOscillator()
      const gain2 = this.audioContext.createGain()
      osc2.connect(gain2)
      gain2.connect(this.audioContext.destination)
      
      osc2.frequency.setValueAtTime(300, now + 0.05)
      osc2.frequency.exponentialRampToValueAtTime(200, now + 0.2)
      osc2.type = 'sine'
      
      gain2.gain.setValueAtTime(0.12, now + 0.05)
      gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.2)
      
      osc2.start(now + 0.05)
      osc2.stop(now + 0.2)
    } catch (error) {
      console.warn('Failed to play incorrect sound:', error)
    }
  }

  async playStreakCelebrationSound() {
    if (!this.audioContext) return

    try {
      // Celebration sound: Ascending fanfare (like Duolingo streak celebration)
      // Plays a pleasant ascending scale
      const now = this.audioContext.currentTime
      const notes = [523.25, 587.33, 659.25, 698.46, 783.99] // C5, D5, E5, F5, G5
      
      notes.forEach((freq, index) => {
        const oscillator = this.audioContext!.createOscillator()
        const gainNode = this.audioContext!.createGain()
        
        oscillator.connect(gainNode)
        gainNode.connect(this.audioContext!.destination)
        
        oscillator.frequency.value = freq
        oscillator.type = 'sine'
        
        const startTime = now + (index * 0.1)
        const duration = 0.2
        
        gainNode.gain.setValueAtTime(0, startTime)
        gainNode.gain.linearRampToValueAtTime(0.25, startTime + 0.05)
        gainNode.gain.linearRampToValueAtTime(0, startTime + duration)
        
        oscillator.start(startTime)
        oscillator.stop(startTime + duration)
      })
    } catch (error) {
      console.warn('Failed to play streak celebration sound:', error)
    }
  }
}

export const soundManager = new SoundManager()

// Initialize on client side
if (typeof window !== 'undefined') {
  soundManager.init()
}

