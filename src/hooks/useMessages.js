import { useRecoilValue, useSetRecoilState } from 'recoil';
import { user as userAtom } from '../atoms/user';
import { messages as messagesAtom } from '../atoms/messages';
import { chats as chatsAtom } from '../atoms/chats';

export default function useMessages() {

  const user = useRecoilValue(userAtom);
  const setMessages = useSetRecoilState(messagesAtom);
  const setChats = useSetRecoilState(chatsAtom);

  function pushMessage(message) {

    setMessages((previousState) => {
      let key = message.chatId.toString();
      let oldMessages = previousState[key] || [];
      let newMessages = {
        [key]: oldMessages.concat([message])
      };
      return { ...previousState, ...newMessages };
    });

    setChats((previousState) => {
      let newState = previousState.concat([]),
        chat = user.chats.find(chat => chat.id === message.chatId);

      // TODO: Lidar com mensagens de usuários que te adicionaram mas vc não adicionou de volta!
      if (!chat) throw new Error('O usuário corrente não possui chatId para a mensagem recebida')

      let updatedValue = {
        id: chat.id,
        avatarUrl: chat.avatarUrl || '',
        chatTitle: chat.title || 'error',
        lastMessage: message,
        unreadMessages: 1
      }

      let indexOfChat = newState.findIndex(chat => chat.id === updatedValue.id);

      if (indexOfChat !== -1) {
        updatedValue.unreadMessages = newState[indexOfChat].unreadMessages + 1;
        newState[indexOfChat] = updatedValue;
      }
      else {
        newState.push(updatedValue);
      }

      newState.sort((a, b) => new Date(b.lastMessage.sentAt) - new Date(a.lastMessage.sentAt));

      return newState;
    });
  }

  return pushMessage;
}