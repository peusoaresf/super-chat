import React, { useState } from 'react'
import ChatForm from './ChatForm'

interface ContainerProps {
  onSubmit: (text: string) => void
}

const Container = ({ onSubmit }: ContainerProps) => {
  const [text, setText] = useState('')

  const submit = () => {
    onSubmit(text)
    setText('')
  }

  return (
    <ChatForm
      text={text}
      onChangeText={(value) => setText(value)}
      onSubmit={submit}
    />
  )
}

export default Container
