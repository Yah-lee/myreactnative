// ທ. ຢ່າ ລີ Cw1

import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
const Display = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.message}</Text>
    </View>
  );
};

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Display message={`Count: ${count}`} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={incrementCount}>
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={decrementCount}>
          <Text style={styles.buttonText}>Decrement</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: -200,
  },
  button: {
    backgroundColor: 'pink',
    paddingVertical: 10,
    paddingHorizontal: 100,
    marginHorizontal: 10,
    marginVertical: 200,
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CounterApp;
