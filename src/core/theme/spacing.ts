/**
 * Spacing system for consistent layouts
 * Based on 8px grid system
 * Optimized for touch targets (minimum 44x44)
 */

export const spacing = {
  none: 0,
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
  huge: 96,
} as const;

/**
 * Border radius for rounded, friendly shapes
 */
export const borderRadius = {
  none: 0,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  round: 999, // For fully rounded buttons
} as const;

/**
 * Standard touch target sizes
 * Following accessibility guidelines
 */
export const touchTargets = {
  small: 36,
  medium: 44, // Minimum recommended
  large: 56,
  xlarge: 72,
} as const;

/**
 * Shadow elevations for depth
 */
export const shadows = {
  none: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 12,
  },
} as const;

export type SpacingSize = keyof typeof spacing;
export type BorderRadiusSize = keyof typeof borderRadius;
export type TouchTargetSize = keyof typeof touchTargets;
export type ShadowElevation = keyof typeof shadows;
