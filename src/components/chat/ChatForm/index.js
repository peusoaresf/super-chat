import React, { useState } from 'react';
import ChatForm from './ChatForm'

const Container = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const submit = () => {
    onSubmit(text);
    setText('');
  };

  return (
    <ChatForm
      text={text}
      onChangeText={text => setText(text)}
      onSubmit={submit} />
  );
}

export default Container