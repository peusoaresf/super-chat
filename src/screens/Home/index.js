import React from 'react';
import { View } from 'react-native';
import { useRecoilValue } from 'recoil';
import HomeHeader from 'superchat/src/components/home/HomeHeader';
import ChatList from 'superchat/src/components/home/ChatList';
import { chats as chatsAtom } from 'superchat/src/atoms/chats';
import notificationSound from 'superchat/src/utils/notificationSound';
import useSkipFirstEffect from 'superchat/src/hooks/useSkipFirstEffect';

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