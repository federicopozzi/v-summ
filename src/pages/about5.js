import React from 'react';
import '../scss/style.scss';
import Header from '../components/Header';
import Indice from '../components/Indice';
import { ReactComponent as ArrowLeft } from '../assets/svg/arrowLeft.svg';

import img from '../images/about/contributionImg.png';
import Seo from '../components/Seo';

export default function About5() {
  return (
    <div className="bg-primary ">
      <Seo />
      <div className="head "><Header /></div>
      <div className="container-fluid">
        <div className="row">
          <Indice />

          <div style={{ height: '90vh' }} className="col-9 overflow-scroll">
            <p className="fs-3 py-3">The greatest contribution, also given the specificity of the target for which the project was born (researchers doing social research on the web), was certainly made to the field of social research, which, as discussed at length in the research phase and objectives of this thesis, uses the web and the materials circulating on it to expand knowledge about society. The designed toolkit is the first point of reference in the field of social research with web and communication design, which allows to implement video summarisation processes in different ways with a strong visual and textual support.</p>
            <p className="fs-3 py-3">Below there is a summary of the problems encountered in the research phases of the thesis and the design solutions that responded to each of them.</p>
            <img
              src={img}
              className="img-fluid"
              alt="Responsive image"
              height="100"
            />

          </div>
        </div>
      </div>
    </div>
  );
}
