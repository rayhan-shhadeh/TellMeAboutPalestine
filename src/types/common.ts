/**
 * Common types used throughout the app
 */

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedDate?: Date;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  level: 'bronze' | 'silver' | 'gold';
}

export interface Progress {
  totalStars: number;
  completedChallenges: number;
  badges: Badge[];
  achievements: Achievement[];
  visitedPlaces: string[];
  completedStories: string[];
  gamesPlayed: string[];
  factsLearned: string[];
}

export interface Place {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  latitude: number;
  longitude: number;
  type: 'city' | 'village' | 'landmark' | 'nature';
  images?: string[];
  funFacts?: string[];
}

export interface Story {
  id: string;
  title: string;
  titleAr: string;
  content: string;
  contentAr: string;
  character: 'olive' | 'child' | 'bird';
  ageGroup: '6-8' | '9-12';
  duration: number; // in minutes
  thumbnail?: string;
}

export interface Fact {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  category: 'population' | 'culture' | 'food' | 'symbols' | 'nature';
  icon?: string;
  visualRepresentation?: 'chart' | 'animation' | 'comparison';
}

export interface Game {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  type: 'puzzle' | 'matching' | 'quiz' | 'coloring' | 'memory';
  difficulty: 'easy' | 'medium' | 'hard';
  ageGroup: '6-8' | '9-12';
  thumbnail?: string;
}

export interface Challenge {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  type: 'daily' | 'weekly' | 'achievement';
  reward: {
    stars: number;
    badge?: Badge;
  };
  completed: boolean;
}

export interface Character {
  id: 'olive' | 'child' | 'bird';
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  personality: string;
  greetings: string[];
  greetingsAr: string[];
}
