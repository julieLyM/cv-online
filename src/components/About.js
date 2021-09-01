import React from 'react';

import {
  AboutContainer,
  AboutText
} from './style/aboutStyle';
import Badge from 'react-bootstrap/Badge';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


import me from './style/image/me.jpg';

export const About = () => {
  return (

<Container style={{marginTop:'10%'}}>

  <Row>
    <Col md={4}> 
    <AboutContainer>
    <AboutText>
        <h2>
          <Badge pill bg="warning">
                A propos :
          </Badge>   
        </h2> 
          Bienvenue chez moi ! Bon, si vous êtes là c'est parce que vous êtes interessé(e) par mon profil.
          Vous trouverez toutes les informations me concernant.
      </AboutText>
    </AboutContainer>

      </Col>


    <Col md={{ span: 2, offset: 2 }} >
    
    <Card style={{ width: '28rem',marginBottom:'25%',borderRadius:'30px' }}>
          <AboutText>
      <Card.Body>

        <Card.Title>  
          <Badge pill bg="warning">   
            En resumé :
          </Badge>   
        </Card.Title>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={me} 
        />
        <Card.Text>
                Je suis développeuse web depuis 3 ans, je suis axée sur le front que le back. Pourquoi ? Parce que j'ai commencé par le front-end (avec JavaScript puis React et ensuite un peu de back avec NodeJS...). 
              Et maintenant, je pratique du PHP avec le framework Symfony et du MySQL. 
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>LY-MINH Julie</ListGroupItem>
        <ListGroupItem>Saint-Nazaire - Nantes</ListGroupItem>
        <ListGroupItem>06-50-00-07-03</ListGroupItem>
        <ListGroupItem>julielyminh@gmail.com</ListGroupItem>
      </ListGroup>
          </AboutText>

    </Card></Col>
  </Row>
  </Container>


  );
};
