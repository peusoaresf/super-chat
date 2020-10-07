import React from 'react';
import { Text } from 'react-native';

export default function DateSnippet({ date }) {

  const formatDate = (dateObj) => {
    const isToday = (d) => d.toDateString() === (new Date()).toDateString();

    const isYesterday = (d) => {
      let yest = new Date();
      yest.setDate(yest.getDate() - 1);
      return d.toDateString() === yest.toDateString();
    }

    const toTodayString = (d) => d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0');

    if (isToday(dateObj)) {
      return toTodayString(dateObj);
    }

    if (isYesterday(dateObj)) {
      return 'yesterday';
    }

    return dateObj.toLocaleDateString();
  }

  return (
    <Text style={{ fontSize: 11, marginBottom: 10 }}>
      {formatDate(date)}
    </Text>
  );
}