import React from 'react';
import { steps, tools, whats } from '../../data/subCh02/subCh02Tab';

export default function Ch02Tab() {
  return (
    <div className="row ">
      <div className="col-3 padding">
        {
                  steps.map(({
                    step,
                  }, i) => (
                    <div style={{ height: '5rem' }} className="col-12 border-end border-secondary border-bottom border-top bg-primary px-2" key={i}>
                      <span className="fw-bold">{step}</span>
                    </div>
                  ))
              }
      </div>
      <div className="col-3 padding">
        {
                  whats.map(({
                    what,
                  }, i) => (
                    <div style={{ height: '5rem' }} className="col-12 border-end border-secondary border-bottom border-top bg-primary px-2" key={i}>
                      {what}
                    </div>
                  ))
              }
      </div>
      <div className="col-3 padding">
        {
                  tools.map(({
                    tool, sfondo, arrow, quadre,
                  }, i) => (
                    <div style={{ height: '5rem' }} className={`col-12 border-end border-secondary border-bottom border-top bg-primary px-2 ${sfondo}`} key={i}>
                      <span className="fw-bold">{tool}</span>
                      {arrow}
                      {quadre}
                    </div>
                  ))
              }
      </div>
      <div className="col-3 padding">

        <div style={{ height: '5rem' }} className="col-12 border-end border-secondary border-bottom border-top bg-primary px-2">
          a
        </div>
      </div>
    </div>
  );
}
