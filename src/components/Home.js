import React from 'react';
import { View } from 'react-native';
import HomeHeader from './HomeHeader.js';
import ChatList from './ChatList.js';

// mock de chats
var yesterdayObj = new Date()
yesterdayObj.setDate(yesterdayObj.getDate() - 1);

var old = new Date();
old.setMonth(old.getMonth() - 1);

const data = Array.from(Array(20).keys()).map((id) => ({
  id,
  avatarUrl: 'https://reactnative.dev/img/tiny_logo.png',
  chatTitle: 'Chat ' + id,
  lastMessage: {
    text: 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk kk',
    sentAt: id % 2 ? new Date() : (id % 3 ? yesterdayObj : old)
  }
})).sort((a, b) => new Date(b.lastMessage.sentAt) - new Date(a.lastMessage.sentAt));

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader />
      <ChatList items={data} />
    </View>
  );
}