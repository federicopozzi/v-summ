import React from 'react';

import '../../scss/style.scss';

import subCh051 from '../../data/subCh051';

export default function SubCh051Viz() {
  let index = 0;
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);

    index = typeof params.get('selected') !== 'undefined' ? params.get('selected') : 0;
  }
  const viz = subCh051[index];

  return (
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
  );
}
