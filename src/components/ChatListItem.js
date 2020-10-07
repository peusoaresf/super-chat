import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Avatar from './Avatar.js';
import ChatSnippet from './ChatSnippet.js';

export default function ChatListItem({ avatarUrl, chatTitle, lastMessage, unreadMessages, onPress }) {
  return (
    <TouchableOpacity style={styles.listItem} onPress={onPress}>
      <Avatar uri={avatarUrl} />
      <ChatSnippet title={chatTitle} lastMessage={lastMessage} unreadMessages={unreadMessages} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    marginLeft: 10,
    marginVertical: 15
  }
});