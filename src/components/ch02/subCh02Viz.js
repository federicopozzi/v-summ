import React from 'react';
import '../../scss/style.scss';
import Link from 'gatsby-link';
import subCh02 from '../../data/subCh02';
import { ReactComponent as ArrowDown } from '../../assets/svg/arrowDown.svg';

function ColonnaVideo() {
  const titoli = [
    {
      testo: 'Entenda o Desmatamento na AMAZÔNIA de um \n' + 'jEito SIMPLES',
      link: '/subChapter022?selected=0',
    },
    {
      testo: 'Amazon rainforest on fire Lungs of the world in flame Nightline',
      link: '/subChapter022?selected=1',
    },
    {
      testo: 'Amazon Forest fire | Odhygyan Scienze ',
      link: '/subChapter022?selected=2',
    },
    {
      testo: 'Amazon Forest Fire / What it tell us about deforestation ',
      link: '/subChapter022?selected=3',
    },
    {
      testo: 'Amazon forest / Drone footage reveals after math Amazon Fires',
      link: '/subChapter022?selected=4',
    },
    {
      testo: 'Why the amazon fires are such a big deal',
      link: '/subChapter022?selected=5',
    },
    {
      testo: 'India\'s Secret Amazon Fire | Tamil',
      link: '/subChapter022?selected=6',
    },
    {
      testo: 'The Amazon Rainforest is On Fire & Nobody Cares',
      link: '/subChapter022?selected=7',
    },
    {
      testo: 'Who is Responsible for Amazon Forest Fire? | Tamil | LMES',
      link: '/subChapter022?selected=8',
    },
    {
      testo: 'Flying above the Amazon fires: \'All you can see \n'
          + 'is death\'',
      link: '/subChapter022?selected=9',
    },
  ];
  return (
    <div className="bg-primary">
      {
        titoli.map(({
          testo, link,
        }, i) => (
          <Link to={link} className="linkHead">
            <div className="col-12 border-bottom border-light border-2 py-2 px-2">
              {testo}
            </div>
          </Link>
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
        <div className="col-3 border-bottom border-end border-light border-2 py-2">
          <Link to="/subChapter022">
            <span className="badge rounded-pill bg-light text-dark">ZOOM OUT</span>
          </Link>
        </div>
        <div className="col-9 border-bottom border-light border-2 d-flex align-items-center">
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
          <div className="col-12 border-bottom border-light border-2 px-2 py-3">
            <ArrowDown style={{ transform: 'scale(0.6)' }} />
            How to read
          </div>
          <div className="col-12 py-2">
            <span className="px-2">colour = thematic cluster</span>
            <img
              src={legend}
              className="img-fluid"
              alt="Responsive image"
              height="100"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
