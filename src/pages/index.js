import React from 'react';
import '../scss/style.scss';
import HeaderHome from '../components/HeaderHome';

export default function Home() {
  return (
    <div className="bg-primary">
      <HeaderHome />
      <div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 ">
              <p className="fs-2">
                Which visual methods can be designed to facilitate the analysis and synthesis of video collections from the web? How can these methods be communicated so that they can be replicated by other researchers? In response to these questions comes Video summarisation toolkit, an opensource platform created to collect and communicate nine different methods designed for the analysis and visualisation of video collections from the web. Within the online artefact, the methods are organised by purpose and type of analysis: thematic analysis, human figure analysis, mood analysis; and for each of the methods there is documentation of all the steps, examples of their application and external resources.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
