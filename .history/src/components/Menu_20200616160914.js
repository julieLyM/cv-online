import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  MenuContainer,
  MenuPicture,
  MenuBlocLink,
  GreenLink,
} from './style/menuStyle';

import pic from './style/image/pic.png';

export default class Menu extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <MenuPicture src={pic} />
        </Link>
        <MenuContainer>
          <MenuBlocLink>
            <GreenLink to="/About">About</GreenLink>
            <GreenLink to="/Portfolio">Works</GreenLink>
            <GreenLink to="/InfoPro">Formation</GreenLink>
          </MenuBlocLink>

          <MenuBlocLink>
            <GreenLink href={'mailto:julielyminh@gmail.com'}>Email</GreenLink>
            <GreenLink>Github</GreenLink>
            <GreenLink>LinkedIn</GreenLink>
          </MenuBlocLink>
        </MenuContainer>
      </div>
    );
  }
}
