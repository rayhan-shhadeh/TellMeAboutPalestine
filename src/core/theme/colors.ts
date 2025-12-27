/**
 * Color palette inspired by Palestine
 * Designed for children aged 6-12
 * Accessible and warm
 */

export const colors = {
  // Primary colors - Enhanced with more vibrant tones
  oliveGreen: '#7CB342',
  oliveGreenLight: '#9CCC65',
  oliveGreenDark: '#558B2F',

  skyBlue: '#29B6F6',
  skyBlueLight: '#4FC3F7',
  skyBlueDark: '#0288D1',

  warmBeige: '#FFD54F',
  warmBeigLight: '#FFE082',
  warmBeigeDark: '#FFA000',

  softRed: '#FF5252',
  softRedLight: '#FF867F',
  softRedDark: '#D32F2F',

  // Vibrant accent colors for engaging UI
  vibrantPurple: '#AB47BC',
  vibrantOrange: '#FF9800',
  vibrantPink: '#EC407A',
  vibrantTeal: '#26A69A',
  vibrantIndigo: '#5C6BC0',

  // Neutral colors
  white: '#FFFFFF',
  cream: '#FFFEF7',
  lightGray: '#F5F5F5',
  gray: '#CCCCCC',
  darkGray: '#666666',
  black: '#333333',

  // Semantic colors
  success: '#4CAF50',
  warning: '#FFA726',
  error: '#EF5350',
  info: '#42A5F5',

  // Background colors
  background: '#FFFEF7',
  backgroundSecondary: '#F5F5F5',

  // Text colors
  textPrimary: '#333333',
  textSecondary: '#666666',
  textLight: '#999999',
  textWhite: '#FFFFFF',

  // Gamification colors
  gold: '#FFD700',
  silver: '#C0C0C0',
  bronze: '#CD7F32',
  star: '#FFC107',

  // Interactive states
  buttonPrimary: '#6B8E23',
  buttonPrimaryHover: '#8FBC3F',
  buttonPrimaryPressed: '#556B2F',
  buttonSecondary: '#87CEEB',
  buttonSecondaryHover: '#B0E0E6',
  buttonSecondaryPressed: '#4A90A4',

  // Overlay and shadow
  overlay: 'rgba(0, 0, 0, 0.3)',
  shadow: 'rgba(0, 0, 0, 0.1)',
  shadowDark: 'rgba(0, 0, 0, 0.2)',
} as const;

export type ColorName = keyof typeof colors;
