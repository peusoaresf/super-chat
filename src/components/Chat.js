import React from 'react';
import { View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { user as userAtom } from '../atoms/user.js';
import { messages as messagesAtom } from '../atoms/messages.js';
import ChatMessageList from './ChatMessageList.js';
import ChatForm from './ChatForm.js';
import ChatChannel from '../services/ChatChannel.js';
import useMessages from '../hooks/useMessages.js';

export default function Chat({ route }) {
  const { chatId } = route.params;

  const user = useRecoilValue(userAtom);
  const messages = useRecoilValue(messagesAtom);
  const pushMessage = useMessages();

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

  return (
    <View style={{ flex: 1 }}>
      <ChatMessageList messages={messages[chatId]} />
      <ChatForm onSubmit={sendText} />
    </View>
  );
}