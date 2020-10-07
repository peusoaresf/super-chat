import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainSnippet from './MainSnippet.js';
import SecondarySnippet from './SecondarySnippet.js';

export default function ChatSnippet({ title, lastMessage, unreadMessages }) {
  return (
    <View style={styles.snippetContainer}>
      <MainSnippet title={title} lastMessageText={lastMessage.text} />
      <SecondarySnippet date={lastMessage.sentAt} unreadMessages={unreadMessages} />
    </View>
  );
}

const styles = StyleSheet.create({
  snippetContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 3,
    marginLeft: 10,
    marginBottom: -10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#999'
  }
});