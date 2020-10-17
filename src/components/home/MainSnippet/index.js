import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MainSnippet({ title, lastMessageText }) {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.titleText}>{title}</Text>
      <Text numberOfLines={1} style={{ color: 'gray', marginTop: 3 }}>{lastMessageText}</Text>
    </View >
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontWeight: 'bold',
    fontSize: 16
  }
});