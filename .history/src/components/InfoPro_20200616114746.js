import React from 'react';

import {
  AboutContainer,
  AboutSimpleText,
  AboutBloc,
  AboutSubTitle,
  AboutLittleTitle
} from './style/aboutStyle';

export const InfoPro = () => {
  return (
    <AboutContainer>
      <AboutBloc>
        <AboutSubTitle> EXPÉRIENCE PROFESSIONNELLE</AboutSubTitle>
        <AboutSubTitle>Octobre 2019 - mars 2020 </AboutSubTitle>
        <AboutSimpleText>
          Formation interne développeuse full-stack Javascript à STACKERINE,
          Sarcelles (95) Plusieurs projets effectués dont une application
          interne de e-learning Stackerine (React / Node / Postgres){' '}
        </AboutSimpleText>
        <AboutSimpleText>Février à juillet 2019 (6mois) </AboutSimpleText>
        <AboutSimpleText>
          Stage en tant que développeuse web full-stack à BLUEANCHOR.IO, à Paris
          19ème. • Création et développement d'application sur Angular 6/7 et
          Ionic 3/4 • Réalisation de base de données NoSql avec NestJs et
          utilisation de MongoDB • Methode Agile appliqué{' '}
        </AboutSimpleText>
        <AboutSimpleText>Août 2010 à août 2018 (8ans) </AboutSimpleText>
        <AboutSimpleText>
          Agent d'escale à Alyzia ARC1 à Roissy Charles de Gaulle (95) Service
          commerciale et enregistrement des passagers pour Singapour Airlines,
          Malaysia Airlines, Icelandair et Kuwait Airways.
        </AboutSimpleText>
        <AboutSimpleText>
          Janvier 2008 à janvier 2009 (1an) Fille au pair avec Interexchange à
          Phoenix aux Etats-Unis.
        </AboutSimpleText>
      </AboutBloc>

      <div style={{ width: '10%' }}></div>

      <AboutBloc>
        <AboutSubTitle>FORMATION</AboutSubTitle>
        <AboutSimpleText>
          Septembre 2018 à février 2019 (5mois) Wild Code School : apprentissage
          du langage Javascript spécialisation REACT et Node.
        </AboutSimpleText>
        <AboutSimpleText>
          2010 : Mention Complémentaire Accueil dans les transports (BAC+1) au
          CFA Camas, Tremblay en France (93)
        </AboutSimpleText>
        <AboutSimpleText>
          2007 : Niveau BTS assistant de gestion PME-PMI au lycée
          Carcado-Saisseval à Paris (6)
        </AboutSimpleText>
      </AboutBloc>
    </AboutContainer>
  );
};