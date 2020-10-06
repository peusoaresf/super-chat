import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { user as userAtom } from '../atoms/user.js';
import { chats as chatsAtom } from '../atoms/chats.js';
import { messages as messagesAtom } from '../atoms/messages.js';
import ChatMessageList from './ChatMessageList.js';
import ChatForm from './ChatForm.js';
import ChatChannel from '../services/ChatChannel.js';
import useMessages from '../hooks/useMessages.js';

export default function Chat({ route }) {
  const { chatId } = route.params;

  const user = useRecoilValue(userAtom);
  const messagesState = useRecoilValue(messagesAtom);
  const pushMessage = useMessages();

  const messages = messagesState[chatId];
  const setChats = useSetRecoilState(chatsAtom);

  const sendText = (text) => {
    if (!text) {
      return;
    }

    let message = {
      id: (new Date()).getTime(),
      sentBy: user.id,
      text,
      chatId,
      sentAt: new Date()
    };

    pushMessage(message);
    ChatChannel.sendMessage(message);
  };

  useEffect(() => {
    setChats((previousState) => {
      let newState = previousState.concat([]);

      let index = newState.findIndex(item => item.id === chatId),
        chatListItem = newState[index];

      newState[index] = {
        ...chatListItem,
        unreadMessages: 0
      };

      return newState;
    });

  }, [messages]);

  return (
    <View style={{ flex: 1 }}>
      <ChatMessageList messages={messages} />
      <ChatForm onSubmit={sendText} />
    </View>
  );
}