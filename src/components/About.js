import React from 'react';

import {
  AboutContainer,
  AboutSimpleText,
  AboutBloc,
  AboutSubTitle,
  AboutLittleTitle,
  AboutPicture,
  AboutPersonalDiv,
  AboutPersonalDivColPic,
  AboutPersonalDivCol1,
  AboutPersonalDivCol2,
  AboutText,
} from './style/aboutStyle';

import { Point } from './style/workStyle';

import me from './style/image/me.jpg';

export const About = () => {
  return (
    <AboutContainer>
      <AboutBloc>
        <AboutSubTitle id="action-1">A propos</AboutSubTitle>
        <AboutSimpleText>
          Hello, je suis Développeuse web depuis 2 ans basée dans la belle
          région de la Loire-Atlantique (44). Je suis spécialisée sur le langage
          JavaScript. Je travaille notamment sur ReactJs et NodeJs (express).
          Aujourd'hui, je suis en train de monter en compétences sur PHP
          (Symfony) et WordPress.
        </AboutSimpleText>
      </AboutBloc>
      <br></br>
      <br></br>
      <AboutBloc>
        <AboutSubTitle> Pour plus d'informations</AboutSubTitle>
        <AboutPersonalDiv>
          <AboutPersonalDivColPic>
            <AboutPicture src={me} alt="me" />
          </AboutPersonalDivColPic>

          <AboutPersonalDivCol1>
            <AboutLittleTitle>Nom </AboutLittleTitle>
            <AboutText>LY-MINH</AboutText>
            <AboutLittleTitle>Prénom </AboutLittleTitle>
            <AboutText>Julie </AboutText>
            <AboutLittleTitle>Mobilité </AboutLittleTitle>
            <AboutText>Saint-Nazaire/Nantes</AboutText>
          </AboutPersonalDivCol1>

          <AboutPersonalDivCol2>
            <AboutLittleTitle>Tel </AboutLittleTitle>
            <AboutText>06-50-00-07-03</AboutText>

            <AboutLittleTitle>Email </AboutLittleTitle>
            <AboutText>julielyminh@gmail.com</AboutText>

            <AboutLittleTitle>Discord </AboutLittleTitle>
            <AboutText>julieeee#6560 </AboutText>
          </AboutPersonalDivCol2>
        </AboutPersonalDiv>
      </AboutBloc>
      <br></br>
      <br></br>{' '}
    </AboutContainer>
  );
};
