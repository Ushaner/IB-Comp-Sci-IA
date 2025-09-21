import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AlertScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alert!</Text>
      <Text>You have deviated from your route.</Text>
      <Button title="Explain" onPress={() => navigation.navigate('Explanation')} />
      <Button title="Signal Danger" color="red" onPress={() => navigation.navigate('Danger')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    color: 'red',
  },
});
