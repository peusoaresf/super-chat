import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UnreadMessagesCounter({ unreadMessages }) {
  return (
    <>
      {
        unreadMessages
          ? (
            <View style={styles.container} >
              <Text style={{ fontSize: 11, color: 'white' }}>{unreadMessages}</Text>
            </View>
          )
          : <></>
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    borderRadius: 50,
    height: 15,
    width: 15,
    justifyContent: 'center',
    alignItems: 'center'
  }
});