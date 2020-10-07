import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function AppTitle() {
  return (
    <Text style={styles.title}>SuperChat</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    fontSize: 25,
    color: 'white'
  }
});