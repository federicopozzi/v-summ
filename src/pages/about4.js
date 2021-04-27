import React from 'react';
import '../scss/style.scss';
import Header from '../components/Header';
import Indice from '../components/Indice';
import { ReactComponent as ArrowLeft } from '../assets/svg/arrowLeft.svg';

import img from '../images/about/methodsImg.png';
import Seo from '../components/Seo';

export default function About4() {
  return (
    <div className="bg-primary ">
      <Seo />
      <div className="head "><Header /></div>
      <div className="container-fluid">
        <div className="row">
          <Indice />

          <div style={{ height: '90vh' }} className="col-9 overflow-scroll">
            <p className="fs-3 py-3">Once defined, the methods were grouped within three macro-categories of analysis, categories defined on the basis of the characteristics and aspects that these methods allow to extract, analyse and visualise:</p>
            <img
              src={img}
              className="img-fluid"
              alt="Responsive image"
              height="100"
            />

            <p className="fs-3 pb-1">
              All methods include the three process steps:
              {' '}
            </p>
            <p className="fs-3 py-3 pb-5">
              <p className="fw-bold">
                <ArrowLeft />
                {' '}
                frame extraction
              </p>
              <p className="fw-bold">
                <ArrowLeft />
                {' '}
                figurative or plastic analysis
              </p>
              <p className="fw-bold">
                <ArrowLeft />
                {' '}
                visualisation of the results
              </p>
              <p className="fs-3 py-3">In some cases, Python scripts were created ad hoc to allow for the fast download of videos, and the extraction of frames at scene change, but in general, for the development of most of the steps within the methods, some of the tools and software present in the taxonomy were used and combined, chosen above all on the basis of the demand for programming languages and accessibility. </p>
              <p className="fs-3 py-3">       During the experimentation phases, a trace was kept of the actions and choices implemented in each process in order to offer not only a description of the methods, but also a protocol diagram for each of them, including all the steps carried out during the processes. </p>

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
