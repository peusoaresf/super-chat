import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { signup, signin } from '../../services/authService'
import { getUserDetails } from '../../services/userService'
import { user as userAtom } from '../../atoms/user'
import { useSetRecoilState } from 'recoil'
import { config } from '../../services/request'

export default function Login({ navigation }: {
  navigation: StackNavigationProp<any, any>
}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const setUser = useSetRecoilState(userAtom)

  useEffect(() => {
    setButtonDisabled((!username || !password));
  }, [username, password])

  const handleUserLogin = async (getToken) => {
    const token = await getToken(username, password)
    config.authToken = token
    const userDetails = await getUserDetails()
    setUser(userDetails)
    navigation.navigate('Home')
  }

  return (
    <View style={styles.screenContainer}>
      <View style={styles.formContainer}>
        <UsernameInput
          value={username}
          onChangeText={(text) => setUsername(text)} />
        <PasswordInput
          value={password}
          onChangeText={(text) => setPassword(text)} />
        <LoginButton onPress={() => handleUserLogin(signin)} disabled={buttonDisabled} />
        <SignUpButton onPress={() => handleUserLogin(signup)} disabled={buttonDisabled} />
      </View>
    </View>
  );
}

import { TextInput, StyleSheet, GestureResponderEvent } from 'react-native';

function Input({ placeholder, value, onChangeText, secureTextEntry }: {
  placeholder: string,
  value: string,
  onChangeText: (a: string) => void,
  secureTextEntry?: boolean
}) {
  return (
    <TextInput
      autoCapitalize="none"
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry} />
  );
}

function UsernameInput({ value, onChangeText }: {
  value: string,
  onChangeText: (a: string) => void
}) {
  return (
    <Input
      placeholder="Enter your username"
      value={value}
      onChangeText={onChangeText} />
  );
}

function PasswordInput({ value, onChangeText }: {
  value: string,
  onChangeText: (a: string) => void
}) {
  return (
    <Input
      placeholder="Enter your password"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={true} />
  );
}

import { TouchableHighlight } from 'react-native';

function Button({ text, onPress, disabled }: {
  text: string,
  onPress: (event: GestureResponderEvent) => void,
  disabled?: boolean
}) {
  return (
    <TouchableHighlight disabled={disabled} style={styles.button} onPress={onPress}>
      <Text style={!disabled ? styles.buttonText : { color: 'gray' }}>{text}</Text>
    </TouchableHighlight>
  );
}

function LoginButton({ onPress, disabled }: {
  onPress: (event: GestureResponderEvent) => void,
  disabled?: boolean
}) {
  return (
    <Button
      text="Login"
      onPress={onPress}
      disabled={disabled} />
  );
}

function SignUpButton({ onPress, disabled }: {
  onPress: (event: GestureResponderEvent) => void,
  disabled?: boolean
}) {
  return (
    <Button
      text="Sign Up"
      onPress={onPress}
      disabled={disabled} />
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E5DDD5'
  },
  formContainer: {
    height: 250,
    width: '100%',
    justifyContent: 'space-between'
  },
  input: {
    padding: 10,
    borderRadius: 10,
    width: '100%',
    backgroundColor: 'white'
  },
  button: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#075E55'
  },
  buttonText: {
    color: 'white'
  }
});