import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { user as userAtom } from 'superchat/src/atoms/user.js';
import { chats as chatsAtom } from 'superchat/src/atoms/chats.js';
import { messages as messagesAtom } from 'superchat/src/atoms/messages.js';
import ChatHeader from 'superchat/src/components/chat/ChatHeader';
import ChatMessageList from 'superchat/src/components/chat/ChatMessageList';
import ChatForm from 'superchat/src/components/chat/ChatForm';
import ChatChannel from 'superchat/src/services/ChatChannel.js';
import useMessages from 'superchat/src/hooks/useMessages.js';

export default function Chat({ route }) {
  const { chatId } = route.params;

  const user = useRecoilValue(userAtom);

  const messagesState = useRecoilValue(messagesAtom);
  const messages = messagesState[chatId];
  const pushMessage = useMessages();

  const chat = user.chats.find(c => c.id === chatId);
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
      <ChatHeader avatarUri={chat.avatarUrl} chatTitle={chat.title} />
      <ChatMessageList messages={messages} />
      <ChatForm onSubmit={sendText} />
    </View>
  );
}