import React from 'react';
import { WorkContainer, WorkBloc, WorkTitle, Img } from './style/workStyle';
import { AboutSimpleText, AboutSubTitle } from './style/aboutStyle';

// import cat from './style/image/cat.png';
import movieDB from './style/image/movieDB.png';
// import HP from './style/image/HP.png';
import marvel from './style/image/marvel.png';
import studio from './style/image/studio.png'
import jadeb from './style/image/jadebeauty.png'

export const Work = () => {
  return (
    <div>
      <WorkTitle>Mes Projets</WorkTitle>
      <WorkContainer>
        {/* <WorkBloc>
          <AboutSubTitle>Cat Mash</AboutSubTitle>
          <a
            href="https://catmash-application.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img src={cat} />
            <AboutSimpleText>
              Choisir son chat preferé selon les photos proposées <br />
              (React Hooks / styled-components / NodeJs(Express) / MongoDB )
            </AboutSimpleText>
          </a>
        </WorkBloc>

        <WorkBloc>
          <AboutSubTitle>Harry Potter</AboutSubTitle>
          <a
            href="https://app-harrypotter.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img src={HP} />
            <AboutSimpleText>
              Presentation des personnages de harry potter et un quizz <br />
              (React Hooks / styled-components / NodeJs(Express) )
            </AboutSimpleText>
          </a>
        </WorkBloc> */}

        <WorkBloc>
          <AboutSubTitle>Jade Beauty</AboutSubTitle>
          <a
            href="http://julielym.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img src={jadeb} />
            <AboutSimpleText>
              Site E-commerce sur un salon de beauté (fictif)<br />
              (symfony 5 / Bootstrap)
            </AboutSimpleText>
          </a>
        </WorkBloc>

        <WorkBloc>
          <AboutSubTitle>Marvel</AboutSubTitle>
          <a
            href="https://marvel-reacthooks.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img src={marvel} />
            <AboutSimpleText>
              Presentation des personnages Marvel <br />
              (React Hooks / styled-components / marvel developers api)
            </AboutSimpleText>
          </a>
        </WorkBloc>

        <WorkBloc>
          <AboutSubTitle>The Movie Database</AboutSubTitle>
          <a
            href="https://themovie-database-app.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img src={movieDB} />
            <AboutSimpleText>
              Rechercher un film d'actualité
              <br />
              Application sur React / Node (Express) / TypeScript Heroku:
              CircleCi
            </AboutSimpleText>
          </a>
        </WorkBloc>

        <WorkBloc>
          <AboutSubTitle>Les films du studio Ghibli</AboutSubTitle>
          <a
            href="https://ghibli-film.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img src={studio} />
            <AboutSimpleText>
              Résumé des films Ghibli
              <br />
              Application sur ReactJS avec l'api   <a
            href="https://ghibliapi.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >https://ghibliapi.herokuapp.com/</a>
            </AboutSimpleText>
          </a>
        </WorkBloc>
      </WorkContainer>
    </div>
  );
};
