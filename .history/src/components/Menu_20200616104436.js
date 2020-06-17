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
          <GreenLink to="/About">About</GreenLink>
          <GreenLink to="/InfoPro">Parcours Pro</GreenLink>
          <GreenLink to="/Portfolio">Works</GreenLink>
        </MenuBlocLink>

        <MenuBlocLink>
          <GreenLink to="/About">Email</GreenLink>
          <GreenLink to="/InfoPro">Github</GreenLink>
          <GreenLink to="/Portfolio">LinkedIn</GreenLink>
        </MenuBlocLink>

      </MenuContainer>
    );
  }
}
