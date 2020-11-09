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
        <AboutSubTitle>About</AboutSubTitle>
        <AboutSimpleText>
          Hello, je suis Développeuse full-stack junior en reconversion
          professionnelle basée en région parisienne (77) mais également en
          Loire-Atlantique (44).
          {/* <br />
          J'ai fais le choix de changé de voie professionnelle car je voulais un
          nouveau challenge dans ma vie. <br />
          J'ai décidé de choisir le développement car plus jeune je m'amusais
          déjà à faire de l'integration et des fonctionnalités avec mes amis. Je
          n'ai jamais oublié cet hobby alors pourquoi pas en faire son nouveau métier...  */}
        </AboutSimpleText>

        <AboutSimpleText>
          Cela fait depuis 2 ans que j'ai mis les pieds dans le développement
          web, j'ai commencé par de l'intégration HTML5 et CSS3, puis je me suis
          spécialisée sur le langage JavaScript. Je travaille notamment sur les
          librairies ReactJs et NodeJs (express).
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
            <AboutText>Ly-Minh</AboutText>
            <AboutLittleTitle>Prénom </AboutLittleTitle>
            <AboutText>Julie </AboutText>
            <AboutLittleTitle>Mobilité </AboutLittleTitle>
            <AboutText>Région Parisienne /</AboutText>{' '}
            <AboutText>Nantaise </AboutText>
          </AboutPersonalDivCol1>

          <AboutPersonalDivCol2>
            <AboutLittleTitle>Tel </AboutLittleTitle>
            <AboutText>0650000703</AboutText>

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
