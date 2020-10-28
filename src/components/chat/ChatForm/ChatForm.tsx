import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
  View, TextInput, TouchableOpacity
} from 'react-native'
import styles from './styles'

interface ChatFormProps {
  text: string,
  onChangeText: (text: string) => void,
  onSubmit: () => void
}

const ChatForm = ({ text, onChangeText, onSubmit }: ChatFormProps) => (
  <View style={{ height: 55 }}>
    <View style={styles.formContainer}>
      <View style={{ flex: 1 }}>
        <TextInput
          style={styles.textInput}
          value={text}
          onChangeText={onChangeText}
          placeholder="Type a message"
        />
      </View>
      <TouchableOpacity onPress={onSubmit} style={styles.submitButton}>
        <Icon name="send" size={18} color="#999" />
      </TouchableOpacity>
    </View>
  </View>
)

export default ChatForm
