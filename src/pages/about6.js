import React from 'react';
import '../scss/style.scss';
import Header from '../components/Header';
import Indice from '../components/Indice';
import { ReactComponent as ArrowLeft } from '../assets/svg/arrowLeft.svg';

import img from '../images/about/methodsImg.png';
import Seo from '../components/Seo';

export default function About6() {
  return (
    <div className="bg-primary ">
      <Seo />
      <div className="head "><Header /></div>
      <div className="container-fluid">
        <div className="row">
          <Indice />

          <div style={{ height: '90vh' }} className="col-9 overflow-scroll">
            <p className="fs-3 py-3">
              <ArrowLeft style={{ transform: 'scale(0.7)' }} />
              The Video Summarisarion Toolkit project was realised as the final output of a master's thesis in communication at the Politecnico di Milano. Those who contributed to the realisation of the project are:
            </p>
            <p className="fs-3 py-3">
              <ArrowLeft style={{ transform: 'scale(0.7)' }} />
              Antonella Autuori, thesis student at Density Design Lab at Politecnico di milano, creator of the project.
              {' '}
            </p>
            <p className="fs-3 py-3">
              <ArrowLeft style={{ transform: 'scale(0.7)' }} />
              Gabriele Colombo, a researcher at Density Design Lab
              in the communication design department of Politecnico
              di Milano and supervisor of this thesis.
            </p>
            <p className="fs-3 py-3">
              <ArrowLeft style={{ transform: 'scale(0.7)' }} />
              Andrea Febres Medina, Federico Pozzi ever-present friends, who have made this site a reality.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
