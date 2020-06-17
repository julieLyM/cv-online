import React from 'react';

import {
  AboutContainer,
  AboutSimpleText,
  AboutBloc,
  AboutSubTitle,
  AboutLittleTitle,
} from './style/aboutStyle';

export const InfoPro = () => {
  return (
    <FormationContainer>
      <AboutBloc>
        <AboutSubTitle> EXPÉRIENCE PROFESSIONNELLE</AboutSubTitle>
        <AboutLittleTitle>Octobre 2019 - mars 2020 </AboutLittleTitle>
        <AboutSimpleText>
          <p>
            Développeuse full-stack Javascript à STACKERINE, Sarcelles (95){' '}
          </p>
          <p>
            Formation interne :
            <ul>
              <li>Javascript (codewars)</li>
              <li>React / hooks / Redux / styled-components</li>
              <li>VueJs</li>
              <li>TypeScript</li>
              <li>NodeJs (express)</li>
              <li>Postgres</li>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>GraphQL & Appollo</li>
              <li>DevOps : Docker / circleCI</li>
              <li>Test unitaire : Mocha</li>
              <li>Github / GitLab</li>
            </ul>
          </p>
          <p>
            Plusieurs projets effectués dont une application interne de
            e-learning Stackerine (React / Node / Postgres)
          </p>
        </AboutSimpleText>
        <AboutLittleTitle>Février à juillet 2019 (6mois) </AboutLittleTitle>
        <AboutSimpleText>
          <p>
            Stage en tant que développeuse web full-stack à BLUEANCHOR.IO, à
            Paris 19ème.
          </p>
          <ul>
            <li>
              Création et développement d'application sur Angular 6/7 et Ionic
              3/4
            </li>
            <li>
              Réalisation de base de données NoSql avec NestJs et utilisation de
              MongoDB{' '}
            </li>
            <li>Methode Agile appliqué</li>
          </ul>
        </AboutSimpleText>
        <AboutLittleTitle>Août 2010 à août 2018 (8ans) </AboutLittleTitle>
        <AboutSimpleText>
          Agent d'escale à Alyzia ARC1 à Roissy Charles de Gaulle (95) Service
          commerciale et enregistrement des passagers pour Singapour Airlines,
          Malaysia Airlines, Icelandair et Kuwait Airways.
        </AboutSimpleText>
        <AboutLittleTitle>Janvier 2008 à janvier 2009 (1an)</AboutLittleTitle>
        <AboutSimpleText>
          Fille au pair avec Interexchange à Phoenix aux Etats-Unis.{' '}
        </AboutSimpleText>
      </AboutBloc>

      <div style={{ width: '10%' }}></div>

      <AboutBloc>
        <AboutSubTitle>FORMATION</AboutSubTitle>
        <AboutLittleTitle>
          Septembre 2018 à février 2019 (5mois)
          <AboutLittleTitle>Wild Code School : </AboutLittleTitle>
        </AboutLittleTitle>
        <AboutSimpleText>
          apprentissage du langage Javascript spécialisation REACT et Node.
          <AboutSimpleText></AboutSimpleText>
          2010 : Mention Complémentaire Accueil dans les transports (BAC+1) au
          CFA Camas, Tremblay en France (93)
        </AboutSimpleText>
        <AboutSimpleText>
          2007 : Niveau BTS assistant de gestion PME-PMI au lycée
          Carcado-Saisseval à Paris (6)
        </AboutSimpleText>
      </AboutBloc>
    </FormationContainer>
  );
};
