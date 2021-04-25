import React from 'react';
import { ReactComponent as Right } from '../../assets/svg/right.svg';

import prayAmazon1 from '../../images/ch05/prayAmazon/prayAmazon1.gif';
import prayAmazon2 from '../../images/ch05/prayAmazon/prayAmazon2.gif';
import prayAmazon3 from '../../images/ch05/prayAmazon/prayAmazon3.gif';
import prayAmazon4 from '../../images/ch05/prayAmazon/prayAmazon4.gif';
import prayAmazon5 from '../../images/ch05/prayAmazon/prayAmazon5.gif';
import prayAmazon6 from '../../images/ch05/prayAmazon/prayAmazon6.gif';
import prayAmazon7 from '../../images/ch05/prayAmazon/prayAmazon7.gif';
import prayAmazon8 from '../../images/ch05/prayAmazon/prayAmazon8.gif';
import prayAmazon9 from '../../images/ch05/prayAmazon/prayAmazon9.gif';
import prayAmazon10 from '../../images/ch05/prayAmazon/prayAmazon10.gif';

import '../../scss/style.scss';
import Link from 'gatsby-link';

export default function Ch05Index() {
  const prayAmazonFirst5 = [
    {
      src: prayAmazon1,
      text: 'JE BALAYE LES BOBO PRAY-FOR-AMAZONIA - EXPLIQUEZ-MOI CETTE MERDE #13',
    },
    {
      src: prayAmazon2,
      text: 'AMAZON FIRE VS METHANE GAS | PRAYFORAMAZONIA | AMAZON FOREST',
    },
    {
      src: prayAmazon3,
      text: '#AMAZONIA #PRAYFORAMAZONIA',
    },
    {
      src: prayAmazon4,
      text: 'MOSICA DA FLORESTA - INCENDIOS DA AMAZONIA - #PRAYFORAMAZONIA',
    },
    {
      src: prayAmazon5,
      text: 'LA DEVASTADORA RAZOIN QUE UNE A CRISTIANO RONALDO Y LUIS SUAREZ',
    },
  ];
  const prayAmazonSecond5 = [
    {
      src: prayAmazon6,
      text: 'EL MUNDO CLAMA PARA QUE PAREN LOS INCENDIOS EN EL AMAZONAS',
    },
    {
      src: prayAmazon7,
      text: 'AMAZON RAINFOREST FIRE VIDEOS!! (BRAZIL FOREST FUEGO COMPILATION) #PRAYFORAMAZONIA',
    },
    {
      src: prayAmazon8,
      text: 'ESTO PODEMOS HACER POR EL AMAZONAS / POSIBLES CAUSAS #PRAYFORAMAZONIA',
    },
    {
      src: prayAmazon9,
      text: 'PRAY FOR AMAZONIA',
    },
    {
      src: prayAmazon10,
      text: 'AMAZON RAINFOREST FIRE AND ANIMAL SAD #AMAZONWILDFIRE #PRAYFORAMAZONIA #AMAZON',
    },
  ];

  return (
    <div className="container-fluid  bg-primary">
      <div className="row pt-3">
        <p>
          <span className="display-7">select a query: </span>
          <span>Amazon Fires </span>
          {' '}
&nbsp;
          <Link to="/chapter05?selected=6" className="linkHead">
            {' '}
            <Right />
          </Link>
          {' '}

&nbsp;
          <span> Pray for Amazonia </span>
        </p>
      </div>
      <div className="row pt-1"><p><span className="badge rounded-pill bg-light text-dark">*CLICK ON A VIDEO TO SEE ALL THE FRAMES PLOTTED</span></p></div>
      <div className="row pt-5">
        {
                    prayAmazonFirst5.map(({
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
      <div className="row pt-4">
        {
                prayAmazonSecond5.map(({
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
