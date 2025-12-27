/**
 * Parents & Teachers Screen
 * Information and settings for adults
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { MotiView } from 'moti';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { useLocalization } from '../../localization';
import { SafeButton } from '../../core/components/SafeButton';
import { colors, typography, spacing, borderRadius } from '../../core/theme';

type ParentsScreenProps = NativeStackScreenProps<RootStackParamList, 'Parents'>;

export const ParentsScreen: React.FC<ParentsScreenProps> = ({ navigation }) => {
  const { t, language, setLanguage } = useLocalization();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <MotiView
          from={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 600 }}
          style={styles.header}
        >
          <Text style={styles.title}>{t.parents.title}</Text>
          <Text style={styles.subtitle}>{t.parents.subtitle}</Text>
        </MotiView>

        {/* Language Settings */}
        <MotiView
          from={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', delay: 200 }}
          style={styles.section}
        >
          <Text style={styles.sectionTitle}>Language / اللغة</Text>
          <View style={styles.languageButtons}>
            <SafeButton
              title="English"
              onPress={() => setLanguage('en')}
              variant={language === 'en' ? 'primary' : 'outline'}
              size="medium"
              style={styles.languageButton}
            />
            <SafeButton
              title="العربية"
              onPress={() => setLanguage('ar')}
              variant={language === 'ar' ? 'primary' : 'outline'}
              size="medium"
              style={styles.languageButton}
            />
          </View>
        </MotiView>

        {/* Learning Goals */}
        <MotiView
          from={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', delay: 300 }}
          style={styles.section}
        >
          <Text style={styles.sectionTitle}>{t.parents.learningGoals}</Text>
          <View style={styles.infoCard}>
            <Text style={styles.infoText}>
              ✓ Cultural awareness and identity{'\n'}
              ✓ Geographic knowledge{'\n'}
              ✓ Historical understanding{'\n'}
              ✓ Language development{'\n'}
              ✓ Critical thinking skills
            </Text>
          </View>
        </MotiView>

        {/* About Section */}
        <MotiView
          from={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', delay: 400 }}
          style={styles.section}
        >
          <Text style={styles.sectionTitle}>{t.parents.about}</Text>
          <View style={styles.infoCard}>
            <Text style={styles.infoText}>
              This app provides age-appropriate educational content about Palestine for children aged 6-12. All content is fact-based, hopeful, and designed to inspire curiosity and learning.
            </Text>
          </View>
        </MotiView>

        {/* Discussion Prompts */}
        <MotiView
          from={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', delay: 500 }}
          style={styles.section}
        >
          <Text style={styles.sectionTitle}>{t.parents.discussionPrompts}</Text>
          <View style={styles.infoCard}>
            <Text style={styles.infoText}>
              💬 "What was your favorite place you discovered today?"{'\n\n'}
              💬 "Which character do you like best and why?"{'\n\n'}
              💬 "What fact surprised you the most?"{'\n\n'}
              💬 "What would you like to learn more about?"
            </Text>
          </View>
        </MotiView>

        <SafeButton
          title={t.common.back}
          onPress={() => navigation.goBack()}
          variant="outline"
          style={styles.backButton}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    padding: spacing.lg,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  title: {
    ...typography.h1,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  languageButtons: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  languageButton: {
    flex: 1,
  },
  infoCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoText: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    lineHeight: (typography.bodyLarge.lineHeight || 24) * 1.2,
  },
  backButton: {
    marginTop: spacing.lg,
  },
});
