/**
 * Root Navigator
 * Main navigation structure for the app
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../features/home/HomeScreen';
import { ExploreScreen } from '../features/explore/ExploreScreen';
import { FactsScreen } from '../features/home/FactsScreen';
import { StoriesScreen } from '../features/stories/StoriesScreen';
import { GamesScreen } from '../features/games/GamesScreen';
import { ProgressScreen } from '../features/home/ProgressScreen';
import { ParentsScreen } from '../features/parents/ParentsScreen';
import { MemoryGame } from '../features/games/MemoryGame';
import { colors } from '../core/theme';

export type RootStackParamList = {
  Home: undefined;
  Explore: undefined;
  Facts: undefined;
  Stories: undefined;
  Games: undefined;
  MemoryGame: undefined;
  Progress: undefined;
  Parents: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.oliveGreen,
          },
          headerTintColor: colors.textWhite,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            title: 'Explore Palestine',
          }}
        />
        <Stack.Screen
          name="Facts"
          component={FactsScreen}
          options={{
            title: 'Fun Facts',
          }}
        />
        <Stack.Screen
          name="Stories"
          component={StoriesScreen}
          options={{
            title: 'Stories',
          }}
        />
        <Stack.Screen
          name="Games"
          component={GamesScreen}
          options={{
            title: 'Games',
          }}
        />
        <Stack.Screen
          name="MemoryGame"
          component={MemoryGame}
          options={{
            title: 'Memory Game',
          }}
        />
        <Stack.Screen
          name="Progress"
          component={ProgressScreen}
          options={{
            title: 'My Progress',
          }}
        />
        <Stack.Screen
          name="Parents"
          component={ParentsScreen}
          options={{
            title: 'Parents & Teachers',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
