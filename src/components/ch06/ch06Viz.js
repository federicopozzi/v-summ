import React from 'react';
import a from '../../images/ch06/a.png';
import b from '../../images/ch06/b.png';
import c from '../../images/ch06/c.png';
import d from '../../images/ch06/d.png';

import '../../scss/style.scss';
import a1 from '../../images/ch06/a.mp4';
import a2 from '../../images/ch06/b.mp4';

import Link from 'gatsby-link';

export default function Ch06Viz() {
  let index = 0;
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);

    index = typeof params.get('vid') !== 'undefined' ? params.get('vid') : 0;
  }

  const video1 = {
    titolo: 'titolo',
    src: a1,
    set: ' set video',
    duration: '01',
    videoOp: '50',
  };
  const video2 = {
    titolo: 'titolo2',
    src: a2,
    set: ' set video2',
    duration: '012',
    videoOp: '502',
  };
  const video3 = {
    titolo: 'titolo3',
    src: a2,
    set: ' set video3',
    duration: '012',
    videoOp: '502',
  };
  const video4 = {
    titolo: 'titolo4',
    src: a2,
    set: ' set video4',
    duration: '012',
    videoOp: '502',
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
            <div className="col-2 border-end border-white">AMAZON FIRE</div>
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
            <div className="col-2 border-end border-white">PRAY FOR AMAZONIA</div>
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

          <div className="row border-bottom border-white">{titolo}</div>
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
      <div className="row">
        <div className="col-9 border-end border-white">
          <p className="fw-bold">SET VIDEOS:</p>
          <p>{set}</p>
        </div>
        <div className="col-3">
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
