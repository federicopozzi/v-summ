import React from 'react';
import '../scss/style.scss';
import Header from '../components/Header';

export default function Index() {
  const chapter = [
    {
      number: 'CHAPTER 01',
      title: 'IdentifyingI and visualising the main themes emerging from a video collection of videos.',
      subtitle: 'ONE COLLECTION OF 50 VIDEOS',
      backGround: 'col-5 verde border-end border-dark',
    },
    {
      number: 'CHAPTER 01',
      title: 'IdentifyingI and visualising the main themes emerging from a video collection of videos.',
      subtitle: 'ONE COLLECTION OF 50 VIDEOS',
      backGround: 'verde',
    },

  ];
  return (
    <div className="bg-primary">
      <Header />
      <div className="container-fluid">
        <div className="row border-bottom border-dark">
          <div className="col-7 border-end border-dark">
            <p className="fs-4">
              Each section contains a step by step description of the method
              and an example of the visualization output.
            </p>
          </div>
          <div className="col-5 aa"><p className="fs-4">ALL these methods has been tested on a set of YouTube videos related to the topic of Amazon Fires. </p></div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row border-bottom border-dark">
          <p>THEME ANALYSIS / CH.01 - 02</p>
        </div>
        <div className="row">
          <div className="col-2 border-end border-dark">
            {chapter[0].number}
          </div>
          <div className={chapter[0].backGround}>
            {chapter[0].title}
          </div>
          <div className="col-5">
            {chapter[0].subtitle}
          </div>
        </div>
      </div>
    </div>
  );
}
