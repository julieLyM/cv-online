import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom';
import {
  MenuPicture,
  GreenLink,
  GreenLinkBottom
} from './style/menuStyle';

import pic from './style/image/pic.png';
import cv from './style/image/cv.pdf';

export class SideBar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
 
  render () {
    return (
      <Menu>
        <Link to="/">
          <MenuPicture src={pic} alt="logo" />
        </Link>
        <GreenLink to="/About">A propos</GreenLink>
            <GreenLink to="/Portfolio">Projets</GreenLink>
            <GreenLink to="/Formation">Formation</GreenLink>
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
            <GreenLinkBottom 
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </GreenLinkBottom>
            <GreenLinkBottom target="_top" href="mailto:julielyminh@gmail.com">
              Email
            </GreenLinkBottom>
      </Menu>
    );
  }
}