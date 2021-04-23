import React from 'react';
import '../../scss/style.scss';
import {
  tabContent, tabHead, tabStyle, tabStyleWhite,
} from '../../data/ch04Tab';
import { ReactComponent as ArrowD } from '../../assets/svg/arrowD.svg';

export default function Ch04Tab() {
  return (
    <div className="container-fluid pt-3">
      <div className="row ">
        {
                    tabHead.map(({
                      title,
                    }, i) => (
                      <div className="col-3 border-end border-danger border-bottom border-top bg-light py-1" key={i}>
                        {title}
                        <ArrowD style={{ transform: 'scale(0.6)' }} />
                      </div>
                    ))
                }
        <div className={tabStyle}>
          <span className="fw-bold">{tabContent[0].first}</span>
        </div>
        <div className={tabStyle}>
          {tabContent[0].second}
        </div>
        <div className={tabStyleWhite}>
          <span className="fw-bold">{tabContent[0].thirdBold}</span>
          {tabContent[0].third}
        </div>
        <div className={tabStyleWhite}>
          {tabContent[0].fourth}
        </div>

        <div className={tabStyle}>
          <span className="fw-bold">{tabContent[1].first}</span>
        </div>
        <div className={tabStyle}>
          {tabContent[1].second}
        </div>
        <div className={tabStyleWhite}>
          <span className="fw-bold">{tabContent[1].thirdBold}</span>
          {tabContent[1].third}
        </div>
        <div className={tabStyle}>
          <span className="badge rounded-pill bg-light text-dark mx-2">videoID</span>
          <span className="badge rounded-pill bg-light text-dark mx-2">videoTitle</span>
          <span className="badge rounded-pill bg-light text-dark mx-2">publishedAt</span>
          <span className="badge rounded-pill bg-light text-dark mx-2">viewCount</span>
          <span className="badge rounded-pill bg-light text-dark mx-2">position</span>
        </div>
      </div>
    </div>
  );
}
