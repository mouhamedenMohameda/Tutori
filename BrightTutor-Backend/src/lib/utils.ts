import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility functions for BrightTutor

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
}

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

export const capitalizeFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export const getGradeColor = (grade: string): string => {
  const gradeColors: Record<string, string> = {
    'A': 'text-bright-green',
    'B': 'text-bright-blue', 
    'C': 'text-bright-orange',
    'D': 'text-bright-red',
    'F': 'text-bright-red'
  }
  return gradeColors[grade] || 'text-gray-500'
}

export const getRandomColor = (): string => {
  const colors = [
    'bg-bright-green',
    'bg-bright-blue',
    'bg-bright-orange', 
    'bg-bright-purple',
    'bg-light-green',
    'bg-light-blue',
    'bg-light-orange',
    'bg-light-purple'
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

export const sleep = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
} 