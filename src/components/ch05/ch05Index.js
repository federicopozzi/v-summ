import React from 'react';
import amazonFires1 from '../../images/ch05/amazonFires/amazonFires1.gif';
import amazonFires2 from '../../images/ch05/amazonFires/amazonFires3.gif';
import amazonFires3 from '../../images/ch05/amazonFires/amazonFires3.gif';
import amazonFires4 from '../../images/ch05/amazonFires/amazonFires4.gif';
import amazonFires5 from '../../images/ch05/amazonFires/amazonFires5.gif';
import amazonFires6 from '../../images/ch05/amazonFires/amazonFires6.gif';
import amazonFires7 from '../../images/ch05/amazonFires/amazonFires7.gif';
import amazonFires8 from '../../images/ch05/amazonFires/amazonFires8.gif';
import amazonFires9 from '../../images/ch05/amazonFires/amazonFires9.gif';
import amazonFires10 from '../../images/ch05/amazonFires/amazonFires10.gif';

import '../../scss/style.scss';
import Link from 'gatsby-link';
import { ReactComponent as Left } from '../../assets/svg/left.svg';

export default function Ch05Index() {
  const amazonFiresFirst5 = [
    {
      src: amazonFires1,
      text: '| AMAZON FOREST FIRE | ODHIGYAN SCIENCE',
      link: '/subChapter05?selected=0',
    },
    {
      src: amazonFires2,
      text: 'AMAZON FOREST FIRE WHAT IT TELLS US ABOUT DEFORESTATIONs',
      link: '/subChapter05?selected=1',
    },
    {
      src: amazonFires3,
      text: 'AMAZON RAIN FOREST ON FIRE LUNGS OF THE WORLD IN FLAMES L NIGHTLINE',
      link: '/subChapter05?selected=2',
    },
    {
      src: amazonFires4,
      text: 'ENTENDA O DESMATAMENTO NA AMAZÔNIA DE UM JEITO SIMPLES',
      link: '/subChapter05?selected=3',
    },
    {
      src: amazonFires5,
      text: 'WHY THE AMAZON FIRES ARE SUCH A BIG DEAL',
      link: '/subChapter05?selected=4',
    },
  ];

  const amazonFiresSecond5 = [
    {
      src: amazonFires6,
      text: 'BRAZILIAN TROOPS DEPLOYED TO BATTLE AMAZON FIRE',
      link: '/subChapter05?selected=5',
    },
    {
      src: amazonFires7,
      text: 'IN DEPTH AMAZON ON FIRE',
      link: '/subChapter05?selected=6',
    },
    {
      src: amazonFires8,
      text: 'THE AMAZON RAINFOREST IS ON FIRE NO BODY CARES',
      link: '/subChapter05?selected=7',
    },
    {
      src: amazonFires9,
      text: 'TOOK 15 YEARS TO PRODUCE THIS WORLDS FIRST ORANGE SNAKE AMAZON FIRES LETS TALK',
      link: '/subChapter05?selected=8',
    },
    {
      src: amazonFires10,
      text: 'THE AMAZON RAINFOREST IS ON FIRE',
      link: '/subChapter05?selected=9',
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
              src, text, link,
            }, i) => (
              <div className="col">
                <Link to={link} className="linkHead">
                  <img
                    src={src}
                    className="img-fluid"
                    alt="Responsive image"
                    height="100"
                  />
                  <p className="text-center">{text}</p>
                </Link>
              </div>

            ))
          }
      </div>
      <div className="row pt-4">
        {
                amazonFiresSecond5.map(({
                  src, text,
                }, i) => (
                  <div className="col">
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
