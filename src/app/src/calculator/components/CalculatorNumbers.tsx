import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const CalculatorNumbers = ({
  addNumber,
}: {
  addNumber: (value: string) => void;
}) => {
  return (
    <>
      <View style={styles.calculatorNumbersCard}>
        <View style={styles.calculatorNumbersContent}>
          <View style={styles.calculatorNumbersRow}>
            <View
              style={styles.calculatorNumbersItem}
              onTouchEnd={() => addNumber('1')}>
              <Text>1</Text>
            </View>
            <View
              style={styles.calculatorNumbersItem}
              onTouchEnd={() => addNumber('1')}>
              <Text>2</Text>
            </View>
            <View
              style={styles.calculatorNumbersItem}
              onTouchEnd={() => addNumber('3')}>
              <Text>3</Text>
            </View>
          </View>
          <View style={styles.calculatorNumbersRow}>
            <View
              style={styles.calculatorNumbersItem}
              onTouchEnd={() => addNumber('4')}>
              <Text>4</Text>
            </View>
            <View
              style={styles.calculatorNumbersItem}
              onTouchEnd={() => addNumber('5')}>
              <Text>5</Text>
            </View>
            <View
              style={styles.calculatorNumbersItem}
              onTouchEnd={() => addNumber('6')}>
              <Text>6</Text>
            </View>
          </View>
          <View style={styles.calculatorNumbersRow}>
            <View
              style={styles.calculatorNumbersItem}
              onTouchEnd={() => addNumber('7')}>
              <Text>7</Text>
            </View>
            <View
              style={styles.calculatorNumbersItem}
              onTouchEnd={() => addNumber('8')}>
              <Text>8</Text>
            </View>
            <View
              style={styles.calculatorNumbersItem}
              onTouchEnd={() => addNumber('9')}>
              <Text>9</Text>
            </View>
          </View>
          <View style={styles.calculatorNumbersRow}>
            <View style={styles.calculatorNumbersItem}></View>
            <View
              style={styles.calculatorNumbersItem}
              onTouchEnd={() => addNumber('0')}>
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
  },
  calculatorNumbersContent: {
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
