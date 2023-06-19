import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export const CalculatorInput = ({ calculation }: { calculation: string[] }) => {
  return (
    <>
      <View style={styles.calculatorInputCard}>
        <TextInput
          value={calculation.join(' ')}
          onTextInput={() => console.log('you cannot insert inputs')}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  calculatorInputCard: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: 'red',
  },
});
