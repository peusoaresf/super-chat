import React from 'react';
import { View, StyleSheet } from 'react-native';
import Avatar from './Avatar.js';
import ChatSnippet from './ChatSnippet.js';

export default function ChatListItem({ avatarUrl, chatTitle, lastMessage }) {
  return (
    <View style={styles.listItem}>
      <Avatar uri={avatarUrl} />
      <ChatSnippet title={chatTitle} lastMessage={lastMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    marginLeft: 10,
    marginVertical: 10
  }
});