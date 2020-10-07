import React from 'react';
import { TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function IconButton({ style, icon, color = 'white' }) {
  return (
    <TouchableHighlight style={style}>
      <Icon name={icon} size={30} color={color} />
    </TouchableHighlight>
  );
}