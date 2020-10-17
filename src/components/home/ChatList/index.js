import React from 'react';
import { View, FlatList } from 'react-native';
import ChatListItem from '../ChatListItem';

export default function ChatList({ items, onItemPress }) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={items}
        renderItem={({ item }) => <ChatListItem avatarUrl={item.avatarUrl} chatTitle={item.chatTitle} lastMessage={item.lastMessage} unreadMessages={item.unreadMessages} onPress={() => onItemPress(item.id)} />}
        keyExtractor={item => item.id.toString()} />
    </View>
  );
}