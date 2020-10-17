import React from 'react';
import { Image } from 'react-native';

export default function Avatar({ uri, size = 55 }) {
  return (
    <Image style={{ width: size, height: size, borderRadius: 50 }} source={{ uri }} />
  );
}