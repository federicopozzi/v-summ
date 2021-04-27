import React from 'react';

import '../../scss/style.scss';

import Link from 'gatsby-link';
import subCh05 from '../../data/subCh05';
import rOrder from '../../images/ch05/subCh05/rOrder.png';

export default function SubCh05Viz() {
  let index = 0;
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);

    index = typeof params.get('selected') !== 'undefined' ? params.get('selected') : 0;
  }
  const viz = subCh05[index];
  const titoli = [
    '| AMAZON FOREST FIRE | ODHIGYAN SCIENCE',
    'AMAZON FOREST FIRE WHAT IT TELLS US ABOUT DEFORESTATIONs',
    'AMAZON RAIN FOREST ON FIRE LUNGS OF THE WORLD IN FLAMES L NIGHTLINE',
    'ENTENDA O DESMATAMENTO NA AMAZÔNIA DE UM JEITO SIMPLES',
    'WHY THE AMAZON FIRES ARE SUCH A BIG DEAL',
    'BRAZILIAN TROOPS DEPLOYED TO BATTLE AMAZON FIRE',
    'THE AMAZON RAINFOREST IS ON FIRE NO BODY CARES',
    'TOOK 15 YEARS TO PRODUCE THIS WORLDS FIRST ORANGE SNAKE AMAZON FIRES LETS TALK',
    'THE AMAZON RAINFOREST IS ON FIRE',
  ];

  const title = titoli[index];
  return (
    <div className="container-fluid">
      <div className="row bg-primary pt-2">
        <div className="col-3 bg-primary">
          <Link to="/chapter05?selected=6"><p><span className="badge rounded-pill bg-light text-dark">*CLICK HERE TO RETURN TO OVERVIEW</span></p></Link>
        </div>
        <div className="col-6">
          VIDEO FRAMES:
          {' '}
          {title}
        </div>
        <div className="col-3">
          <img
            src={rOrder}
            className="img-fluid"
            alt="Responsive image"
            height="100"
            width="300"
          />
        </div>
      </div>

      <div className="row bg-dark">
        {
        viz.map(({
          src,
        }, i) => (
          <div className="col-2">
            <img
              src={src}
              className="img-fluid"
              alt="Responsive image"
              height="100"
            />
          </div>
        ))
      }
      </div>
    </div>
  );
}
