import React from 'react';
import { StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home.js';
import Chat from './components/Chat.js';

const Stack = createStackNavigator();

export default function ChatApp() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <Stack.Navigator initialRouteName="Home" headerMode={false}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  }
});  