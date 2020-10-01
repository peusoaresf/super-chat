import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ChatForm({ onSubmit }) {
    const [text, setText] = useState('');

    const submit = () => {
        onSubmit(text);
        setText('');
    };

    return (
        <View style={{ height: 55 }}>
            <View style={styles.formContainer}>
                <TextInput style={styles.textInput} value={text} onChangeText={text => setText(text)} placeholder="Type a message" />
                <TouchableOpacity onPress={submit} style={styles.submitButton}>
                    <Icon name="send" size={18} color="#999" />
                </TouchableOpacity >
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F0F0F0'
    },
    textInput: {
        borderRadius: 20,
        flexGrow: 0.95,
        margin: 5,
        backgroundColor: 'white',
        padding: 10
    },
    submitButton: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        flexGrow: 0.05
    }
});