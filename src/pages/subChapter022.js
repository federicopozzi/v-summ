import React from 'react';
import '../scss/style.scss';
import Link from 'gatsby-link';
import data from '../data';
import { ReactComponent as X } from '../assets/svg/x.svg';
import { ReactComponent as ArrowD } from '../assets/svg/arrowD.svg';

import { tabHead } from '../data/ch01Tab';
import SubCh02Viz from '../components/ch02/subCh02Viz';

export default function SubChapter02() {
  const headerPages = data[3];
  const {
    primo, colore, coloreBordo, rq,
  } = headerPages;

  const methodology = data[3];

  const { aim, output } = methodology;
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
      <SubCh02Viz />

      <div className="container-fluid">
        <div className="row">
          {
                        tabHead.map(({
                          title,
                        }, i) => (
                          <div className="col-3 border-end border-secondary border-bottom border-top bg-light py-1" key={i}>
                            {title}
                            <ArrowD style={{ transform: 'scale(0.6)' }} />
                          </div>
                        ))
                    }
        </div>
      </div>
      <div className="container-fluid">
        <div className={`row border-end border-bottom border-top bg-light py-1 ${coloreBordo}`}>
          <p>
            METODOLOGY
            <ArrowD style={{ transform: 'scale(0.6)' }} />
          </p>
        </div>
        <div className="row bg-primary py-4">
          <div className="col-2">
            <span className="fs-2 text-decoration-underline">aim</span>
          </div>
          <div className="col-10">
            <p className="fs-2">
              {aim}
            </p>
          </div>
          <div className="col-2">
            <span className="fs-2 text-decoration-underline">output</span>
          </div>
          <div className="col-10">
            <p className="fs-2">
              {' '}
              {output}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
