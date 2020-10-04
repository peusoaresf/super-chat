import { atom } from 'recoil';

export const user = atom({
  key: 'user',
  default: {
    id: (new Date()).getTime(),
    friends: Array.from(Array(10).keys()).map((id) => ({
      id,
      name: 'Friend ' + id,
      avatarUrl: 'https://reactnative.dev/img/tiny_logo.png'
    })),
    chats: Array.from(Array(10).keys()).map((id) => ({
      id,
      title: 'Chat ' + id,
      avatarUrl: 'https://reactnative.dev/img/tiny_logo.png',
      subscribers: [Array.from(Array(10).keys())[Math.floor(Math.random() * 10)]]
    }))
  }
});