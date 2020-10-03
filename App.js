import React from 'react';
import { RecoilRoot } from 'recoil';
import ChatApp from './src/ChatApp.js';

export default function App() {
  return (
    <RecoilRoot>
      <ChatApp />
    </RecoilRoot>
  )
}