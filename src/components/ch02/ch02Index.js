import React from 'react';
import Link from 'gatsby-link';
import legend from '../../images/ch02/legendCh02.png';
import { ReactComponent as ArrowDown } from '../../assets/svg/arrowDown.svg';
import { amazonFires, prayAmazon } from '../../data/ch02Index';

export default function Ch02Index() {
  return (
    <div className="container-fluid bg-primary pt-3">
      <div className="row">
        <div className="col-2">
          <p>CLICK ON EACH GRID TO EXPLORE THE SINGLE VIDEO</p>
        </div>
        <div className="col-8">
          <img
            src={legend}
            className="img-fluid"
            alt="Responsive image"
            height="100"
          />
        </div>
      </div>
      <div className="row pt-5">
        <p>
          <ArrowDown style={{ transform: 'scale(0.6)' }} />
          {' '}
          Query "Amazon Fires"
        </p>
      </div>
      <div className="row pt-2 d-flex align-items-center justify-content-between">
        {
                    amazonFires.map(({
                      src, id, link,
                    }, i) => (
                      <div className="col-1">
                        <Link to={link} className="linkHead">
                          <img
                            src={src}
                            className="img-fluid"
                            alt="Responsive image"
                            height="100"
                          />

                          <p className="text-center">{id}</p>
                        </Link>
                      </div>
                    ))
                }
      </div>
      <div className="row pt-5">
        <p>
          <ArrowDown style={{ transform: 'scale(0.6)' }} />
          Query "Pray for Amazonia"
        </p>
      </div>
      <div className="row pt-2 d-flex align-items-center justify-content-between">
        {
                    prayAmazon.map(({
                      src, id, link,
                    }, i) => (
                      <div className="col-1">
                        <Link to={link} className="linkHead">
                          <img
                            src={src}
                            className="img-fluid"
                            alt="Responsive image"
                            height="100"
                          />

                          <p className="text-center">{id}</p>
                        </Link>
                      </div>
                    ))
                }
      </div>
    </div>
  );
}
