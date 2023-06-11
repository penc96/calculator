import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
            <TouchableOpacity
              style={styles.calculatorNumbersItem}
              onPress={() => addNumber('1')}>
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.calculatorNumbersItem}
              onPress={() => addNumber('2')}>
              <Text>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.calculatorNumbersItem}
              onPress={() => addNumber('3')}>
              <Text>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.calculatorNumbersRow}>
            <TouchableOpacity
              style={styles.calculatorNumbersItem}
              onPress={() => addNumber('4')}>
              <Text>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.calculatorNumbersItem}
              onPress={() => addNumber('5')}>
              <Text>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.calculatorNumbersItem}
              onPress={() => addNumber('6')}>
              <Text>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.calculatorNumbersRow}>
            <TouchableOpacity
              style={styles.calculatorNumbersItem}
              onPress={() => addNumber('7')}>
              <Text>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.calculatorNumbersItem}
              onPress={() => addNumber('8')}>
              <Text>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.calculatorNumbersItem}
              onPress={() => addNumber('9')}>
              <Text>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.calculatorNumbersRow}>
            <View style={styles.calculatorNumbersItem}></View>
            <View
              style={styles.calculatorNumbersItem}
              onPress={() => addNumber('0')}>
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
