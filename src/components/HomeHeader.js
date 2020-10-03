import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HomeHeader() {

  function AppTitle() {
    return (
      <Text style={{ flex: 1, fontSize: 25, color: 'white' }}>SuperChat</Text>
    );
  }

  function IconButton({ icon }) {
    return (
      <TouchableHighlight style={{ marginLeft: 10 }}>
        <Icon name={icon} size={30} color="white" />
      </TouchableHighlight>
    );
  }

  const HomeSearchButton = () => (<IconButton icon="search" />);
  const HomeOptionsButton = () => (<IconButton icon="more-vert" />);

  return (
    <View style={styles.headerContainer}>
      <AppTitle />
      <HomeSearchButton />
      <HomeOptionsButton />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#075E55'
  }
});