import React from 'react';
import Header from '../../base/Header';
import IconButton from '../../base/IconButton';
import AppTitle from '../AppTitle';

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