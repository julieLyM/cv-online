import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  MenuContainer,
  MenuPicture,
  MenuBlocLink,
  GreenLink,
  GreenLinkBottom,
} from './style/menuStyle';

import pic from './style/image/pic.png';
import cv from './style/image/cv-julielyminh.pdf';

export default class Menu extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <MenuPicture src={pic} alt="logo" />
        </Link>
        <MenuContainer>
          <MenuBlocLink>
            <GreenLink to="/About">About</GreenLink>
            <GreenLink to="/Portfolio">Works</GreenLink>
            <GreenLink to="/Formation">Formation</GreenLink>
          </MenuBlocLink>

          <MenuBlocLink>
            <GreenLinkBottom target="_top" href="mailto:julielyminh@gmail.com">
              Email
            </GreenLinkBottom>
            <GreenLinkBottom target="_top" href={cv}>
              CV
            </GreenLinkBottom>
            <GreenLinkBottom
              href={'https://github.com/julieLyM'}
              target="_blank"
            >
              Github
            </GreenLinkBottom>
            <GreenLinkBottom
              href={'https://www.linkedin.com/in/julie-ly-minh-324212171/'}
              target="_blank"
            >
              LinkedIn
            </GreenLinkBottom>
          </MenuBlocLink>
        </MenuContainer>
      </div>
    );
  }
}
