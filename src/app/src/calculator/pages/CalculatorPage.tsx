import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../core/styles';
import { CalculatorHeader, CalculatorNumbers } from '../components';

export const CalculatorPage = () => {
  return (
    <>
      <View style={styles.calculatorGrid}>
        <View style={styles.calculatorHeaderCard}>
          <CalculatorHeader />
        </View>
        <View style={styles.calculatorNumbers}>
          <CalculatorNumbers />
        </View>
        <View style={styles.calculatorOperators}>
          <Text>Hello CalculatorOperators</Text>
        </View>
        {/*
        <CalculatorOperators />
        <CalculatorInput />
        */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  calculatorGrid: {
    alignItems: 'stretch',
    flex: 1,
  },
  calculatorHeaderCard: {
    flex: 0.2,
  },
  calculatorNumbers: {
    flex: 0.5,
  },
  calculatorOperators: {
    flex: 0.3,
  },
});
