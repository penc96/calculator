import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  CalculatorHeader,
  CalculatorInput,
  CalculatorNumbers,
  CalculatorOperators,
} from '../components';
let mathjs = require('mathjs');

export const CalculatorPage = () => {
  const [calculation, setCalculation] = useState<string[]>([]);

  const add = (value: string) => {
    setCalculation(prev => {
      const parts = [...prev];
      if (value === '=') {
        return [mathjs.evaluate(parts.join(' '))];
      }

      parts.push(value);
      return parts;
    });
  };

  return (
    <>
      <View style={styles.calculatorGrid}>
        <View style={styles.calculatorHeaderCard}>
          <CalculatorHeader />
        </View>
        <View style={styles.calculatorNumbers}>
          <CalculatorNumbers addNumber={add} />
        </View>
        <View style={styles.calculatorOperators}>
          <CalculatorOperators addOperator={add} />
        </View>
        <View style={styles.calculatorInput}>
          <CalculatorInput calculation={calculation} />
        </View>
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
    flex: 0.1,
    margin: 10,
  },
  calculatorNumbers: {
    flex: 0.6,
    margin: 10,
  },
  calculatorOperators: {
    flex: 0.1,
    margin: 10,
  },
  calculatorInput: {
    flex: 0.2,
    margin: 10,
  },
});
