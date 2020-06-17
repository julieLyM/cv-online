import React, { Component } from 'react';
import { HomeContainer, HomeSubtitle, HomeTitle } from './style/homeStyle';
import land from './style/image/land.png';
import { About } from './About';
import { InfoPro } from './Formation';
import { Work } from './Work';

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <img src={land} />

        <About />
        <Formation />
        <Work />
      </HomeContainer>
    );
  }
}