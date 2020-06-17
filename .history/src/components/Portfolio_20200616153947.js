import React from 'react';
import {
  WorkContainer,
  WorkBloc,
  WorkTitle,
  Point,
  ImgCat,
} from './style/workStyle';
import cat from './style/image/cat.png';

export const Portfolio = () => {
  return (
    <div>
      <Point>...</Point>
      <WorkTitle>Side Project</WorkTitle>
      <WorkContainer>
        <WorkBloc>
          <h2>Application Cat Mash</h2>

          <p>choisir son chat preferer selon les photos proposé</p>
          <ImgCat src={cat} />
          <a href="https://catmash-application.herokuapp.com/">
            https://catmash-application.herokuapp.com/
          </a>
        </WorkBloc>

        <WorkBloc>
          <h2>Application Harry Potter</h2>
          <p>Presentation des personnages harry potter et un quizz</p>
          <a href="https://app-harrypotter.herokuapp.com/">
            https://app-harrypotter.herokuapp.com/
          </a>
        </WorkBloc>

        <WorkBloc>
          <h2>Application Marvel</h2>
          <p>
            Presentation des personnages Marvel (React Hooks / styled-components
            / marvel developers api)
          </p>
          <a href="https://marvel-reacthooks.netlify.app/">
            https://marvel-reacthooks.netlify.app/
          </a>
        </WorkBloc>

        <WorkBloc>
          <h2>Application The Movie Database</h2>
          <p>
            Application sur React / Node (Express) / TypeScript Heroku: CircleCi
          </p>
          <a href="https://themovie-database-app.herokuapp.com/">
            https://themovie-database-app.herokuapp.com/
          </a>
        </WorkBloc>
      </WorkContainer>
    </div>
  );
};
