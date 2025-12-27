/**
 * Explore Screen
 * Interactive map and places to discover
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

type ExploreScreenProps = NativeStackScreenProps<RootStackParamList, 'Explore'>;

export const ExploreScreen: React.FC<ExploreScreenProps> = ({ navigation }) => {
  const { t } = useLocalization();

  const places = [
    { id: '1', name: 'Jerusalem', nameAr: 'القدس', icon: '🕌', type: 'city' },
    { id: '2', name: 'Olive Grove', nameAr: 'بستان الزيتون', icon: '🌳', type: 'nature' },
    { id: '3', name: 'Mediterranean Sea', nameAr: 'البحر المتوسط', icon: '🌊', type: 'nature' },
    { id: '4', name: 'Old Markets', nameAr: 'الأسواق القديمة', icon: '🏛️', type: 'landmark' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <MotiView
          from={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 600 }}
          style={styles.header}
        >
          <Text style={styles.title}>{t.explore.title}</Text>
          <Text style={styles.subtitle}>{t.explore.subtitle}</Text>
        </MotiView>

        {/* Interactive Map Placeholder */}
        <MotiView
          from={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', delay: 200 }}
          style={styles.mapContainer}
        >
          <View style={styles.mapPlaceholder}>
            <Text style={styles.mapIcon}>🗺️</Text>
            <Text style={styles.mapText}>{t.explore.map}</Text>
            <Text style={styles.tapText}>{t.explore.tapToLearn}</Text>
          </View>
        </MotiView>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.explore.cities}</Text>
          <View style={styles.categoriesGrid}>
            {places.map((place, index) => (
              <MotiView
                key={place.id}
                from={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  delay: 300 + index * 100,
                }}
                style={styles.placeCard}
              >
                <Text style={styles.placeIcon}>{place.icon}</Text>
                <Text style={styles.placeName}>{place.name}</Text>
                <Text style={styles.placeNameAr}>{place.nameAr}</Text>
              </MotiView>
            ))}
          </View>
        </View>

        {/* Back Button */}
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
    color: colors.oliveGreen,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    ...typography.bodyLarge,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  mapContainer: {
    marginBottom: spacing.xxl,
  },
  mapPlaceholder: {
    height: 300,
    backgroundColor: colors.skyBlueLight,
    borderRadius: borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
  },
  mapIcon: {
    fontSize: 80,
    marginBottom: spacing.md,
  },
  mapText: {
    ...typography.h3,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  tapText: {
    ...typography.body,
    color: colors.textSecondary,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  placeCard: {
    width: (width - spacing.lg * 3) / 2,
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  placeIcon: {
    fontSize: 48,
    marginBottom: spacing.sm,
  },
  placeName: {
    ...typography.h4,
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
  placeNameAr: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  backButton: {
    marginTop: spacing.lg,
  },
});
