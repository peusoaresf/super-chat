import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import ChatMessageList from './ChatMessageList.js';
import ChatForm from './ChatForm.js';
import ChatChannel from '../services/ChatChannel.js';

export default function Chat({ user }) {
    const [messages, setMessages] = useState([]);

    const pushMessage = (message) => setMessages((prevState) => prevState.concat([message]));

    const sendText = (text) => {
        if (!text) {
            return;
        }

        let message = { id: (new Date()).getTime(), sentBy: user.id, text };
        pushMessage(message);
        ChatChannel.sendMessage(message);
    };

    useEffect(() => {
        ChatChannel.subscribeToNewMessage((message) => pushMessage(message));       

        return () => ChatChannel.unsubscribeFromNewMessage();
    }, []);

    return (
        <View style={{ flex: 1 }}>            
            <ChatMessageList messages={messages} user={user} />
            <ChatForm onSubmit={sendText} />
        </View>
    );
}