import React from 'react';
import Header from './Header';

import '../scss/style.scss';
import homeImg from '../images/home/HOMEVIDEO.mp4';

export default function HeaderHome() {
  return (
    <div className="sticky-top bg-primary">
      <div className="head ">
        <Header />
      </div>
      <video
        autoPlay
        muted
        loop
        src={homeImg}
        className="img-fluid sticky-top border-bottom border-2 border-dark"
        height="100"
      />
    </div>
  );
}
