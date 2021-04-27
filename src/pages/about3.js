import React from 'react';
import '../scss/style.scss';
import Header from '../components/Header';
import Indice from '../components/Indice';

import img from '../images/about/taxImg.png';
import Seo from '../components/Seo';

export default function About3() {
  return (
    <div className="bg-primary ">
      <Seo />
      <div className="head "><Header /></div>
      <div className="container-fluid">
        <div className="row">
          <Indice />

          <div style={{ height: '90vh' }} className="col-9 overflow-scroll">
            <p className="fs-3 py-3" />
            <img
              src={img}
              className="img-fluid"
              alt="Responsive image"
              height="100"
            />

            <p className="fs-3 py-3 pb-5">
              {' '}
              A taxonomy of existing tools and software that offer the possibility to work with video material and speed up the video summarisation process.
              The taxonomy presents tools and software exclusively
              from the phases of frame extraction, figurative or plastic analysis and visualisation, and organises them according to 5 main variables: input, output, computational knowledge requirement, accessibility and media type.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
