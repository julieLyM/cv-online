import React from 'react';

import {
  AboutContainer,
  AboutSimpleText,
  AboutBloc,
  AboutSubTitle,
} from './style/aboutStyle';

import { Point } from './style/workStyle';

export const About = () => {
  return (
    <AboutContainer>
      <AboutBloc>
        <AboutSubTitle>About</AboutSubTitle>
        <AboutSimpleText>
          Hello, je suis Développeuse full-stack junior en reconversion
          professionnelle basé en region parisienne (77). J'ai fait le choix de
          changé de voie professionnelle car je voulais un nouveau challenge
          dans ma vie. <br />
          J'ai décidé de choisir le développement car plus jeune je m'amusais
          déjà à faire de l'integration et des fonctionnalités avec mes amis. Je
          n'ai jamais oublié cette envie de création et la fierté de construire
          des sites.
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
          ouverte à apprendre d'autre technologies s'il le faut.
        </AboutSimpleText>
      </AboutBloc>
      <Point>...</Point>

      <AboutBloc>
        <AboutSubTitle> Pour plus d'informations</AboutSubTitle>
        <div style={{ display: 'flex' }}>
          <div>
            <AboutSimpleText>
              <AboutLittleTitle>Nom :</AboutLittleTitle> Ly-Minh{' '}
            </AboutSimpleText>

            <AboutSimpleText>
            <AboutLittleTitle>Prénom :</AboutLittleTitle> Julie </AboutSimpleText>

            <AboutSimpleText><AboutLittleTitle>Mobilité :</AboutLittleTitle> Région Parisienne </AboutSimpleText>
          </div>

          <div>
            <AboutSimpleText><AboutLittleTitle>Téléphone :</AboutLittleTitle> 06 50 00 07 03 </AboutSimpleText>

            <AboutSimpleText><AboutLittleTitle>Email</AboutLittleTitle>: julielyminh@gmail.com </AboutSimpleText>

            <AboutSimpleText><AboutLittleTitle>Discord :</AboutLittleTitle> julieeee#6560 </AboutSimpleText>
          </div>
        </div>
      </AboutBloc>
      <Point>...</Point>
    </AboutContainer>
  );
};
