import React from 'react';
import '../../scss/style.scss';
import subCh02 from '../../data/subCh02';
import { tabHead } from '../../data/ch01Tab';
import { ReactComponent as ArrowD } from '../../assets/svg/arrowD.svg';

function ColonnaVideo() {
  const titoli = [
    {
      testo: 'Entenda o Desmatamento na AMAZÔNIA de um \n' + 'jEito SIMPLES',
    },
    {
      testo: 'Amazon rainforest on fire Lungs of the world in flame Nightline',
    },
    {
      testo: 'Amazon Forest fire | Odhygyan Scienze ',
    },
    {
      testo: 'Amazon Forest Fire / What it tell us about deforestation ',
    },
    {
      testo: 'Amazon forest / Drone footage reveals after math Amazon Fires',
    },
    {
      testo: 'Why the amazon fires are such a big deal',
    },
    {
      testo: 'India\'s Secret Amazon Fire | Tamil',
    },
    {
      testo: 'The Amazon Rainforest is On Fire & Nobody Cares',
    },
    {
      testo: 'Who is Responsible for Amazon Forest Fire? | Tamil | LMES',
    },
    {
      testo: 'Flying above the Amazon fires: \'All you can see \n'
          + 'is death\'',
    },
  ];
  return (
    <div className="bg-primary">
      {
        titoli.map(({
          testo,
        }, i) => (
          <div className="col-12 border-bottom border-light border-2 py-2 px-2">
            {testo}
          </div>
        ))
      }

    </div>
  );
}

export default function SubCh02Viz() {
  let index = 0;
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);

    index = typeof params.get('selected') !== 'undefined' ? params.get('selected') : 0;
  }

  const dati = subCh02[index];
  const { titolo, img, legend } = dati;
  return (
    <div className="container-fluid bg-primary">
      <div className="row">
        <div className="col-3 border-bottom border-end border-light border-2">
          zoom
        </div>
        <div className="col-9 border-bottom border-light border-2">
          {titolo}
        </div>
      </div>
      <div className="row ">
        {/*   colonna dei video */}
        <div className="col-3 padding border-end border-light border-2">
          <ColonnaVideo />
        </div>
        {/*   viz */}
        <div className="col-6 border-end border-light border-2">
          <img
            src={img}
            className="img-fluid"
            alt="Responsive image"
            height="100"
          />
        </div>
        {/*   how to read */}
        <div className="col-3 padding">
          <div className="col-12 border-bottom border-light border-2 px-2">how to read</div>
          <img
            src={legend}
            className="img-fluid"
            alt="Responsive image"
            height="100"
          />
        </div>
      </div>
    </div>
  );
}
