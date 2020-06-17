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
          professionnelle basé en region parisienne (77).
          <br />
          J'ai fais le choix de changé de voie professionnelle car je voulais un
          nouveau challenge dans ma vie. <br />
          J'ai décidé de choisir le développement car plus jeune je m'amusais
          déjà à faire de l'integration et des fonctionnalités avec mes amis. Je
          n'ai jamais oublié cet hobby alors pourquoi pas en faire son nouveau métier... 
        </AboutSimpleText>
      </AboutBloc>
      <Point>...</Point>

      <AboutBloc>
        <AboutSubTitle> Ce que je sais faire</AboutSubTitle>
        <AboutSimpleText>
          Cela fait depuis septembre 2018 que je suis dans le développement
          web,je suis spécialisée sur le langage javascript, je travaille
          notamment sur React et NodeJs (express), j'ai également des
          compétences sur d'autre technologies comme angular et vueJs. J'aime
          également travailler sur du Devops comme Docker et CircleCi. Je suis
          ouverte à apprendre d'autres langages, j'aime monter en compétences !
        </AboutSimpleText>
      </AboutBloc>
      <Point>...</Point>

      <AboutBloc>
        <AboutSubTitle> Pour plus d'informations</AboutSubTitle>
        <AboutPersonalDiv>
          <AboutPersonalDivColPic>
            <AboutPicture src={me} alt="me" />
          </AboutPersonalDivColPic>

          <AboutPersonalDivCol1>
            <AboutLittleTitle>Nom </AboutLittleTitle>
            <AboutSimpleText>Ly-Minh</AboutSimpleText>

            <AboutLittleTitle>Prénom </AboutLittleTitle>
            <AboutSimpleText>Julie </AboutSimpleText>

            <AboutLittleTitle>Mobilité </AboutLittleTitle>
            <AboutSimpleText>Région Parisienne </AboutSimpleText>
          </AboutPersonalDivCol1>

          <AboutPersonalDivCol2>
            <AboutLittleTitle>Tel </AboutLittleTitle>
            <AboutSimpleText>0650000703</AboutSimpleText>

            <AboutLittleTitle>Email </AboutLittleTitle>
            <AboutSimpleText>julielyminh@gmail.com</AboutSimpleText>

            <AboutLittleTitle>Discord </AboutLittleTitle>
            <AboutSimpleText>julieeee#6560 </AboutSimpleText>
          </AboutPersonalDivCol2>
        </AboutPersonalDiv>
      </AboutBloc>

      <Point>...</Point>
    </AboutContainer>
  );
};
