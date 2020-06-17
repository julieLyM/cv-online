import React from 'react';

export const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <div style={{ backgroundColor: 'white', width: '40%' }}>
        <h2>Application Cat Mash</h2>
        <p>choisir son chat preferer selon les photos proposé</p>
        <p>https://catmash-application.herokuapp.com/</p>
      </div>

      <div style={{ backgroundColor: 'white', width: '40%' }}>
        <h2>Application Harry Potter</h2>
        <p>Application sur les personnages harry potter et un quizz</p>
        <p> https://app-harrypotter.herokuapp.com/</p>
      </div>

      <div style={{ backgroundColor: 'white', width: '40%' }}>
        <h2>Application Marvel</h2>
        <p>Application sur les personnages harry potter et un quizz</p>
        <p>https://marvel-reacthooks.netlify.app/</p>
      </div>
    </div>
  );
};
