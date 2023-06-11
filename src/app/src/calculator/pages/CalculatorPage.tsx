import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  CalculatorHeader,
  CalculatorInput,
  CalculatorNumbers,
  CalculatorOperators,
} from '../components';

export const CalculatorPage = () => {

  const [calculation, setCalculation] = useState<string>('');

  useEffect(() => {
    console.log(calculation);
  }, [calculation]);

  const addCalculation = (value: string): void => {
    setCalculation(prev => prev + value);
  };

  return (
    <>
      <View style={styles.calculatorGrid}>
        <View style={styles.calculatorHeaderCard}>
          <CalculatorHeader />
        </View>
        <View style={styles.calculatorNumbers}>
          <CalculatorNumbers addNumber={addCalculation} />
        </View>
        <View style={styles.calculatorOperators}>
          <CalculatorOperators addOperator={addCalculation} />
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
