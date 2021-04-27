import React from 'react';
import { ReactComponent as ArrowLeft } from '../assets/svg/arrowLeft.svg';
import '../scss/style.scss';
import Link from 'gatsby-link';

export default function Indice() {
  const indice = [
    {
      title: 'PROBLEM',
      link: '/about',
    },
    {
      title: 'RESEARCH',
      link: '/about2',
    },
    {
      title: 'TAXONOMY',
      link: '/about3',
    },
    {
      title: 'METHODS',
      link: '/about4',
    },
    {
      title: 'CONTRIBUTION',
      link: '/about5',
    },
    {
      title: 'ATTRIBUTION',
      link: '/about6',
    },
  ];

  return (
    <div className="col-3  border-end border-dark padding">
      {
            indice.map(({
              title, link,
            }, i) => (
              <div style={{ height: '10vh' }} className="d-flex align-items-center fs-4 col-12 border-bottom border-dark px-5 py-3">
                <Link to={link}>{title}</Link>
                {' '}
                    &nbsp;
                {' '}
                <ArrowLeft style={{ transform: 'scale(0.7)' }} />
              </div>
            ))
        }
      )
    </div>
  );
}
