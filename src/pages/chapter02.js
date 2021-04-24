import React from 'react';
import HeaderPages from '../components/HeaderPages';
import '../scss/style.scss';
import Ch02Index from '../components/ch02/ch02Index';
import Methodology from '../components/Methodology';
import Ch02Tab from '../components/ch02/ch02Tab';
import { tabHead } from '../data/ch01Tab';
import { ReactComponent as ArrowD } from '../assets/svg/arrowD.svg';

export default function Chapter02() {
  return (
    <div>
      <HeaderPages />
      <Ch02Index />
      <div className="container-fluid bg-primary pt-5">
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

        <Ch02Tab />

      </div>
      <Methodology />
    </div>
  );
}
