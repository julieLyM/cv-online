import React from 'react';
import {
  WorkContainer,
  WorkBloc,
  WorkTitle,
  Point,
  Img,
} from './style/workStyle';
import cat from './style/image/cat.png';
import movieDB from './style/image/movieDB.png';
import HP from './style/image/HP.png';
import marvel from './style/image/marvel.png';

export const Portfolio = () => {
  return (
    <div>
      <Point>...</Point>
      <WorkTitle>Side Project</WorkTitle>
      <WorkContainer>
        <WorkBloc>
          <h2>Application Cat Mash</h2>
          <a href="https://catmash-application.herokuapp.com/">
            <p>choisir son chat preferer selon les photos proposé</p>
            <Img src={cat} />
          </a>
        </WorkBloc>

        <WorkBloc>
          <h2>Application Harry Potter</h2>
          <a href="https://app-harrypotter.herokuapp.com/">
            <p>Presentation des personnages harry potter et un quizz</p>
            <Img src={HP} />
          </a>
        </WorkBloc>

        <WorkBloc>
          <h2>Application Marvel</h2>
          <a href="https://marvel-reacthooks.netlify.app/">
            <p>
              Presentation des personnages Marvel (React Hooks /
              styled-components / marvel developers api)
            </p>
            <Img src={marvel} />
          </a>
        </WorkBloc>

        <WorkBloc>
          <h2>Application The Movie Database</h2>
          <a href="https://themovie-database-app.herokuapp.com/">
            <p>
              Application sur React / Node (Express) / TypeScript Heroku:
              CircleCi
            </p>
            <Img src={movieDB} />
          </a>
        </WorkBloc>
      </WorkContainer>
    </div>
  );
};