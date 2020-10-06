import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatSnippet({ title, lastMessage, unreadMessages }) {
  return (
    <View style={styles.snippetContainer}>
      <SnippetMain title={title} lastMessageText={lastMessage.text} />
      <SnippetSecondary date={lastMessage.sentAt} unreadMessages={unreadMessages} />
    </View>
  );
}

function SnippetMain({ title, lastMessageText }) {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.titleText}>{title}</Text>
      <Text numberOfLines={1} style={{ color: 'gray' }}>{lastMessageText}</Text>
    </View >
  );
}

function SnippetSecondary({ date, unreadMessages }) {

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
    <View style={{ width: 90, alignItems: 'flex-end', marginRight: 10, marginTop: 5 }}>
      <Text style={[styles.secondaryText, { marginBottom: 10 }]}>{formatDate(date)}</Text>
      {
        unreadMessages
          ? (
            <View style={styles.unreadMessagesCounter}>
              <Text style={[styles.secondaryText, { color: 'white' }]}>{unreadMessages}</Text>
            </View>
          )
          : <></>
      }
    </View >
  );
}

const styles = StyleSheet.create({
  snippetContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 3,
    marginLeft: 10,
    marginBottom: -10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#999'
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 16
  },
  secondaryText: {
    fontSize: 11
  },
  unreadMessagesCounter: {
    backgroundColor: 'green',
    borderRadius: 50,
    height: 15,
    width: 15,
    justifyContent: 'center',
    alignItems: 'center'
  }
});