/**
 * Progress Screen
 * Track learning progress, badges, and achievements
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { MotiView } from 'moti';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { useLocalization } from '../../localization';
import { SafeButton } from '../../core/components/SafeButton';
import { colors, typography, spacing, borderRadius } from '../../core/theme';

const { width } = Dimensions.get('window');

type ProgressScreenProps = NativeStackScreenProps<RootStackParamList, 'Progress'>;

export const ProgressScreen: React.FC<ProgressScreenProps> = ({ navigation }) => {
  const { t } = useLocalization();

  const achievements = [
    { id: '1', title: t.achievements.firstVisit, desc: t.achievements.firstVisitDesc, earned: true, icon: '🎉' },
    { id: '2', title: t.achievements.explorerBeginner, desc: t.achievements.explorerBeginnerDesc, earned: true, icon: '🗺️' },
    { id: '3', title: t.achievements.storyListener, desc: t.achievements.storyListenerDesc, earned: true, icon: '📖' },
    { id: '4', title: t.achievements.gamePlayer, desc: t.achievements.gamePlayerDesc, earned: false, icon: '🎮' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <MotiView
          from={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 600 }}
          style={styles.header}
        >
          <Text style={styles.title}>{t.progress.title}</Text>
          <Text style={styles.subtitle}>{t.progress.subtitle}</Text>
        </MotiView>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <MotiView
            from={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', delay: 200 }}
            style={styles.statCard}
          >
            <Text style={styles.statIcon}>⭐</Text>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>{t.progress.stars}</Text>
          </MotiView>

          <MotiView
            from={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', delay: 300 }}
            style={styles.statCard}
          >
            <Text style={styles.statIcon}>🏆</Text>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>{t.progress.badges}</Text>
          </MotiView>

          <MotiView
            from={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', delay: 400 }}
            style={styles.statCard}
          >
            <Text style={styles.statIcon}>✅</Text>
            <Text style={styles.statValue}>5</Text>
            <Text style={styles.statLabel}>{t.progress.completedChallenges}</Text>
          </MotiView>
        </View>

        {/* Achievements Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.progress.achievements}</Text>
          {achievements.map((achievement, index) => (
            <MotiView
              key={achievement.id}
              from={{ opacity: 0, translateX: -50 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ type: 'spring', delay: 500 + index * 100 }}
              style={[
                styles.achievementCard,
                !achievement.earned && styles.achievementCardLocked,
              ]}
            >
              <Text style={[
                styles.achievementIcon,
                !achievement.earned && styles.achievementIconLocked,
              ]}>
                {achievement.icon}
              </Text>
              <View style={styles.achievementInfo}>
                <Text style={[
                  styles.achievementTitle,
                  !achievement.earned && styles.achievementTextLocked,
                ]}>
                  {achievement.title}
                </Text>
                <Text style={[
                  styles.achievementDesc,
                  !achievement.earned && styles.achievementTextLocked,
                ]}>
                  {achievement.desc}
                </Text>
              </View>
              {achievement.earned && (
                <Text style={styles.checkmark}>✓</Text>
              )}
            </MotiView>
          ))}
        </View>

        {/* Encouragement Message */}
        <MotiView
          from={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', delay: 900 }}
          style={styles.encouragementCard}
        >
          <Text style={styles.encouragementText}>
            {t.progress.keepGoing}
          </Text>
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
    color: colors.gold,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xxl,
  },
  statCard: {
    width: (width - spacing.lg * 4) / 3,
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  statIcon: {
    fontSize: 40,
    marginBottom: spacing.xs,
  },
  statValue: {
    ...typography.h2,
    color: colors.textPrimary,
    marginBottom: spacing.xxs,
  },
  statLabel: {
    ...typography.caption,
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
  achievementCard: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  achievementCardLocked: {
    opacity: 0.5,
  },
  achievementIcon: {
    fontSize: 40,
    marginRight: spacing.md,
  },
  achievementIconLocked: {
    opacity: 0.3,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    ...typography.h4,
    color: colors.textPrimary,
    marginBottom: spacing.xxs,
  },
  achievementDesc: {
    ...typography.body,
    color: colors.textSecondary,
  },
  achievementTextLocked: {
    opacity: 0.5,
  },
  checkmark: {
    fontSize: 32,
    color: colors.success,
  },
  encouragementCard: {
    backgroundColor: colors.oliveGreenLight,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  encouragementText: {
    ...typography.h3,
    color: colors.white,
    textAlign: 'center',
  },
  backButton: {
    marginTop: spacing.lg,
  },
});
