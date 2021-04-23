import React from 'react';
import { ReactComponent as X } from '../assets/svg/x.svg';
import '../scss/style.scss';
import { ReactComponent as ArrowD } from '../assets/svg/arrowD.svg';
import data from '../data';
import Link from 'gatsby-link';

export default function HeaderPages() {
  let index = 0;
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);

    index = typeof params.get('selected') !== 'undefined' ? params.get('selected') : 0;
  }
  const headerPages = data[index];

  const { primo, rq } = headerPages;

  return (
    <div>
      <div className="container-fluid bg-primary">
        <div className="row border-bottom border-1 border-danger">
          <div className="col-11 fs-5 border-end border-danger border-2">
            <div className="row border-bottom border-danger py-3 px-3 border-2">
              <p>{primo}</p>
            </div>
            <div className="row border-danger py-3 px-3 verdino">
              <p className="fw-bold">{rq}</p>
            </div>
          </div>
          <div className="col-1">
            <Link to="/"><X style={{ transform: 'scale(0.7)' }} /></Link>
          </div>
        </div>
      </div>
      <div className="row border-bottom border-danger border-2 bg-light px-3 py-1">
        <p>
          VISUALIZATION
          <ArrowD style={{ transform: 'scale(0.6)' }} />

        </p>
      </div>

    </div>
  );
}
