import React from 'react';
import amazonFires1 from '../../images/ch05/amazonFires/1.gif';

import '../../scss/style.scss';
import Link from 'gatsby-link';
import { ReactComponent as Left } from '../../assets/svg/left.svg';

export default function Ch05Index() {
  const amazonFiresFirst5 = [
    {
      src: amazonFires1,
      text: '| AMAZON FOREST FIRE | ODHIGYAN SCIENCE',
    },
  ];

  const amazonFiresSecond5 = [
    {
      src: amazonFires1,
      text: '| AMAZON FOREST FIRE | ODHIGYAN SCIENCE',
    },
  ];

  return (
    <div className="container-fluid bg-primary">
      <div className="row pt-3">
        <p>
          <span className="display-7">select a query: </span>
          <span>Amazon Fires </span>
          {' '}
                &nbsp;
          <Link to="/chapter051?selected=6" className="linkHead">
            {' '}
            <Left />
          </Link>
          {' '}

                &nbsp;
          <span> Pray for Amazonia </span>
        </p>
      </div>
      <div className="row pt-1"><p><span className="badge rounded-pill bg-light text-dark">*CLICK ON A VIDEO TO SEE ALL THE FRAMES PLOTTED</span></p></div>
      <div className="row pt-5">
        {
            amazonFiresFirst5.map(({
              src, text,
            }, i) => (
              <div className="col-2">
                <img
                  src={src}
                  className="img-fluid"
                  alt="Responsive image"
                  height="100"
                />
                <p className="text-center">{text}</p>
              </div>

            ))
          }
      </div>
      <div className="row pt-4">
        {
                amazonFiresSecond5.map(({
                  src, text,
                }, i) => (
                  <div className="col-2">
                    <img
                      src={src}
                      className="img-fluid"
                      alt="Responsive image"
                      height="100"
                    />
                    <p className="text-center">{text}</p>
                  </div>

                ))
            }
      </div>
    </div>

  );
}
