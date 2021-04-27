import React from 'react';
import '../scss/style.scss';
import Header from '../components/Header';
import Indice from '../components/Indice';

import img from '../images/about/imgResearch.png';
import Seo from '../components/Seo';

export default function About2() {
  return (
    <div className="bg-primary ">
      <Seo />
      <div className="head "><Header /></div>
      <div className="container-fluid">
        <div className="row">
          <Indice />

          <div style={{ height: '90vh' }} className="col-9 overflow-scroll">
            <p className="fs-3 py-3">
              Pre-design research focused on various theoretical and practical studies involving video materials.
              This is a diagram that outlines the order in which the research phase was carried out during the thesis:
            </p>
            <img
              src={img}
              className="img-fluid"
              alt="Responsive image"
              height="100"
            />

            <p className="fs-3 py-3 pb-5">     </p>
          </div>
        </div>
      </div>
    </div>
  );
}
