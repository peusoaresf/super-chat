import React from 'react';
import { Text } from 'react-native';

const Component = ({ date, formatDate }) => (
  <Text style={{ fontSize: 11, marginBottom: 10 }}>
    {formatDate(date)}
  </Text>
);

export default Component;