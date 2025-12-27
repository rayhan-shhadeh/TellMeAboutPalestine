/**
 * Games Screen
 * Interactive games and challenges
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

type GamesScreenProps = NativeStackScreenProps<RootStackParamList, 'Games'>;

export const GamesScreen: React.FC<GamesScreenProps> = ({ navigation }) => {
  const { t } = useLocalization();

  const games = [
    { id: '1', name: t.games.puzzles, icon: '🧩', difficulty: 'easy' },
    { id: '2', name: t.games.matching, icon: '🎴', difficulty: 'medium' },
    { id: '3', name: t.games.quiz, icon: '❓', difficulty: 'medium' },
    { id: '4', name: t.games.memory, icon: '🧠', difficulty: 'easy' },
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
          <Text style={styles.title}>{t.games.title}</Text>
          <Text style={styles.subtitle}>{t.games.subtitle}</Text>
        </MotiView>

        <View style={styles.gamesGrid}>
          {games.map((game, index) => (
            <MotiView
              key={game.id}
              from={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', delay: 200 + index * 100 }}
              style={styles.gameCard}
            >
              <View style={styles.gameIconContainer}>
                <Text style={styles.gameIcon}>{game.icon}</Text>
              </View>
              <Text style={styles.gameName}>{game.name}</Text>
              <SafeButton
                title={t.games.play}
                onPress={() => {
                  if (game.id === '4') {
                    // Memory Game is implemented
                    navigation.navigate('MemoryGame');
                  } else {
                    // Other games coming soon
                    alert('Coming soon! 🎮');
                  }
                }}
                size="small"
                style={styles.playButton}
              />
            </MotiView>
          ))}
        </View>

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
    color: colors.softRed,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  gamesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
  },
  gameCard: {
    width: (width - spacing.lg * 3) / 2,
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  gameIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.softRedLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  gameIcon: {
    fontSize: 40,
  },
  gameName: {
    ...typography.h4,
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  playButton: {
    width: '100%',
  },
  backButton: {
    marginTop: spacing.lg,
  },
});
