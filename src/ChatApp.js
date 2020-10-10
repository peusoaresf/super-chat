import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home.js';
import Chat from './components/Chat.js';
import useMessages from './hooks/useMessages.js';
import ChatChannel from './services/ChatChannel.js';
import Login from './screens/Login.tsx';

const Stack = createStackNavigator();

export default function ChatApp() {
  const pushMessage = useMessages();

  useEffect(() => {
    ChatChannel.subscribeToNewMessage((message) => {
      pushMessage(message);
    });

    return () => ChatChannel.unsubscribeFromNewMessage();
  }, []);

  return (
    <SafeAreaView style={styles.appContainer}>
      <Stack.Navigator initialRouteName="Login" headerMode={false}>
        <Stack.Screen name="Login" component={Login} />
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