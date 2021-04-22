import React from 'react';
import Link from 'gatsby-link';
import { ReactComponent as ALink } from '../assets/svg/arrowLink.svg';

import '../scss/style.scss';

export default function HeaderHome() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row border-bottom border-dark">
          <div className="col-3 border-end border-dark">
            <p className="fw-bold fs-2">VSUMM TOOLKIT</p>

            <p className="fs-3">

              <Link to="/home" className="linkHead">
                HOME
                <ALink style={{ transform: 'scale(0.8)' }} />
              </Link>

            </p>

          </div>
          <div className="col-6 border-end border-dark">
            <p className="fs-3">A COLLECTION OF METHODS FOR VIDEO CONTENT</p>
            <p className="fs-3">ANALYSIS IN SOCIAL RESEARCH WITH THE WEB</p>
          </div>
          <div className="col-3">
            <p className="fs-3">
              ABOUT
              <ALink style={{ transform: 'scale(0.8)' }} />
            </p>
            <p className="fs-3">
              <Link to="/" className="linkHead">
                INDEX
                <ALink style={{ transform: 'scale(0.8)' }} />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
