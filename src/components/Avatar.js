import React from 'react';
import { Image } from 'react-native';

export default function Avatar({ uri }) {
  return (
    <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={{ uri }} />
  );
}