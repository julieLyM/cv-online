import React from 'react';
import {
  FormationContainer,
  FormationBloc,
  FormationDiv,
  FormationText,
} from './style/formationStyle';

import { AboutSubTitle, AboutLittleTitle } from './style/aboutStyle';

import { Point } from './style/workStyle';

export const Formation = () => {
  return (
    <div>
      <FormationContainer>
        <FormationBloc>
          <AboutSubTitle> EXPÉRIENCE PROFESSIONNELLE</AboutSubTitle>
          <FormationText>
            <AboutLittleTitle>
              Octobre 2019 - mars 2020 (5 mois)
            </AboutLittleTitle>
            <p>
              Développeuse full-stack Javascript à{' '}
              <a href="https://www.stackerine.com/" target="_blank">
                STACKERINE
              </a>
              , Sarcelles (95){' '}
            </p>
            <div>
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
            </div>
            <p>
              Plusieurs projets effectués dont une application interne de
              e-learning Stackerine (React / Node / Postgres)
            </p>
          </FormationText>

          <FormationText>
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
              <li>Environnement Mac</li>
            </ul>
            J'ai notamment travailler sur plusieurs projets clients comme
            l'application{' '}
            <a href="https://noubliejamais.fr/application/" target="_blank">
              N'oublie Jamais
            </a>{' '}
            mais également un site interne BlueSchool.
          </FormationText>
          <FormationText>
            <AboutLittleTitle>Août 2010 à août 2018 (8ans) </AboutLittleTitle>
            <p>
              {' '}
              Agent d'escale à Alyzia ARC1 à Roissy Charles de Gaulle (95)
              Service commerciale et enregistrement des passagers pour Singapour
              Airlines, Malaysia Airlines, Icelandair et Kuwait Airways.
            </p>
          </FormationText>
          <FormationText>
            <AboutLittleTitle>
              Janvier 2008 à janvier 2009 (1an)
            </AboutLittleTitle>
            <p> Fille au pair avec Interexchange à Phoenix aux Etats-Unis.</p>
          </FormationText>
        </FormationBloc>

        <div style={{ width: '10%' }}></div>

        <FormationDiv>
          <AboutSubTitle>FORMATION</AboutSubTitle>

          <FormationText>
            <AboutLittleTitle>
              Novembre 2020 à février 2021 (4 mois)<br></br>
              <a href="https://www.wf3.fr" target="_blank">
                WebForce3
              </a>{' '}
              avec Social Builder  à Paris 18
            </AboutLittleTitle>
            <div>
              Formation Full stack développeur en 4 mois, preparation du "Titre
              de developpeur web et mobile" (RNCP Bac+2), apprentissage :
              <ul>
                <li>HTML / CSS</li>
                <li>Javascript (Angular)</li>
                <li>Wordpress</li>
                <li>PHP (Symphony et Laravel)</li>
                <li>MySQL</li>
              </ul>
            </div>
          </FormationText>

          <FormationText>
            <AboutLittleTitle>
              Septembre 2018 à février 2019 (5mois)<br></br>
              <a href="https://www.wildcodeschool.com/fr-FR" target="_blank">
                Wild Code School
              </a>
               à Paris
            </AboutLittleTitle>
            <div>
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
            </div>
          </FormationText>

          <FormationText>
            <AboutLittleTitle> 2010 </AboutLittleTitle>{' '}
            <p>
              Mention Complémentaire Accueil dans les transports (BAC+1) au CFA
              Camas, Tremblay en France (93)
            </p>
          </FormationText>

          <FormationText>
            <AboutLittleTitle> 2007 </AboutLittleTitle>{' '}
            <p>
              Niveau BTS assistant de gestion PME-PMI au lycée Carcado-Saisseval
              à Paris (6)
            </p>
          </FormationText>
        </FormationDiv>
      </FormationContainer>
      <Point>...</Point>
    </div>
  );
};
