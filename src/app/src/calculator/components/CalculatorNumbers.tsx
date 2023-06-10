import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../core';

export const CalculatorNumbers = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <>
      <View style={styles.calculatorNumbersCard}>
        <View style={styles.calculatorNumbersContent}>
          <View style={styles.calculatorNumbersRow}>
            <View style={styles.calculatorNumbersItem}>
              <Text>1</Text>
            </View>
            <View style={styles.calculatorNumbersItem}>
              <Text>2</Text>
            </View>
            <View style={styles.calculatorNumbersItem}>
              <Text>3</Text>
            </View>
          </View>
          <View style={styles.calculatorNumbersRow}>
            <View style={styles.calculatorNumbersItem}>
              <Text>4</Text>
            </View>
            <View style={styles.calculatorNumbersItem}>
              <Text>5</Text>
            </View>
            <View style={styles.calculatorNumbersItem}>
              <Text>6</Text>
            </View>
          </View>
          <View style={styles.calculatorNumbersRow}>
            <View style={styles.calculatorNumbersItem}>
              <Text>7</Text>
            </View>
            <View style={styles.calculatorNumbersItem}>
              <Text>8</Text>
            </View>
            <View style={styles.calculatorNumbersItem}>
              <Text>9</Text>
            </View>
          </View>
          <View style={styles.calculatorNumbersRow}>
            <View style={styles.calculatorNumbersItem}></View>
            <View style={styles.calculatorNumbersItem}>
              <Text>0</Text>
            </View>
            <View style={styles.calculatorNumbersItem}></View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  calculatorNumbersCard: {
    flex: 1,
    borderRadius: 20,
    margin: 10,
  },
  calculatorNumbersContent: {
    padding: 10,
    flex: 1,
  },
  calculatorNumbersRow: {
    flex: 1,
    flexDirection: 'row',
  },
  calculatorNumbersItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#94B49F',
    borderRadius: 20,
    margin: 4,
  },
});
