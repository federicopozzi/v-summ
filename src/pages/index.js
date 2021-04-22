import React from 'react';
import Header from '../components/Header';
import { chapter, subChapter } from '../data/Indice';

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

      <div className="container-fluid fs-5">
        <div className="row border-bottom border-dark bg-light">
          <p>THEME ANALYSIS / CH.01 - 02</p>
        </div>
        <div className="row border-bottom border-dark">
          <div className="col-2 border-end border-dark d-flex align-items-center">
            <span>{chapter[0].number}</span>
          </div>
          <div className={chapter[0].backGround}>
            <span>{chapter[0].title}</span>
          </div>
          <div className="col-5 d-flex align-items-center">
            <span>{chapter[0].subtitle}</span>
          </div>
        </div>

        <div className="row border-bottom border-dark">
          <div className="col-3 border-end border-dark d-flex align-items-center">
            <span>{subChapter[0].number}</span>
          </div>
          <div className={subChapter[0].backGround}>
            <span>{subChapter[0].title}</span>
          </div>
          <div className="col-4 d-flex align-items-center">
            <span>{subChapter[0].subtitle}</span>
          </div>
        </div>
        <div className="row border-bottom border-dark">
          <div className="col-3 border-end border-dark d-flex align-items-center">
            <span>{subChapter[1].number}</span>
          </div>
          <div className={subChapter[1].backGround}>
            <span>{subChapter[1].title}</span>
          </div>
          <div className="col-4 d-flex align-items-center">
            <span>{subChapter[1].subtitle}</span>
          </div>
        </div>

        <div className="row border-bottom border-dark">
          <div className="col-2 border-end border-dark d-flex align-items-center">
            <span>{chapter[1].number}</span>
          </div>
          <div className={chapter[1].backGround}>
            <span>{chapter[1].title}</span>
          </div>
          <div className="col-5 d-flex align-items-center">
            <span>{chapter[1].subtitle}</span>
          </div>
        </div>

        <div className="row border-bottom border-dark bg-light">
          <p>HUMANS ANALYSIS / CH.03 - 04</p>
        </div>

        <div className="row border-bottom border-dark">
          <div className="col-2 border-end border-dark d-flex align-items-center">
            <span>{chapter[2].number}</span>
          </div>
          <div className={chapter[2].backGround}>
            <span>{chapter[2].title}</span>
          </div>
          <div className="col-5 d-flex align-items-center">
            <span>{chapter[2].subtitle}</span>
          </div>
        </div>

        <div className="row border-bottom border-dark">
          <div className="col-2 border-end border-dark d-flex align-items-center">
            <span>{chapter[3].number}</span>
          </div>
          <div className={chapter[3].backGround}>
            <span>{chapter[3].title}</span>
          </div>
          <div className="col-5 d-flex align-items-center">
            <span>{chapter[3].subtitle}</span>
          </div>
        </div>

        <div className="row border-bottom border-dark bg-light">
          <p>MOOD-VISUAL ANALYSIS / CH. 05 - 06</p>
        </div>

        <div className="row border-bottom border-dark">
          <div className="col-2 border-end border-dark d-flex align-items-center">
            <span>{chapter[4].number}</span>
          </div>
          <div className={chapter[4].backGround}>
            <span>{chapter[4].title}</span>
          </div>
          <div className="col-5 d-flex align-items-center">
            <span>{chapter[4].subtitle}</span>
          </div>
        </div>

        <div className="row border-bottom border-dark">
          <div className="col-2 border-end border-dark d-flex align-items-center">
            <span>{chapter[5].number}</span>
          </div>
          <div className={chapter[5].backGround}>
            <span>{chapter[5].title}</span>
          </div>
          <div className="col-5 d-flex align-items-center">
            <span>{chapter[5].subtitle}</span>
          </div>
        </div>

        <div className="row border-bottom border-dark">
          <div className="col-3 border-end border-dark d-flex align-items-center">
            <span>{subChapter[2].number}</span>
          </div>
          <div className={subChapter[2].backGround}>
            <span>{subChapter[2].title}</span>
          </div>
          <div className="col-4 d-flex align-items-center">
            <span>{subChapter[2].subtitle}</span>
          </div>
        </div>
      </div>

    </div>
  );
}
