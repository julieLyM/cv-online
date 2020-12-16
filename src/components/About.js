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
          Hello, je suis Développeuse full-stack junior en reconversion
          professionnelle basée en région parisienne (77) mais également en
          Loire-Atlantique (44).
        </AboutSimpleText>

        <AboutSimpleText>
          Cela fait depuis 2 ans que j'ai mis les pieds dans le développement
          web, j'ai commencé par de l'intégration HTML5 et CSS3, puis je me suis
          spécialisée sur le langage JavaScript. Je travaille notamment sur les
          librairies ReactJs et NodeJs (express). Aujourd'hui, je suis en
          formation sur PHP (Symphony) et WordPress pour toujours être à jour
          dans mes compétences !
        </AboutSimpleText>
      </AboutBloc>
      <Point>...</Point>
      <p></p>

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
            <AboutText>Région Parisienne /</AboutText>{' '}
            <AboutText>Nantaise </AboutText>
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

      <Point>...</Point>
    </AboutContainer>
  );
};
