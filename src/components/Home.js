import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useRecoilValue } from 'recoil';
import HomeHeader from './HomeHeader.js';
import ChatList from './ChatList.js';
import ChatChannel from '../services/ChatChannel.js';
import { chats as chatsAtom } from '../atoms/chats.js';
import useMessages from '../hooks/useMessages.js';

export default function Home({ navigation }) {

  const chats = useRecoilValue(chatsAtom);
  const pushMessage = useMessages();

  useEffect(() => {
    ChatChannel.subscribeToNewMessage((message) => {
      pushMessage(message);
    });

    return () => ChatChannel.unsubscribeFromNewMessage();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <HomeHeader />
      <ChatList items={chats} onItemPress={(chatId) => navigation.navigate('Chat', { chatId })} />
    </View>
  );
}