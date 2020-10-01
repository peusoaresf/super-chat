import React from 'react';
import { StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import Chat from './src/components/Chat.js';

const user = {
  id: 1
};

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <Chat user={user} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  }
});