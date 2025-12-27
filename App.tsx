/**
 * Tell Me About Palestine
 * Educational app for children aged 6-12
 * Main App entry point
 */

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { LocalizationProvider } from './src/localization';
import { RootNavigator } from './src/navigation/RootNavigator';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <LocalizationProvider defaultLanguage="en">
        <StatusBar style="auto" />
        <RootNavigator />
      </LocalizationProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
