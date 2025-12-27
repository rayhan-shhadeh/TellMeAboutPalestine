/**
 * Professional Language Switcher Component
 * Beautiful animated toggle between English and Arabic
 */

import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MotiView } from 'moti';
import { useLocalization, Language } from '../../localization';
import { colors, spacing, borderRadius, typography } from '../theme';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLocalization();

  const switchLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <Pressable onPress={switchLanguage} style={styles.container}>
      <MotiView
        style={styles.switchContainer}
        animate={{
          backgroundColor: colors.white,
        }}
      >
        {/* Sliding indicator */}
        <MotiView
          style={styles.indicator}
          animate={{
            translateX: language === 'en' ? 0 : 70,
          }}
          transition={{
            type: 'spring',
            damping: 15,
            stiffness: 150,
          }}
        />

        {/* English option */}
        <View style={styles.option}>
          <Text
            style={[
              styles.optionText,
              language === 'en' && styles.optionTextActive,
            ]}
          >
            EN
          </Text>
          <Text
            style={[
              styles.optionSubtext,
              language === 'en' && styles.optionSubtextActive,
            ]}
          >
            English
          </Text>
        </View>

        {/* Arabic option */}
        <View style={styles.option}>
          <Text
            style={[
              styles.optionText,
              language === 'ar' && styles.optionTextActive,
            ]}
          >
            ع
          </Text>
          <Text
            style={[
              styles.optionSubtext,
              language === 'ar' && styles.optionSubtextActive,
            ]}
          >
            العربية
          </Text>
        </View>
      </MotiView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    width: 160,
    height: 60,
    borderRadius: borderRadius.xl,
    padding: 4,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  indicator: {
    position: 'absolute',
    width: 76,
    height: 52,
    backgroundColor: colors.oliveGreen,
    borderRadius: borderRadius.lg,
    margin: 4,
    shadowColor: colors.oliveGreenDark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  option: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  optionText: {
    ...typography.h4,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textSecondary,
  },
  optionTextActive: {
    color: colors.white,
  },
  optionSubtext: {
    ...typography.caption,
    fontSize: 10,
    color: colors.textLight,
  },
  optionSubtextActive: {
    color: colors.white,
  },
});
