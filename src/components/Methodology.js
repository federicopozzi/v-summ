import React from 'react';
import '../scss/style.scss';
import data from '../data';
import { ReactComponent as ArrowD } from '../assets/svg/arrowD.svg';

export default function Methodology() {
  let index = 0;
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);

    index = typeof params.get('selected') !== 'undefined' ? params.get('selected') : 0;
  }
  const methodology = data[index];

  const { aim, output, coloreBordo } = methodology;
  return (
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
  );
}
