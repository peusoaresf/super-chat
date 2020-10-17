import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useRecoilValue } from 'recoil';
import HomeHeader from 'superchat/src/components/home/HomeHeader';
import ChatList from 'superchat/src/components/home/ChatList';
import { chats as chatsAtom } from 'superchat/src/atoms/chats';
import notificationSound from 'superchat/src/utils/notificationSound';
import useSkipFirstEffect from 'superchat/src/hooks/useSkipFirstEffect';
import useMessages from 'superchat/src/hooks/useMessages';
import ChatChannel from 'superchat/src/services/ChatChannel';

export default function Home({ navigation }) {
  const pushMessage = useMessages();
  const chats = useRecoilValue(chatsAtom);

  useEffect(() => {
    ChatChannel.subscribeToNewMessage((message) => {
      pushMessage(message);
    });

    return () => ChatChannel.unsubscribeFromNewMessage();
  }, []);

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