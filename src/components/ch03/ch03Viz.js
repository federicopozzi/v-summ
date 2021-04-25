import React from 'react';
import data from '../../data';
import amFire1 from '../../images/ch03/amFires/1.png';
import amFire2 from '../../images/ch03/amFires/2.png';
import amFire3 from '../../images/ch03/amFires/3.png';
import amFire4 from '../../images/ch03/amFires/4.png';
import amFire5 from '../../images/ch03/amFires/5.png';
import amFire6 from '../../images/ch03/amFires/6.png';
import amFire7 from '../../images/ch03/amFires/7.png';
import amFire8 from '../../images/ch03/amFires/8.png';
import amFire9 from '../../images/ch03/amFires/9.png';
import amFire10 from '../../images/ch03/amFires/10.png';

import prayA1 from '../../images/ch03/prayA/1.png';
import prayA21 from '../../images/ch03/prayA/2.png';

import prayA3 from '../../images/ch03/prayA/3.png';
import prayA4 from '../../images/ch03/prayA/4.png';
import prayA5 from '../../images/ch03/prayA/5.png';
import prayA6 from '../../images/ch03/prayA/6.png';
import prayA7 from '../../images/ch03/prayA/7.png';
import prayA8 from '../../images/ch03/prayA/8.png';
import prayA9 from '../../images/ch03/prayA/9.png';
import prayA10 from '../../images/ch03/prayA/10.png';

import '../../scss/style.scss';
import { ReactComponent as ArrowDown } from '../../assets/svg/arrowDown.svg';

export default function Ch03Viz() {
  const amFires = [
    {
      src: amFire1,
    },
    {
      src: amFire2,
    },
    {
      src: amFire3,
    },
    {
      src: amFire4,
    },
    {
      src: amFire5,
    },

  ];

  const amFires2 = [
    {
      src: amFire6,
    },
    {
      src: amFire7,
    },
    {
      src: amFire8,
    },
    {
      src: amFire9,
    },
    {
      src: amFire10,
    },
  ];

  const prayA = [
    {
      src: prayA1,
    },
    {
      src: prayA21,
    },
    {
      src: prayA3,
    },
    {
      src: prayA4,
    },
    {
      src: prayA5,
    },

  ];

  const prayA2 = [
    {
      src: prayA6,
    },
    {
      src: prayA7,
    },
    {
      src: prayA8,
    },
    {
      src: prayA9,
    },
    {
      src: prayA10,
    },
  ];
  return (
    <div className="container-fluid bg-primary pb-3">
      <div className="row">
        <div className="row py-4">
          <p>
            <ArrowDown style={{ transform: 'scale(0.6)' }} />
            {' '}
            Query "
            <span className="fw-bold">Amazon Fires</span>
            "
            <span className="badge rounded-pill bg-light text-dark mx-5 px-3">ZOOM IN</span>

          </p>
        </div>
        <div className="row">
          {
            amFires.map(({
              src,
            }, i) => (
              <div className="col">
                <img
                  src={src}
                  className="img-fluid"
                  alt="Responsive image"
                  height="100"
                />
              </div>
            ))
          }

        </div>
        <div className="row pt-4">
          {
            amFires2.map(({
              src,
            }, i) => (
              <div className="col">
                <img
                  src={src}
                  className="img-fluid"
                  alt="Responsive image"
                  height="100"
                />
              </div>
            ))
          }
        </div>
      </div>

      <div className="row">
        <div className="row py-4">
          <p>
            <ArrowDown style={{ transform: 'scale(0.6)' }} />
            Query "
            <span className="fw-bold">Pray for Amazonia</span>
            "
            <span className="badge rounded-pill bg-light text-dark mx-5 px-3">ZOOM IN</span>
          </p>
        </div>
        <div className="row">
          {
            prayA.map(({
              src,
            }, i) => (
              <div className="col">
                <img
                  src={src}
                  className="img-fluid"
                  alt="Responsive image"
                  height="100"
                />
              </div>
            ))
          }

        </div>
        <div className="row pt-4">
          {
            prayA2.map(({
              src,
            }, i) => (
              <div className="col">
                <img
                  src={src}
                  className="img-fluid"
                  alt="Responsive image"
                  height="100"
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>

  );
}
