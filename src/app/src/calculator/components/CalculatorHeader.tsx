import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../core';

export const CalculatorHeader = () => {
  return (
    <>
      <View style={styles.calculatorHeaderCard}>
        <View style={styles.calculatorHeaderContent}>
          <Text style={styles.calculatorHeaderText}>Calculator</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  calculatorHeaderCard: {
    borderRadius: 20,
    margin: 20,
    height: 100,
    backgroundColor: '#DAE5D0',
  },
  calculatorHeaderContent: {
    padding: 20,
    flex: 1,
  },
  calculatorHeaderText: {
    flex: 1,
    verticalAlign: 'middle',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
