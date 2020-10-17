import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Header({ children }) {
  return (
    <View style={styles.headerContainer}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#075E55'
  }
});