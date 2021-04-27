import React from 'react';
import '../scss/style.scss';
import Header from '../components/Header';

import Indice from '../components/Indice';

export default function About2() {
  return (
    <div className="bg-primary ">
      <div className="head "><Header /></div>
      <div className="container-fluid">
        <div className="row">
          <Indice />
          <div style={{ height: '90vh' }} className="col-9 overflow-scroll">
            In the digital age, most communication practices are governed by the continuous creation and sharing of video content on the web and social media. From the Cisco Visual Networking Index statistics, which see video accounting for 80% of all global internet traffic by 2021, it is clear that this content, also in numerical terms, has now become dominant for the exchange of information and communication between web users. This proliferation has made this same video content a potentially very useful and informative material for social and cultural research. To date, several tools and methods exist for the analysis of video collections from the web, but they have a number of limitations that do not always make them functional for the work carried out by social researchers. The main problems are summarised in this table:
          </div>
        </div>
      </div>
    </div>
  );
}
