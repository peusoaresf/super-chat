import React from 'react';
import Header from './base/Header.js';
import IconButton from './base/IconButton.js';
import AppTitle from './AppTitle.js';

export default function HomeHeader() {

  const HomeSearchButton = () => (<IconButton icon="search" />);
  const HomeOptionsButton = () => (<IconButton icon="more-vert" style={{ marginLeft: 10 }} />);

  return (
    <Header>
      <AppTitle />
      <HomeSearchButton />
      <HomeOptionsButton />
    </Header>
  );
}