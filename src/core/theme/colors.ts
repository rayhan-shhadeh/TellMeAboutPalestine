/**
 * Color palette inspired by Palestine
 * Designed for children aged 6-12
 * Accessible and warm
 */

export const colors = {
  // Primary colors
  oliveGreen: '#6B8E23',
  oliveGreenLight: '#8FBC3F',
  oliveGreenDark: '#556B2F',

  skyBlue: '#87CEEB',
  skyBlueLight: '#B0E0E6',
  skyBlueDark: '#4A90A4',

  warmBeige: '#F5DEB3',
  warmBeigLight: '#FAEBD7',
  warmBeigeDark: '#D2B48C',

  softRed: '#FF6B6B',
  softRedLight: '#FF8787',
  softRedDark: '#E55454',

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
