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
      <MenuContainer>

        {/* <MenuBlocPicture>
          <Link to="/">
            <MenuPicture src={pic} />
          </Link>
        </MenuBlocPicture> */}

        <MenuBlocLink>
          <GreenLink to="/Portfolio">Works</GreenLink>
          <GreenLink to="/Contact">Contact</GreenLink>
          <GreenLink to="/InfoPro">Parcours Pro</GreenLink>
          <GreenLink to="/About">About</GreenLink>
        </MenuBlocLink>

      </MenuContainer>
    );
  }
}