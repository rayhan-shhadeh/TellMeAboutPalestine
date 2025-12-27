/**
 * Facts Screen
 * Fun facts and statistics about Palestine
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

type FactsScreenProps = NativeStackScreenProps<RootStackParamList, 'Facts'>;

export const FactsScreen: React.FC<FactsScreenProps> = ({ navigation }) => {
  const { t } = useLocalization();

  const facts = [
    { id: '1', category: t.facts.population, icon: '👥', fact: 'Over 14 million Palestinians worldwide', color: colors.skyBlue },
    { id: '2', category: t.facts.culture, icon: '🎨', fact: 'Home to beautiful embroidery art', color: colors.warmBeige },
    { id: '3', category: t.facts.food, icon: '🍽️', fact: 'Delicious dishes like Maqluba and Knafeh', color: colors.softRed },
    { id: '4', category: t.facts.symbols, icon: '🕊️', fact: 'The olive tree is a symbol of peace', color: colors.oliveGreen },
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
          <Text style={styles.title}>{t.facts.title}</Text>
          <Text style={styles.subtitle}>{t.facts.subtitle}</Text>
        </MotiView>

        <MotiView
          from={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', delay: 200 }}
          style={styles.didYouKnowCard}
        >
          <Text style={styles.didYouKnowTitle}>{t.facts.didYouKnow}</Text>
          <Text style={styles.didYouKnowText}>
            Palestine is home to some of the oldest olive trees in the world, some over 5,000 years old! 🌳
          </Text>
        </MotiView>

        {facts.map((fact, index) => (
          <MotiView
            key={fact.id}
            from={{ opacity: 0, translateX: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'spring', delay: 300 + index * 100 }}
            style={[styles.factCard, { borderLeftColor: fact.color }]}
          >
            <View style={styles.factHeader}>
              <Text style={styles.factIcon}>{fact.icon}</Text>
              <Text style={styles.factCategory}>{fact.category}</Text>
            </View>
            <Text style={styles.factText}>{fact.fact}</Text>
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
    color: colors.skyBlueDark,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  didYouKnowCard: {
    backgroundColor: colors.gold,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.xl,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  didYouKnowTitle: {
    ...typography.h3,
    color: colors.white,
    marginBottom: spacing.sm,
  },
  didYouKnowText: {
    ...typography.bodyLarge,
    color: colors.white,
  },
  factCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    borderLeftWidth: 6,
    padding: spacing.lg,
    marginBottom: spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  factHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  factIcon: {
    fontSize: 32,
    marginRight: spacing.sm,
  },
  factCategory: {
    ...typography.h4,
    color: colors.textPrimary,
  },
  factText: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
  },
  backButton: {
    marginTop: spacing.lg,
  },
});
