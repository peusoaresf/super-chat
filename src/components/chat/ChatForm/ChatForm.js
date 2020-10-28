import React from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const ChatForm = ({ text, onChangeText, onSubmit }) =>
  (
    <View style={{ height: 55 }}>
      <View style={styles.formContainer}>
        <View style={{ flex: 1 }}>
          <TextInput
            style={styles.textInput}
            value={text}
            onChangeText={onChangeText}
            placeholder="Type a message" />
        </View>
        <TouchableOpacity onPress={onSubmit} style={styles.submitButton}>
          <Icon name="send" size={18} color="#999" />
        </TouchableOpacity >
      </View>
    </View>
  )

export default ChatForm

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F0F0F0'
  },
  textInput: {
    borderRadius: 20,
    margin: 5,
    backgroundColor: 'white',
    padding: 10
  },
  submitButton: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: 50
  }
})