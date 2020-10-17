import React from 'react';
import { View } from 'react-native';
import { useRecoilValue } from 'recoil';
import HomeHeader from '../../components/home/HomeHeader';
import ChatList from '../../components/home/ChatList';
import { chats as chatsAtom } from '../../atoms/chats.js';
import notificationSound from '../../utils/notificationSound.js';
import useSkipFirstEffect from '../../hooks/useSkipFirstEffect.js';

export default function Home({ navigation }) {
  const chats = useRecoilValue(chatsAtom);

  useSkipFirstEffect(() => {
    notificationSound.play();
  }, [chats]);

  return (
    <View style={{ flex: 1 }}>
      <HomeHeader />
      <ChatList items={chats} onItemPress={(chatId) => navigation.navigate('Chat', { chatId })} />
    </View>
  );
}