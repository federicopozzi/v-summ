import React from 'react';
import Header from './Header';

import '../scss/style.scss';
import homeImg from '../images/home/homeImg.png';

export default function HeaderHome() {
  return (
    <div className="sticky-top bg-primary">
      <div className="head ">
        <Header />
      </div>
      <img
        src={homeImg}
        className="img-fluid sticky-top border-bottom border-2 border-dark"
        alt="Responsive image"
        height="100"
      />
    </div>
  );
}
