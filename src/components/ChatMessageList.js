import React from 'react';
import { View, FlatList } from 'react-native';
import ChatMessage from './ChatMessage.js';

export default function ChatMessageList({ messages, user }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#E5DDD5' }}>
      <FlatList
        ref={ref => this.flatList = ref}
        onContentSizeChange={() => this.flatList.scrollToEnd({ animated: true })}
        onLayout={() => this.flatList.scrollToEnd({ animated: true })}
        data={messages}
        renderItem={({ item }) => <ChatMessage message={item} user={user} />}
        keyExtractor={item => item.id.toString()} />
    </View>
  );
}