/**
 * Animation presets for consistent, child-friendly motion
 * Gentle, playful, and engaging
 * No sudden movements or fast flashing
 */

import { Easing } from 'react-native-reanimated';

/**
 * Timing configurations
 */
export const durations = {
  instant: 0,
  fast: 200,
  normal: 300,
  slow: 500,
  verySlow: 800,
  celebration: 1200,
} as const;

/**
 * Easing functions for natural motion
 */
export const easings = {
  linear: Easing.linear,
  easeIn: Easing.ease,
  easeOut: Easing.out(Easing.ease),
  easeInOut: Easing.inOut(Easing.ease),
  bounce: Easing.bounce,
  elastic: Easing.elastic(1),
} as const;

/**
 * Common animation presets
 */
export const animations = {
  // Fade animations
  fadeIn: {
    from: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { type: 'timing' as const, duration: durations.normal },
  },
  fadeOut: {
    from: { opacity: 1 },
    animate: { opacity: 0 },
    transition: { type: 'timing' as const, duration: durations.normal },
  },

  // Scale animations
  scaleIn: {
    from: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: 'spring' as const, damping: 15, stiffness: 150 },
  },
  scaleOut: {
    from: { scale: 1, opacity: 1 },
    animate: { scale: 0.8, opacity: 0 },
    transition: { type: 'timing' as const, duration: durations.fast },
  },

  // Slide animations
  slideInLeft: {
    from: { translateX: -100, opacity: 0 },
    animate: { translateX: 0, opacity: 1 },
    transition: { type: 'spring' as const, damping: 20, stiffness: 100 },
  },
  slideInRight: {
    from: { translateX: 100, opacity: 0 },
    animate: { translateX: 0, opacity: 1 },
    transition: { type: 'spring' as const, damping: 20, stiffness: 100 },
  },
  slideInUp: {
    from: { translateY: 100, opacity: 0 },
    animate: { translateY: 0, opacity: 1 },
    transition: { type: 'spring' as const, damping: 20, stiffness: 100 },
  },
  slideInDown: {
    from: { translateY: -100, opacity: 0 },
    animate: { translateY: 0, opacity: 1 },
    transition: { type: 'spring' as const, damping: 20, stiffness: 100 },
  },

  // Bounce animation for celebrations
  bounce: {
    from: { scale: 1 },
    animate: { scale: 1.1 },
    transition: {
      type: 'timing' as const,
      duration: durations.normal,
      easing: easings.bounce,
    },
  },

  // Gentle float animation
  float: {
    from: { translateY: 0 },
    animate: { translateY: -10 },
    transition: {
      type: 'timing' as const,
      duration: durations.slow,
      easing: easings.easeInOut,
      loop: true,
      repeatReverse: true,
    },
  },

  // Button press animation
  buttonPress: {
    from: { scale: 1 },
    animate: { scale: 0.95 },
    transition: { type: 'timing' as const, duration: durations.fast },
  },

  // Celebration animation
  celebrate: {
    from: { scale: 0, rotate: '-180deg', opacity: 0 },
    animate: { scale: 1, rotate: '0deg', opacity: 1 },
    transition: {
      type: 'spring' as const,
      damping: 10,
      stiffness: 100,
      duration: durations.celebration,
    },
  },

  // Gentle pulse for attention
  pulse: {
    from: { scale: 1, opacity: 1 },
    animate: { scale: 1.05, opacity: 0.8 },
    transition: {
      type: 'timing' as const,
      duration: durations.slow,
      easing: easings.easeInOut,
      loop: true,
      repeatReverse: true,
    },
  },
} as const;

export type AnimationPreset = keyof typeof animations;
