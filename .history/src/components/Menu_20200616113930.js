import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  MenuContainer,
  MenuPicture,
  MenuBlocPicture,
  MenuBlocLink,
  GreenLink,
} from './style/menuStyle';

import pic from './style/pic.png';

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
            <GreenLink>Email</GreenLink>
            <GreenLink>Github</GreenLink>
            <GreenLink>LinkedIn</GreenLink>
          </MenuBlocLink>
        </MenuContainer>
      </div>
    );
  }
}
