/**
 * SafeButton component
 * Child-friendly button with animations
 * Large touch targets and visual feedback
 */

import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  PressableProps,
} from 'react-native';
import { MotiView } from 'moti';
import { colors, typography, spacing, borderRadius, shadows } from '../theme';

interface SafeButtonProps extends Omit<PressableProps, 'style'> {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const SafeButton: React.FC<SafeButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  icon,
  disabled = false,
  style,
  textStyle,
  ...props
}) => {
  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      ...styles.base,
      ...styles[size],
    };

    if (disabled) {
      return { ...baseStyle, ...styles.disabled };
    }

    switch (variant) {
      case 'primary':
        return { ...baseStyle, ...styles.primary };
      case 'secondary':
        return { ...baseStyle, ...styles.secondary };
      case 'outline':
        return { ...baseStyle, ...styles.outline };
      default:
        return baseStyle;
    }
  };

  const getTextStyle = (): TextStyle => {
    const baseTextStyle: TextStyle = {
      ...styles.text,
    };

    if (disabled) {
      return { ...baseTextStyle, color: colors.textLight };
    }

    switch (variant) {
      case 'primary':
        return { ...baseTextStyle, color: colors.textWhite };
      case 'secondary':
        return { ...baseTextStyle, color: colors.textWhite };
      case 'outline':
        return { ...baseTextStyle, color: colors.oliveGreen };
      default:
        return baseTextStyle;
    }
  };

  return (
    <Pressable onPress={onPress} disabled={disabled} {...props}>
      {({ pressed }) => (
        <MotiView
          style={[getButtonStyle(), style]}
          animate={{
            scale: pressed ? 0.95 : 1,
          }}
          transition={{
            type: 'timing',
            duration: 100,
          }}
        >
          {icon}
          <Text style={[getTextStyle(), textStyle]}>{title}</Text>
        </MotiView>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.lg,
    ...shadows.md,
  },
  small: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    minHeight: 36,
  },
  medium: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    minHeight: 44,
  },
  large: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    minHeight: 56,
  },
  primary: {
    backgroundColor: colors.buttonPrimary,
  },
  secondary: {
    backgroundColor: colors.buttonSecondary,
  },
  outline: {
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.oliveGreen,
  },
  disabled: {
    backgroundColor: colors.gray,
    opacity: 0.5,
  },
  text: {
    ...typography.button,
    textAlign: 'center',
  },
});
