import React from 'react';
import {
  FormationContainer,
  FormationBloc,
  FormationDiv,
  FormationText,
  FormatoinLi
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
              Octobre 2019 - mars 2020
            </AboutLittleTitle>
            <p>
              Développeuse full-stack Javascript à{' '}
              <a href="https://www.stackerine.com/" target="_blank" rel="noopener noreferrer">
                STACKERINE
              </a>
              , Sarcelles (95){' '}
            </p>
            <div>
              Formation interne :
              <ul>
                <FormatoinLi>Front-end : </FormatoinLi>
                <li> Javascript</li>
                <li>React / hooks / Redux / styled-components</li>
                <li>VueJs</li>
                <li>TypeScript</li>
                <br></br>
                <FormatoinLi>Back-end : </FormatoinLi>
                <li>NodeJs (express)</li>
                <li>Postgres</li>
                <li>MongoDB</li>
                <li>SQL</li>
                <li>GraphQL & Appollo</li><br></br>
                <FormatoinLi>DevOps : </FormatoinLi>
                <li>Docker / circleCI</li>
              </ul>
            </div>
          </FormationText>

          <FormationText>
            <AboutLittleTitle>Février à juillet 2019</AboutLittleTitle>
            <p>
              Stage de 6 mois en tant que développeuse web full-stack à BLUEANCHOR.IO, à
              Paris 19ème.
            </p>
            <ul>
              <FormatoinLi>
                Front-end :              
              </FormatoinLi>
               <li>Angular 6/7 & Ionic 3/4</li> 
              <FormatoinLi>
                Back-end :               
              </FormatoinLi>
                <li>NestJs & MongoDB</li>
            </ul>
            Projet client : <a href="https://noubliejamais.fr/application/" target="_blank" rel="noopener noreferrer">
              N'oublie Jamais
            </a>{' '}
          </FormationText>
        </FormationBloc>

        <div style={{ width: '10%' }}></div>

        <FormationDiv>
          <AboutSubTitle>FORMATION</AboutSubTitle>

          <FormationText>
            <AboutLittleTitle>
              Novembre 2020 à aujourd'hui<br></br>
              <a href="https://www.wf3.fr" target="_blank" rel="noopener noreferrer">
                WebForce3
              </a>{' '}
              avec Social Builder  à Paris 18
            </AboutLittleTitle>
            <div>
              Formation Full-stack développeur en 4 mois, preparation du "Titre
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
              Septembre 2018 à février 2019<br></br>
              <a href="https://www.wildcodeschool.com/fr-FR" target="_blank" rel="noopener noreferrer">
                Wild Code School
              </a>
               à Paris
            </AboutLittleTitle>
            <div>
              Formation Full-stack développeur en 5 mois, apprentissage :
              <ul>
                <li>HTML / CSS</li>
                <li>React</li>
                <li>Node</li>
                <li>MySQL</li>
              </ul>
            </div>
          </FormationText>
        </FormationDiv>
      </FormationContainer>
      <Point>...</Point>
    </div>
  );
};
