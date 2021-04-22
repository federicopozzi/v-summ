import React from 'react';
import Header from '../components/Header';
import { chapter } from '../data/Indice';

import '../scss/style.scss';

export default function Index() {
  return (
    <div className="bg-primary">
      <Header />
      <div className="container-fluid">
        <div className="row border-bottom border-dark">
          <div className="col-7 border-end border-dark">
            <p className="fs-4">
              Each section contains a step by step description of the method
              and an example of the visualization output.
            </p>
          </div>
          <div className="col-5 aa"><p className="fs-4">ALL these methods has been tested on a set of YouTube videos related to the topic of Amazon Fires. </p></div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row border-bottom border-dark bg-light">
          <p>THEME ANALYSIS / CH.01 - 02</p>
        </div>
        <div className="row border-bottom border-dark">
          <div className="col-2 border-end border-dark">
            {chapter[0].number}
          </div>
          <div className={chapter[0].backGround}>
            {chapter[0].title}
          </div>
          <div className="col-5">
            {chapter[0].subtitle}
          </div>
        </div>
        <div className="row border-bottom border-dark">
          <div className="col-2 border-end border-dark">
            {chapter[1].number}
          </div>
          <div className={chapter[1].backGround}>
            {chapter[1].title}
          </div>
          <div className="col-5">
            {chapter[1].subtitle}
          </div>
        </div>
        <div className="row border-bottom border-dark bg-light">
          <p>HUMANS ANALYSIS / CH.03 - 04</p>
        </div>
        <div className="row border-bottom border-dark">
          <div className="col-2 border-end border-dark">
            {chapter[2].number}
          </div>
          <div className={chapter[2].backGround}>
            {chapter[2].title}
          </div>
          <div className="col-5">
            {chapter[2].subtitle}
          </div>
        </div>

      </div>
    </div>
  );
}
