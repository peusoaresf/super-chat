import 'react-native-gesture-handler';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import ChatApp from './src/ChatApp';

export default function App() {
  return (
    <NavigationContainer>
      <RecoilRoot>
        <ChatApp />
      </RecoilRoot>
    </NavigationContainer>
  )
}