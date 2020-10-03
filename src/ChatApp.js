import React from 'react';
import { StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import Chat from './components/Chat.js';

export default function ChatApp() {
    return (
        <SafeAreaView style={styles.appContainer}>
            <Chat />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    }
});