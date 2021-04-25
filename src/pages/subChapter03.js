import React from 'react';
import HeaderPages from '../components/HeaderPages';
import '../scss/style.scss';
import Methodology from '../components/Methodology';
import Ch03Tab from '../components/ch03/ch03Tab';

import VizHorizontal from '../components/ch03/vizHorizontal';
import data from '../data';
import Link from 'gatsby-link';
import { ReactComponent as X } from '../assets/svg/x.svg';
import { ReactComponent as ArrowD } from '../assets/svg/arrowD.svg';

export default function subChapter03() {
  const headerPages = data[4];

  const {
    primo, colore, coloreBordo, rq,
  } = headerPages;

  return (
    <div>
      <div className="container-fluid bg-primary position-fixed">
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
        <div className={`row border-bottom border-2 bg-light px-3 py-1 ${coloreBordo}`}>
          <p>
            VISUALIZATION
            <ArrowD style={{ transform: 'scale(0.6)' }} />

          </p>
        </div>
      </div>

      <VizHorizontal style={{ marginTop: '100px' }} />
      <Ch03Tab />
      <Methodology />
    </div>
  );
}
