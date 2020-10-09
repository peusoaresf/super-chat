import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { useFocusEffect } from '@react-navigation/native';
import HomeHeader from './HomeHeader.js';
import ChatList from './ChatList.js';
import { chats as chatsAtom } from '../atoms/chats.js';
import notificationSound from '../utils/notificationSound.js';

function useSkipFirstEffect(callback, dependencies) {
  const [firstRender, setFirstRender] = useState(true);

  useFocusEffect(
    useCallback(() => {
      if (!firstRender) {
        callback();
      }

      if (firstRender) {
        setFirstRender(false);
      }

      return () => setFirstRender(true);
    }, dependencies)
  );
}

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