import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRecoilValue } from 'recoil';
import { user as userAtom } from '../atoms/user.js';

export default function ChatMessage({ message }) {
    const user = useRecoilValue(userAtom);

    const isOutgoing = () => message.sentBy === user.id;

    return (
        <View style={[styles.messageContainer, isOutgoing() ? styles.outgoingMessage : styles.incomingMessage]}>
            <Text style={[styles.messageText, isOutgoing() ? styles.outgoingMessageText : styles.incomingMessageText]}>{message.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    messageContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 10
    },
    incomingMessage: {
        justifyContent: 'flex-start'
    },
    outgoingMessage: {
        justifyContent: 'flex-end'
    },
    messageText: {
        borderRadius: 10,
        padding: 10
    },
    outgoingMessageText: {
        backgroundColor: '#DCF8C6'
    },
    incomingMessageText: {
        backgroundColor: '#FFFFFF'
    }
});