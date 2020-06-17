import React from 'react';

import {
  AboutContainer,
  AboutSimpleText,
  AboutBloc,
  AboutSubTitle,
  test,
} from './style/aboutStyle';

export const About = () => {
  return (
    <AboutContainer>
      <AboutBloc>
        <AboutSubTitle> a propos de moi</AboutSubTitle>
        <AboutSimpleText>
          Je suis une Developpeuse full-stack en reconversion professionelle
          basé en region parisienne, j'ai fait le choix de changé de voie
          professionelle car je voulais un nouveau challenge dans ma vie. Mon
          appétence dans l'informatique m'a dirigé dans la voie du developpement
          web car j'aime construire et réaliser des applications de A à Z..
        </AboutSimpleText>
      </AboutBloc>
      <div>
        <Test>...</Test>
      </div>

      <AboutBloc>
        <AboutSubTitle> Ce que je sais faire</AboutSubTitle>
        <AboutSimpleText>
          Cela fait depuis septembre 2018 que je suis dans le developpement
          web,je suis spécialisée sur le langage javascript, je travaille
          notamment sur React et NodeJs (express), j'ai également des
          compétences sur d'autre technologie comme angular et vueJs. J'aime
          egalement travailler sur du devops comme Docker, Jenkins et CircleCi.
        </AboutSimpleText>
      </AboutBloc>
      <div style={{ width: '5%' }}></div>

      {/* <AboutBloc>
        <AboutSubTitle> Pour plus d'informations</AboutSubTitle>
        <AboutSimpleText>Nom : Ly-Minh </AboutSimpleText>

        <AboutSimpleText>Prénom : Julie </AboutSimpleText>

        <AboutSimpleText>Mobilité : Région Parisienne </AboutSimpleText>

        <AboutSimpleText>Téléphone : 06 50 00 07 03 </AboutSimpleText>

        <AboutSimpleText>Email : julielyminh@gmail.com </AboutSimpleText>

        <AboutSimpleText>Discord : julieeee#6560 </AboutSimpleText>
      </AboutBloc> */}
    </AboutContainer>
  );
};
