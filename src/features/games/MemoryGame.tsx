/**
 * Memory Matching Game
 * Fun and educational card matching game about Palestine
 */

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { MotiView } from 'moti';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { useLocalization } from '../../localization';
import { SafeButton } from '../../core/components/SafeButton';
import { colors, typography, spacing, borderRadius } from '../../core/theme';

const { width } = Dimensions.get('window');
const cardSize = (width - spacing.lg * 5) / 4;

type MemoryGameProps = NativeStackScreenProps<RootStackParamList, 'MemoryGame'>;

interface Card {
  id: number;
  emoji: string;
  label: string;
  labelAr: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const cardData = [
  { emoji: '🕌', label: 'Mosque', labelAr: 'مسجد' },
  { emoji: '🫒', label: 'Olive', labelAr: 'زيتون' },
  { emoji: '🌊', label: 'Sea', labelAr: 'بحر' },
  { emoji: '🏛️', label: 'Heritage', labelAr: 'تراث' },
  { emoji: '🎨', label: 'Art', labelAr: 'فن' },
  { emoji: '📚', label: 'Knowledge', labelAr: 'علم' },
];

export const MemoryGame: React.FC<MemoryGameProps> = ({ navigation }) => {
  const { t, language } = useLocalization();
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    // Create pairs of cards
    const pairs = cardData.flatMap((card, index) => [
      { ...card, id: index * 2, isFlipped: false, isMatched: false },
      { ...card, id: index * 2 + 1, isFlipped: false, isMatched: false },
    ]);

    // Shuffle cards
    const shuffled = pairs.sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
  };

  const handleCardPress = (cardId: number) => {
    if (isProcessing) return;
    if (flippedCards.length >= 2) return;
    if (flippedCards.includes(cardId)) return;

    const card = cards.find((c) => c.id === cardId);
    if (card?.isMatched) return;

    // Flip the card
    const newCards = cards.map((c) =>
      c.id === cardId ? { ...c, isFlipped: true } : c
    );
    setCards(newCards);

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    // Check for match when 2 cards are flipped
    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      setIsProcessing(true);

      const [firstId, secondId] = newFlippedCards;
      const firstCard = cards.find((c) => c.id === firstId);
      const secondCard = cards.find((c) => c.id === secondId);

      if (firstCard?.emoji === secondCard?.emoji) {
        // Match!
        setTimeout(() => {
          const matchedCards = newCards.map((c) =>
            c.id === firstId || c.id === secondId
              ? { ...c, isMatched: true }
              : c
          );
          setCards(matchedCards);
          setMatches(matches + 1);
          setFlippedCards([]);
          setIsProcessing(false);
        }, 600);
      } else {
        // No match - flip back
        setTimeout(() => {
          const flippedBackCards = newCards.map((c) =>
            c.id === firstId || c.id === secondId
              ? { ...c, isFlipped: false }
              : c
          );
          setCards(flippedBackCards);
          setFlippedCards([]);
          setIsProcessing(false);
        }, 1000);
      }
    }
  };

  const isGameComplete = matches === cardData.length;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>{t.games.memory}</Text>
        <View style={styles.stats}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>{t.games.score}</Text>
            <Text style={styles.statValue}>{matches}</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Moves</Text>
            <Text style={styles.statValue}>{moves}</Text>
          </View>
        </View>
      </View>

      {/* Game Board */}
      <View style={styles.board}>
        {cards.map((card, index) => (
          <MotiView
            key={card.id}
            from={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              delay: index * 50,
            }}
          >
            <Pressable
              onPress={() => handleCardPress(card.id)}
              disabled={card.isMatched}
            >
              <MotiView
                style={[
                  styles.card,
                  card.isMatched && styles.cardMatched,
                ]}
                animate={{
                  rotateY: card.isFlipped || card.isMatched ? '180deg' : '0deg',
                  backgroundColor:
                    card.isMatched
                      ? colors.success
                      : card.isFlipped
                      ? colors.white
                      : colors.skyBlue,
                }}
                transition={{
                  type: 'timing',
                  duration: 300,
                }}
              >
                {(card.isFlipped || card.isMatched) && (
                  <View style={styles.cardContent}>
                    <Text style={styles.cardEmoji}>{card.emoji}</Text>
                    <Text style={styles.cardLabel}>
                      {language === 'en' ? card.label : card.labelAr}
                    </Text>
                  </View>
                )}
              </MotiView>
            </Pressable>
          </MotiView>
        ))}
      </View>

      {/* Game Complete */}
      {isGameComplete && (
        <MotiView
          from={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring' }}
          style={styles.completeContainer}
        >
          <Text style={styles.completeText}>🎉 {t.progress.congratulations}!</Text>
          <Text style={styles.completeSubtext}>
            You completed the game in {moves} moves!
          </Text>
        </MotiView>
      )}

      {/* Buttons */}
      <View style={styles.buttons}>
        <SafeButton
          title="Reset Game"
          onPress={initializeGame}
          variant="primary"
          size="medium"
          style={styles.button}
        />
        <SafeButton
          title={t.common.back}
          onPress={() => navigation.goBack()}
          variant="outline"
          size="medium"
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  title: {
    ...typography.h2,
    color: colors.vibrantPurple,
    marginBottom: spacing.md,
  },
  stats: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  statBox: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    alignItems: 'center',
    minWidth: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statLabel: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  statValue: {
    ...typography.h2,
    color: colors.vibrantPurple,
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  card: {
    width: cardSize,
    height: cardSize,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  cardMatched: {
    opacity: 0.7,
  },
  cardContent: {
    alignItems: 'center',
    transform: [{ scaleX: -1 }], // Flip text back
  },
  cardEmoji: {
    fontSize: 32,
    marginBottom: spacing.xs,
  },
  cardLabel: {
    ...typography.caption,
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.textPrimary,
    textAlign: 'center',
  },
  completeContainer: {
    backgroundColor: colors.gold,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  completeText: {
    ...typography.h2,
    color: colors.white,
    marginBottom: spacing.sm,
  },
  completeSubtext: {
    ...typography.body,
    color: colors.white,
  },
  buttons: {
    gap: spacing.md,
  },
  button: {
    width: '100%',
  },
});
