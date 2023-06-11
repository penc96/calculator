import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const CalculatorOperators = ({
  addOperator,
}: {
  addOperator: (value: string) => void;
}) => {
  return (
    <>
      <View style={styles.calculatorOperatorsCard}>
        <View style={styles.calculatorOperatorsContent}>
          <TouchableOpacity
            style={styles.calculatorOperatorsItem}
            onPress={() => addOperator('+')}>
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calculatorOperatorsItem}
            onPress={() => addOperator('-')}>
            <Text>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calculatorOperatorsItem}
            onPress={() => addOperator('*')}>
            <Text>*</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calculatorOperatorsItem}
            onPress={() => addOperator('/')}>
            <Text>/</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calculatorOperatorsItem}
            onPress={() => addOperator('^')}>
            <Text>^</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  calculatorOperatorsCard: {
    flex: 1,
    borderRadius: 20,
  },
  calculatorOperatorsContent: {
    flexDirection: 'row',
    flex: 1,
  },
  calculatorOperatorsItem: {
    flex: 1,
    backgroundColor: '#789395',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    borderRadius: 20,
  },
});
