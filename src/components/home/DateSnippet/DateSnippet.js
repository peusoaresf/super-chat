import React from 'react';
import { Text } from 'react-native';

const DateSnippet = ({ date }) => (
  <Text style={{ fontSize: 11, marginBottom: 10 }}>
    {date}
  </Text>
);

export default DateSnippet;