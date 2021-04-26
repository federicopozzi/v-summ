import React from 'react';
import HeaderPages from '../components/HeaderPages';
import '../scss/style.scss';
import Methodology from '../components/Methodology';
import Ch05Index from '../components/ch05/ch05Index';
import Ch05Tab from '../components/ch05/ch05Tab';
import data from '../data';
import Link from 'gatsby-link';
import { ReactComponent as X } from '../assets/svg/x.svg';
import { ReactComponent as ArrowD } from '../assets/svg/arrowD.svg';
import SubCh05Viz from '../components/ch05/subCh05Viz';
import Seo from '../components/Seo';

export default function SubChapter05() {
  const headerPages = data[6];

  const {
    primo, colore, coloreBordo, rq,
  } = headerPages;

  const methodology = data[6];

  const { aim, output } = methodology;
  return (
    <div>
      <Seo />
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
            <Link to="/home"><X style={{ transform: 'scale(0.7)' }} /></Link>
          </div>
        </div>
      </div>
      <div className={`row border-bottom border-2 bg-light px-3 py-1 ${coloreBordo}`}>
        <p>
          VISUALIZATION
          <ArrowD style={{ transform: 'scale(0.6)' }} />

        </p>
      </div>
      <SubCh05Viz />
      <Ch05Tab />
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
          <div className="col-2 pt-5">
            <span className="fs-2 text-decoration-underline">output</span>
          </div>
          <div className="col-10 pt-5">
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
