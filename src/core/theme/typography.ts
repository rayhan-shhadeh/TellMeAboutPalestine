/**
 * Typography system for child-friendly readability
 * Large sizes, clear hierarchy
 * Supports Arabic and English
 */

import { TextStyle } from 'react-native';
import { colors } from './colors';

export const fontSizes = {
  tiny: 10,
  small: 14,
  medium: 16,
  large: 20,
  xlarge: 24,
  xxlarge: 32,
  huge: 40,
  massive: 48,
} as const;

export const fontWeights = {
  regular: '400' as TextStyle['fontWeight'],
  medium: '500' as TextStyle['fontWeight'],
  semibold: '600' as TextStyle['fontWeight'],
  bold: '700' as TextStyle['fontWeight'],
  extrabold: '800' as TextStyle['fontWeight'],
} as const;

export const lineHeights = {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.8,
  loose: 2,
} as const;

/**
 * Typography styles for consistent text rendering
 */
export const typography = {
  // Headings
  h1: {
    fontSize: fontSizes.massive,
    fontWeight: fontWeights.bold,
    lineHeight: fontSizes.massive * lineHeights.tight,
    color: colors.textPrimary,
  } as TextStyle,

  h2: {
    fontSize: fontSizes.huge,
    fontWeight: fontWeights.bold,
    lineHeight: fontSizes.huge * lineHeights.tight,
    color: colors.textPrimary,
  } as TextStyle,

  h3: {
    fontSize: fontSizes.xxlarge,
    fontWeight: fontWeights.semibold,
    lineHeight: fontSizes.xxlarge * lineHeights.normal,
    color: colors.textPrimary,
  } as TextStyle,

  h4: {
    fontSize: fontSizes.xlarge,
    fontWeight: fontWeights.semibold,
    lineHeight: fontSizes.xlarge * lineHeights.normal,
    color: colors.textPrimary,
  } as TextStyle,

  // Body text
  body: {
    fontSize: fontSizes.large,
    fontWeight: fontWeights.regular,
    lineHeight: fontSizes.large * lineHeights.relaxed,
    color: colors.textPrimary,
  } as TextStyle,

  bodyLarge: {
    fontSize: fontSizes.xlarge,
    fontWeight: fontWeights.regular,
    lineHeight: fontSizes.xlarge * lineHeights.relaxed,
    color: colors.textPrimary,
  } as TextStyle,

  bodySmall: {
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.regular,
    lineHeight: fontSizes.medium * lineHeights.normal,
    color: colors.textSecondary,
  } as TextStyle,

  // Special text
  button: {
    fontSize: fontSizes.large,
    fontWeight: fontWeights.semibold,
    lineHeight: fontSizes.large * lineHeights.tight,
    color: colors.textWhite,
  } as TextStyle,

  caption: {
    fontSize: fontSizes.small,
    fontWeight: fontWeights.regular,
    lineHeight: fontSizes.small * lineHeights.normal,
    color: colors.textLight,
  } as TextStyle,

  label: {
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.medium,
    lineHeight: fontSizes.medium * lineHeights.normal,
    color: colors.textSecondary,
  } as TextStyle,

  // Interactive elements
  link: {
    fontSize: fontSizes.large,
    fontWeight: fontWeights.medium,
    lineHeight: fontSizes.large * lineHeights.normal,
    color: colors.skyBlueDark,
    textDecorationLine: 'underline',
  } as TextStyle,
} as const;

export type TypographyVariant = keyof typeof typography;
