import React from 'react'
import { Text } from 'react-native'

interface DateSnippetProps {
  date: string
}

const DateSnippet = ({ date }: DateSnippetProps) => (
  <Text style={{ fontSize: 11, marginBottom: 10 }}>
    {date}
  </Text>
)

export default DateSnippet
