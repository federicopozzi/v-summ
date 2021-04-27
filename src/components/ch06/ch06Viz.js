import React from 'react';
import { ReactComponent as Title1 } from '../../images/ch06/title1.svg';
import { ReactComponent as Title2 } from '../../images/ch06/title2.svg';

import a from '../../images/ch06/a.png';
import b from '../../images/ch06/b.png';
import c from '../../images/ch06/c.png';
import d from '../../images/ch06/d.png';

import '../../scss/style.scss';
import a1 from '../../images/ch06/a.mp4';
import a2 from '../../images/ch06/b.mp4';
import a3 from '../../images/ch06/c.mp4';
import a4 from '../../images/ch06/d.mp4';

import Link from 'gatsby-link';

export default function Ch06Viz() {
  let index = 0;
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);

    index = typeof params.get('vid') !== 'undefined' ? params.get('vid') : 0;
  }

  const video1 = {
    titolo: '01 - MONTAGE AMAZON FIRES',
    src: a1,
    set: '01   ENTENDA O DESMAMENTO  |    02   AMAZON RAINFOREST ON FIRE |    03   AMAZON FOREST ODHYSCIENZE\n'
        + '\n'
        + '|  04   AMAZON FOREST FIRE WHAT IT TELL ABOUT DEFORESTATION   |  05  DRONE FOOTAGE REVEALS AFTER MATH OF AMAZON FIRES',
    duration: '00:03:27',
    videoOp: '40%',
  };
  const video2 = {
    titolo: '02 - GRID AMAZON FIRES',
    src: a2,
    set: ' 01   ENTENDA O DESMAMENTO |  02   AMAZON RAINFOREST ON FIRE  |  03   AMAZON FOREST ODHYSCIENZE | 04   AMAZON FOREST FIRE WHAT IT TELL ABOUT DEFORESTATION   | 05  DRONE FOOTAGE REVEALS AFTER MATH OF AMAZON FIRES\n'
        + '\n'
        + '| 06   INDIASECRETAMAZONFIRETAMIL  |  07   AMAZONFORESTFIREODHIGYANSCIENCE  |  08  WHAT IT TELLS US ABOUTDEFORESTATION',
    duration: '00:05:00',
    videoOp: '100%',
  };
  const video3 = {
    titolo: '03 - MONTAGE PRAY FOR AMAZONIA',
    src: a3,
    set: '01   AMAZON FIRE VS METHANE GAS  |   02   PRAY FOR AMAZONIA (SLAM) - SIBYLLIN  |  03   PRAY FOR AMAZONIA \n'
        + '\n'
        + '| 04   AMAZON MUSICA DA FLORESTA  |  05   VOCE PRECISA ASSISTEIR ESSE VIDEO  #PRAYFORAMAZONIA',
    duration: '00:01:37',
    videoOp: '40%',
  };
  const video4 = {
    titolo: '04 - GRID PRAY FOR AMAZONIA',
    src: a4,
    set: ' 01   EJE BALAYE LES BOBO   02   AMAZON FIRE VS METHAN GAS     03   #AMAZONIA #PRAYFORAMAZIONA 04  AMAZON MUSICA DA FLORESTA    05  LA DEVASTADORA RAZON QUE UNE A CRISTIANO RONALDO Y LUIS SUOAREZ\n'
        + '\n'
        + '06  PRAY FOR AMAZONIA    07   MACRON URGES ACTION FROM G7 LEADERS  08   FIREFIGHTERS TACKLE FIRES CONTINUING TO BURN',
    duration: '00:03:31',
    videoOp: '100%',
  };

  const vid = [
    video1,
    video2,
    video3,
    video4,

  ];

  const def = vid[index];
  const {
    titolo, src, set, duration, videoOp,
  } = def;

  return (
    <div className="container-fluid bg-primary border-bottom border-white">
      <div className="row border-bottom border-white">
        <div className="col-5">
          <div className="row border-bottom border-white">
            <div className="col-2 border-end border-white d-flex justify-content-center align-items-center"><Title1 /></div>
            <div className="col-5 border-end border-white px-3 py-3">
              {' '}
              <Link to="/chapter06?selected=7&vid=0" className="linkHead">
                <img
                  src={a}
                  className="img-fluid rounded-circle immagine"
                  alt="Responsive image"
                  height="100"
                />
              </Link>
            </div>
            <div className="col-5 border-end border-white px-3 py-3">
              <Link to="/chapter06?selected=7&vid=1" className="linkHead">
                <img
                  src={b}
                  className="img-fluid rounded-circle immagine"
                  alt="Responsive image"
                  height="100"
                />
              </Link>
            </div>
          </div>
          <div className="row border-bottom border-white">
            <div className="col-2  border-end border-white" />
            <div className="col-5 border-end border-white py-2 text-center">MONTAGE</div>
            <div className="col-5 border-end border-white py-2 text-center">GRID</div>
          </div>
          <div className="row border-bottom border-white">
            <div className="col-2 border-end border-white d-flex justify-content-center align-items-center"><Title2 /></div>
            <div className="col-5 border-end border-white px-3 py-3">
              <Link to="/chapter06?selected=7&vid=2" className="linkHead">
                <img
                  src={c}
                  className="img-fluid rounded-circle immagine"
                  alt="Responsive image"
                  height="100"
                />
              </Link>
            </div>
            <div className="col-5 border-end border-white px-3 py-3">
              <Link to="/chapter06?selected=7&vid=3" className="linkHead">
                {' '}
                <img
                  src={d}
                  className="img-fluid rounded-circle immagine"
                  alt="Responsive image"
                  height="100"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-7">

          <div className="row border-bottom border-white px-3 py-3">{titolo}</div>
          <div className="row">
            <video
              autoPlay
              muted
              loop
              src={src}
              className="img-fluid pt-2"
              height="100"
            />
          </div>

        </div>
      </div>
      <div className="row ">
        <div className="col-9 border-end border-white py-3">
          <p className="fw-bold">SET VIDEOS:</p>
          <p>{set}</p>
        </div>
        <div className="col-3 py-3">
          <div className="row">
            <div className="col-6">
              <p className="fw-bold">DURATION:</p>
              <p>{duration}</p>
            </div>
            <div className="col-6">
              <p className="fw-bold">VIDEO OPACITY:</p>
              <p>{videoOp}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
