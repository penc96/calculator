import math from 'mathjs';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export const CalculatorInput = ({ calculation }: { calculation: string }) => {
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {

  }, [calculation]);

  const renderResult = () => {
    if (result) {
      return <Text>Result</Text>;
    }

    if (error) {
      return <Text>Error</Text>;
    }

    return <></>;
  };

  return (
    <>
      <View style={styles.calculatorInputCard}>
        <TextInput
          value={calculation}
          onTextInput={() => console.log('you cannot insert inputs')}
        />
        {renderResult()}
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
