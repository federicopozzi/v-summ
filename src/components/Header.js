import React from 'react';
import Link from 'gatsby-link';
import { ReactComponent as ArrowLink } from '../assets/svg/arrowLink.svg';

import '../scss/style.scss';

export default function Header() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row border-bottom border-dark">
          <div className="col-3 border-end border-dark">
            <p className="fw-bold fs-1">VSUMM TOOLKIT</p>

            <p className="fs-2">

              <Link to="/" className="linkHead">
                HOME
                <ArrowLink style={{ transform: 'scale(0.8)' }} />
              </Link>

            </p>

          </div>
          <div className="col-7 border-end border-dark">
            <p className="fs-2">A COLLECTION OF METHODS FOR VIDEO CONTENT</p>
            <p className="fs-2">ANALYSIS IN SOCIAL RESEARCH WITH THE WEB</p>
          </div>
          <div className="col-2">
            <p className="fs-2">
              <Link to="/about" className="linkHead">ABOUT</Link>
              <ArrowLink style={{ transform: 'scale(0.8)' }} />
            </p>
            <p className="fs-2">
              <Link to="/home" className="linkHead">
                INDEX
                <ArrowLink style={{ transform: 'scale(0.8)' }} />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
