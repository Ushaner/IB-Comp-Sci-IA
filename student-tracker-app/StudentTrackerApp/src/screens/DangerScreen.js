import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DangerScreen({ navigation }) {
  const handleAlert = () => {
    // Placeholder: Send danger alert to backend/parents
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danger Alert Sent!</Text>
      <Text>Your parents have been notified.</Text>
      <Button title="Return Home" onPress={handleAlert} />
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
