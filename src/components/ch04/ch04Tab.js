import React from 'react';
import { steps, tools, whats } from '../../data/ch04Tab';
import { tabHead } from '../../data/ch01Tab';
import { ReactComponent as ArrowD } from '../../assets/svg/arrowD.svg';

export default function Ch04Tab() {
  return (
    <div className="container-fluid">
      <div className="row ">
        {
          tabHead.map(({
            title,
          }, i) => (
            <div className="col-3 border-end border-warning border-bottom border-top bg-light py-1" key={i}>
              {title}
              <ArrowD style={{ transform: 'scale(0.6)' }} />
            </div>
          ))
        }
      </div>
      <div className="row ">
        <div className="col-3 padding">
          {
            steps.map(({
              step,
            }, i) => (
              <div style={{ height: '5rem' }} className="col-12 border-end border-warning border-bottom border-top bg-primary px-2" key={i}>
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
              <div style={{ height: '5rem' }} className="col-12 border-end border-warning border-bottom border-top bg-primary px-2" key={i}>
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
              <div style={{ height: '5rem' }} className={`col-12 border-end border-warning border-bottom border-top bg-primary px-2 ${sfondo}`} key={i}>
                <span className="fw-bold">{tool}</span>
                {arrow}
                {quadre}
              </div>
            ))
          }
        </div>
        <div className="col-3 padding">

          <div style={{ height: '5rem' }} className="col-12 border-end border-warning border-bottom border-top bg-primary px-2">
            a
          </div>
        </div>
      </div>
    </div>
  );
}
