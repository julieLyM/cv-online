import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import {MenuPicture} from './style/menuStyle';
import pic from './style/image/pic.png';
import cv from './style/image/cv.pdf';

export default class Menu extends Component {
  render() {
    return (

<Navbar collapseOnSelect expand="lg" variant="light" bg="light" fixed="top" >
  <Container>
  <Navbar.Brand href="/"> 
   <MenuPicture src={pic} alt="logo" />
</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/About">A propos</Nav.Link>
      <Nav.Link href="/Portfolio">Projets</Nav.Link>
      <Nav.Link href="/Formation">Parcours professionnel</Nav.Link>
      <Nav.Link href="mailto:julielyminh@gmail.com">Email</Nav.Link>
      <Nav.Link href={cv} target="_blank" rel="noopener noreferrer">CV</Nav.Link>
      <Nav.Link href={'https://www.linkedin.com/in/julie-ly-minh-324212171/'}>LinkedIn</Nav.Link>
      <Nav.Link  href={'https://github.com/julieLyM'}
      target="_blank">Github</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>




      // <MenuBody>
      //   <Link to="/">
      //     <MenuPicture src={pic} alt="logo" />
      //   </Link>
      //   <MenuContainer>
      //     <MenuBlocLink>
      //       <GreenLink to="/About">A propos</GreenLink>
      //       <GreenLink to="/Portfolio">Projets</GreenLink>
      //       <GreenLink to="/Formation">Formation</GreenLink>
      //     </MenuBlocLink>

      //     <MenuBlocLink>
      //       <GreenLinkBottom target="_top" href="mailto:julielyminh@gmail.com">
      //         Email
      //       </GreenLinkBottom>
      //       <GreenLinkBottom 
      //         href={cv}
      //         target="_blank"
      //         rel="noopener noreferrer"
      //       >
      //         CV
      //       </GreenLinkBottom>
      //       <GreenLinkBottom
      //         href={'https://github.com/julieLyM'}
      //         target="_blank"
      //       >
      //         Github
      //       </GreenLinkBottom>
      //       <GreenLinkBottom
      //         href={'https://www.linkedin.com/in/julie-ly-minh-324212171/'}
      //         target="_blank"
      //       >
      //         LinkedIn
      //       </GreenLinkBottom>
      //     </MenuBlocLink>
      //   </MenuContainer>
      // </MenuBody>
    );
  }
}
