import React from 'react';
import {
  FormationContainer,
  FormationBloc,
  FormationDiv,
} from './style/formationStyle';

import {
  AboutSimpleText,
  AboutSubTitle,
  AboutLittleTitle,
} from './style/aboutStyle';

import { Point } from './style/workStyle';

export const Formation = () => {
  return (
    <div>
      <FormationContainer>
        <FormationBloc>
          <AboutSubTitle> EXPÉRIENCE PROFESSIONNELLE</AboutSubTitle>
          <AboutSimpleText>
            <AboutLittleTitle>Octobre 2019 - mars 2020 </AboutLittleTitle>
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
          <AboutSimpleText>
            <AboutLittleTitle>Février à juillet 2019 (6mois) </AboutLittleTitle>
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
                Réalisation de base de données NoSql avec NestJs et utilisation
                de MongoDB{' '}
              </li>
              <li>Méthode Agile appliqué</li>
            </ul>
            J'ai notamment travailler sur plusieurs projets clients comme
            l'application n'oublie jamais mais également un site interne
            BlueSchool.
          </AboutSimpleText>
          <AboutSimpleText>
            <AboutLittleTitle>Août 2010 à août 2018 (8ans) </AboutLittleTitle>
            <p>
              {' '}
              Agent d'escale à Alyzia ARC1 à Roissy Charles de Gaulle (95)
              Service commerciale et enregistrement des passagers pour Singapour
              Airlines, Malaysia Airlines, Icelandair et Kuwait Airways.
            </p>
          </AboutSimpleText>
          <AboutSimpleText>
            <AboutLittleTitle>
              Janvier 2008 à janvier 2009 (1an)
            </AboutLittleTitle>
            <p> Fille au pair avec Interexchange à Phoenix aux Etats-Unis.</p>
          </AboutSimpleText>
        </FormationBloc>

        <div style={{ width: '10%' }}></div>

        <FormationDiv>
          <AboutSubTitle>FORMATION</AboutSubTitle>

          <AboutSimpleText>
            <AboutLittleTitle>
              Septembre 2018 à février 2019 (5mois) Wild Code School à Paris
            </AboutLittleTitle>
            <p>
              {' '}
              Formation Full stack développeur en 5 mois, apprentissage :
              <ul>
                <li>HTML / CSS</li>
                <li>React</li>
                <li>Node</li>
                <li>MySQL</li>
              </ul>
              3 projets effectués en groupe de 5 :
              <li>Biographie d'un photographe (HTML / CSS) </li>
              <li>Cookie Movie (React)</li>
              <li>
                Le Conteur Digital (blog de récit de marques pour les
                entreprises) avec Mathias Savary (React/Node/MySQL)
              </li>
            </p>
          </AboutSimpleText>

          <AboutSimpleText>
            <AboutLittleTitle> 2010 </AboutLittleTitle> </p>Mention Complémentaire
            Accueil dans les transports (BAC+1) au CFA Camas, Tremblay en France
            (93)</p>
          </AboutSimpleText>

          <AboutSimpleText>
            <AboutLittleTitle> 2007 </AboutLittleTitle> Niveau BTS assistant de
            gestion PME-PMI au lycée Carcado-Saisseval à Paris (6)
          </AboutSimpleText>
        </FormationDiv>
      </FormationContainer>
      <Point>...</Point>
    </div>
  );
};
