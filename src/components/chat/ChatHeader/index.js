import React from 'react';
import Header from '../../base/Header';
import IconButton from '../../base/IconButton';
import Avatar from '../../general/Avatar';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ChatHeader({ avatarUri, chatTitle }) {
  const navigation = useNavigation();

  return (
    <Header>
      <IconButton icon="arrow-back" onPress={() => navigation.goBack()} />
      <Avatar size={35} uri={avatarUri} />
      <Text style={{ fontSize: 17, color: 'white', marginLeft: 10 }}>{chatTitle}</Text>
    </Header>
  )
}