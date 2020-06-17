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
            <GreenLink to="/Formation">Formation</GreenLink>
          </MenuBlocLink>

          <MenuBlocLink>
            <a href={'mailto:julielyminh@gmail.com'}>Email</a>
            <a href={'https://github.com/julieLyM'}>Github</a>
            <a
              href={'https://www.linkedin.com/in/julie-ly-minh-324212171/'}
            >
              LinkedIn
            </GreenLink>
          </MenuBlocLink>
        </MenuContainer>
      </div>
    );
  }
}
