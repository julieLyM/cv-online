import React from 'react';
import {
  WorkContainer,
  WorkBloc,
  WorkTitle,
  Point,
  Img,
} from './style/workStyle';
import { AboutSimpleText } from './style/aboutStyle';

import cat from './style/image/cat.png';
import movieDB from './style/image/movieDB.png';
import HP from './style/image/HP.png';
import marvel from './style/image/marvel.png';

export const Work = () => {
  return (
    <div>
      <WorkTitle>Side Project</WorkTitle>
      <WorkContainer>
        <WorkBloc>
          <h2>Application Cat Mash</h2>
          <a href="https://catmash-application.herokuapp.com/">
            <AboutSimpleText>
              choisir son chat preferé selon les photos proposées
            </AboutSimpleText>
            <Img src={cat} />
          </a>
        </WorkBloc>

        <WorkBloc>
          <h2>Application Harry Potter</h2>
          <a href="https://app-harrypotter.herokuapp.com/">
            <AboutSimpleText>
              Presentation des personnages de harry potter et un quizz (React
              Hooks / styled-components / NodeJs )
            </AboutSimpleText>
            <Img src={HP} />
          </a>
        </WorkBloc>

        <WorkBloc>
          <h2>Application Marvel</h2>
          <a href="https://marvel-reacthooks.netlify.app/">
            <AboutSimpleText>
              Presentation des personnages Marvel (React Hooks /
              styled-components / marvel developers api)
            </AboutSimpleText>
            <Img src={marvel} />
          </a>
        </WorkBloc>

        <WorkBloc>
          <h2>Application The Movie Database</h2>
          <a href="https://themovie-database-app.herokuapp.com/">
            <AboutSimpleText>
              Application sur React / Node (Express) / TypeScript Heroku:
              CircleCi
            </AboutSimpleText>
            <Img src={movieDB} />
          </a>
        </WorkBloc>
      </WorkContainer>
    </div>
  );
};
