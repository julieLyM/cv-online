import React, { Component } from 'react';
import { HomeContainer, HomeSubtitle, HomeTitle } from './style/homeStyle';
import land from './style/land.png';
import { About } from './About';
import { InfoPro } from './InfoPro';
import {Menu} from './'

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <img src={land} />
        <Menu />

        <About />
        <InfoPro />
      </HomeContainer>
    );
  }
}
