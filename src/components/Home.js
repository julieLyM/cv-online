import React, { Component } from 'react';
import { HomeContainer, HomePicture } from './style/homeStyle';
import land from './style/image/land.png';
import { About } from './About';
import { Formation } from './Formation';
import { Work } from './Work';

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <HomePicture src={land} alt="" />

        <About />
        <Formation />
        <Work />
      </HomeContainer>
    );
  }
}
