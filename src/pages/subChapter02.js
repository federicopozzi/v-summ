import React from 'react';
import HeaderPages from '../components/HeaderPages';
import '../scss/style.scss';
import data from '../data';
import Link from 'gatsby-link';
import { ReactComponent as X } from '../assets/svg/x.svg';
import { ReactComponent as ArrowD } from '../assets/svg/arrowD.svg';
import subCh02 from '../data/subCh02';

export default function SubChapter02() {
  let index = 0;
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);

    index = typeof params.get('selected') !== 'undefined' ? params.get('selected') : 0;
  }

  const dati = subCh02[index];

  const headerPages = data[3];
  const {
    primo, colore, coloreBordo, rq,
  } = headerPages;
  console.log(dati);
  return (
    <div>
      <div>
        <div className="container-fluid bg-primary">
          <div className={`row border-bottom border-1 ${coloreBordo}`}>
            <div className={`col-11 fs-5 border-end border-2 ${coloreBordo}`}>
              <div className={`row border-bottom py-3 px-3 border-2 ${coloreBordo}`}>
                <p>{primo}</p>
              </div>
              <div className={colore}>
                <p className="fw-bold">{rq}</p>
              </div>
            </div>
            <div className="col-1">
              <Link to="/"><X style={{ transform: 'scale(0.7)' }} /></Link>
            </div>
          </div>
        </div>
        <div className={`row border-bottom border-2 bg-light px-3 py-1 ${coloreBordo}`}>
          <p>
            VISUALIZATION
            <ArrowD style={{ transform: 'scale(0.6)' }} />

          </p>
        </div>

      </div>
    </div>
  );
}
