import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { CalculatorPage } from './calculator';

export const App = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <CalculatorPage />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
});
