import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  MenuContainer,
  MenuPicture,
  MenuBlocLink,
  MenuBody,
  GreenLink,
  GreenLinkBottom,
} from './style/menuStyle';

import pic from './style/image/pic.png';
import cv from './style/image/cv.pdf';

export default class Menu extends Component {
  render() {
    return (
      <MenuBody>
        <Link to="/">
          <MenuPicture src={pic} alt="logo" />
        </Link>
        <MenuContainer>
          <MenuBlocLink>
            <GreenLink to="/About">A propos</GreenLink>
            <GreenLink to="/Portfolio">Projets</GreenLink>
            <GreenLink to="/Formation">Formation</GreenLink>
          </MenuBlocLink>

          <MenuBlocLink>
            <GreenLinkBottom target="_top" href="mailto:julielyminh@gmail.com">
              Email
            </GreenLinkBottom>
            <GreenLinkBottom 
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
            >
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
      </MenuBody>
    );
  }
}
