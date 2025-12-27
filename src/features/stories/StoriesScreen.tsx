/**
 * Stories Screen
 * Character stories and narratives
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

type StoriesScreenProps = NativeStackScreenProps<RootStackParamList, 'Stories'>;

export const StoriesScreen: React.FC<StoriesScreenProps> = ({ navigation }) => {
  const { t } = useLocalization();

  const characters = [
    { id: 'olive', name: t.stories.olive.name, icon: '🌿', greeting: t.stories.olive.greeting, desc: t.stories.olive.description },
    { id: 'child', name: t.stories.child.name, icon: '👧', greeting: t.stories.child.greeting, desc: t.stories.child.description },
    { id: 'bird', name: t.stories.bird.name, icon: '🐦', greeting: t.stories.bird.greeting, desc: t.stories.bird.description },
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
          <Text style={styles.title}>{t.stories.title}</Text>
          <Text style={styles.subtitle}>{t.stories.subtitle}</Text>
        </MotiView>

        {characters.map((character, index) => (
          <MotiView
            key={character.id}
            from={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', delay: 200 + index * 150 }}
            style={styles.characterCard}
          >
            <Text style={styles.characterIcon}>{character.icon}</Text>
            <View style={styles.characterInfo}>
              <Text style={styles.characterName}>{character.name}</Text>
              <Text style={styles.characterGreeting}>{character.greeting}</Text>
              <Text style={styles.characterDesc}>{character.desc}</Text>
            </View>
          </MotiView>
        ))}

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
    color: colors.warmBeigeDark,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  characterCard: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  characterIcon: {
    fontSize: 64,
    marginRight: spacing.md,
  },
  characterInfo: {
    flex: 1,
  },
  characterName: {
    ...typography.h3,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  characterGreeting: {
    ...typography.h4,
    color: colors.oliveGreen,
    marginBottom: spacing.sm,
  },
  characterDesc: {
    ...typography.body,
    color: colors.textSecondary,
  },
  backButton: {
    marginTop: spacing.lg,
  },
});
