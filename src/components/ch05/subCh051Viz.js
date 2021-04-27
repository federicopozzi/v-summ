import React from 'react';

import rOrder from '../../images/ch05/subCh05/rOrder.png';

import '../../scss/style.scss';

import Link from 'gatsby-link';
import subCh051 from '../../data/subCh051';

export default function SubCh051Viz() {
  let index = 0;
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);

    index = typeof params.get('selected') !== 'undefined' ? params.get('selected') : 0;
  }
  const viz = subCh051[index];

  const titoli = [
    'JE BALAYE LES BOBO PRAY-FOR-AMAZONIA - EXPLIQUEZ-MOI CETTE MERDE #13',
    'AMAZON FIRE VS METHANE GAS | PRAYFORAMAZONIA | AMAZON FOREST',
    '#AMAZONIA #PRAYFORAMAZONIA',
    'MOSICA DA FLORESTA - INCENDIOS DA AMAZONIA - #PRAYFORAMAZONIA',
    'LA DEVASTADORA RAZOIN QUE UNE A CRISTIANO RONALDO Y LUIS SUAREZ',
    'EL MUNDO CLAMA PARA QUE PAREN LOS INCENDIOS EN EL AMAZONAS',
    'AMAZON RAINFOREST FIRE VIDEOS!! (BRAZIL FOREST FUEGO COMPILATION) #PRAYFORAMAZONIA',
    'ESTO PODEMOS HACER POR EL AMAZONAS / POSIBLES CAUSAS #PRAYFORAMAZONIA',
    'PRAY FOR AMAZONIA',
    'AMAZON RAINFOREST FIRE AND ANIMAL SAD #AMAZONWILDFIRE #PRAYFORAMAZONIA #AMAZON',
  ];

  const title = titoli[index];
  return (
    <div className="container-fluid bg-primary">
      <div className="row bg-primary pt-2">
        <div className="col-3 bg-primary">
          <Link to="/chapter051?selected=6"><p><span className="badge rounded-pill bg-light text-dark">*CLICK HERE TO RETURN TO OVERVIEW</span></p></Link>
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

      <div className="row bg-dark mt-4">
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
