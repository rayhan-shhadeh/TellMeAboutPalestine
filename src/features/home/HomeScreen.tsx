/**
 * Home Screen
 * Welcome screen with animated characters and navigation options
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
import { LanguageSwitcher } from '../../core/components/LanguageSwitcher';
import { colors, typography, spacing, borderRadius } from '../../core/theme';

const { width } = Dimensions.get('window');

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { t, language } = useLocalization();

  const getGreeting = (): string => {
    const hour = new Date().getHours();
    if (hour < 12) return t.home.greeting.morning;
    if (hour < 18) return t.home.greeting.afternoon;
    return t.home.greeting.evening;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Language Switcher - Floating at top */}
        <MotiView
          from={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', delay: 100 }}
          style={styles.languageSwitcherContainer}
        >
          <LanguageSwitcher />
        </MotiView>

        {/* Welcome Header */}
        <MotiView
          from={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 600, delay: 200 }}
          style={styles.header}
        >
          <Text style={styles.greeting}>{getGreeting()}</Text>
          <Text style={styles.title}>{t.home.welcome}</Text>
          <Text style={styles.subtitle}>{t.home.subtitle}</Text>
        </MotiView>

        {/* Character Mascots Preview */}
        <MotiView
          from={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            damping: 15,
            delay: 300,
          }}
          style={styles.charactersContainer}
        >
          <View style={styles.characterCard}>
            <View style={styles.characterCircle}>
              <Text style={styles.characterEmoji}>🌿</Text>
            </View>
            <Text style={styles.characterName}>{t.stories.olive.name}</Text>
          </View>

          <View style={styles.characterCard}>
            <View style={styles.characterCircle}>
              <Text style={styles.characterEmoji}>👧</Text>
            </View>
            <Text style={styles.characterName}>{t.stories.child.name}</Text>
          </View>

          <View style={styles.characterCard}>
            <View style={styles.characterCircle}>
              <Text style={styles.characterEmoji}>🐦</Text>
            </View>
            <Text style={styles.characterName}>{t.stories.bird.name}</Text>
          </View>
        </MotiView>

        {/* Navigation Cards */}
        <View style={styles.navigationGrid}>
          <MotiView
            from={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'spring', delay: 400 }}
          >
            <NavCard
              title={t.navigation.explore}
              icon="🗺️"
              color={colors.oliveGreen}
              onPress={() => navigation.navigate('Explore')}
            />
          </MotiView>

          <MotiView
            from={{ opacity: 0, translateX: 50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'spring', delay: 500 }}
          >
            <NavCard
              title={t.navigation.facts}
              icon="💡"
              color={colors.skyBlue}
              onPress={() => navigation.navigate('Facts')}
            />
          </MotiView>

          <MotiView
            from={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'spring', delay: 600 }}
          >
            <NavCard
              title={t.navigation.stories}
              icon="📖"
              color={colors.warmBeige}
              onPress={() => navigation.navigate('Stories')}
            />
          </MotiView>

          <MotiView
            from={{ opacity: 0, translateX: 50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'spring', delay: 700 }}
          >
            <NavCard
              title={t.navigation.games}
              icon="🎮"
              color={colors.softRed}
              onPress={() => navigation.navigate('Games')}
            />
          </MotiView>
        </View>

        {/* Progress Preview */}
        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', delay: 800 }}
          style={styles.progressCard}
        >
          <Text style={styles.progressTitle}>{t.progress.title}</Text>
          <View style={styles.progressStats}>
            <View style={styles.stat}>
              <Text style={styles.statValue}>⭐ 12</Text>
              <Text style={styles.statLabel}>{t.progress.stars}</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statValue}>🏆 3</Text>
              <Text style={styles.statLabel}>{t.progress.badges}</Text>
            </View>
          </View>
          <SafeButton
            title={t.navigation.progress}
            onPress={() => navigation.navigate('Progress')}
            variant="outline"
            size="small"
            style={styles.progressButton}
          />
        </MotiView>
      </ScrollView>
    </SafeAreaView>
  );
};

interface NavCardProps {
  title: string;
  icon: string;
  color: string;
  onPress: () => void;
}

const NavCard: React.FC<NavCardProps> = ({ title, icon, color, onPress }) => {
  return (
    <MotiView
      style={styles.navCard}
      from={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring' }}
    >
      <SafeButton
        title=""
        onPress={onPress}
        style={{ ...styles.navCardButton, backgroundColor: color }}
      >
        <Text style={styles.navCardIcon}>{icon}</Text>
        <Text style={styles.navCardTitle}>{title}</Text>
      </SafeButton>
    </MotiView>
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
  languageSwitcherContainer: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  greeting: {
    ...typography.h4,
    color: colors.oliveGreen,
    marginBottom: spacing.xs,
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
  charactersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: spacing.xxl,
    paddingHorizontal: spacing.md,
  },
  characterCard: {
    alignItems: 'center',
  },
  characterCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.sm,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  characterEmoji: {
    fontSize: 40,
  },
  characterName: {
    ...typography.caption,
    textAlign: 'center',
    maxWidth: 80,
  },
  navigationGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
  },
  navCard: {
    width: (width - spacing.lg * 3) / 2,
    marginBottom: spacing.md,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
  },
  navCardButton: {
    minHeight: 120,
    flexDirection: 'column',
    gap: spacing.sm,
  },
  navCardIcon: {
    fontSize: 48,
  },
  navCardTitle: {
    ...typography.h4,
    color: colors.textWhite,
    textAlign: 'center',
  },
  progressCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  progressTitle: {
    ...typography.h3,
    color: colors.textPrimary,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  progressStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: spacing.md,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    ...typography.h2,
    marginBottom: spacing.xs,
  },
  statLabel: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  progressButton: {
    marginTop: spacing.sm,
  },
});
