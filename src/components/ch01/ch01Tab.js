import React from 'react';
import '../../scss/style.scss';
import { tabContent, tabHead, tabStyle } from '../../data/ch01Tab';
import { ReactComponent as ArrowD } from '../../assets/svg/arrowD.svg';

export default function Ch01Tab() {
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
          {tabContent[0].first}
        </div>
        <div className={tabStyle}>
          {tabContent[0].second}
        </div>
        <div className={tabStyle}>
          {tabContent[0].third}
        </div>
        <div className={tabStyle}>
          {tabContent[0].fourth}
        </div>
      </div>
    </div>
  );
}
