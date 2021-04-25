import React from 'react';
import {
  steps, tools, whats,
} from '../../data/subCh02/subCh02Tab';

export default function Ch02Tab() {
  const quartaColonna = {
    scraping: '“Amazon Fires” - “Pray for Amazonia”',
    urlsCreation1: 'E2 ⟩ http://www.youtube.com/watch?v=',
    urlsCreation2: 'F2 ⟶ videoId',
    renaming: 'videoUrl',
    downloadVideo1: 'LINK TO PYTHON3 DOCUMENTATION',
    downloadVideo2: 'LINK TO PYTUBE3 DOCUMENTATION',
    downloadVideo3: 'LINK TO REPOSITORY AND STEP-BY-STEP GUIDE',
    frameExtraction1: 'LINK TO PYSCENEDETECT DOCUMENTATION',
    frameExtraction2: 'LINK TO REPOSITORY AND STEP-BY-STEP GUIDE',
    creationVector1: 'LINK TO INSTALL ANACONDA',
    creationVector2: 'LINK TO PIXPLOT DOCUMENTATION',
    creationVector3: 'LINK TO REPOSITORY AND STEP-BY-STEP GUIDE',
    annotate: 'LINK TO DOWNLOAD FIGMA',
  };

  const dataExploration = [
    {
      pill: 'videoId',
    },
    {
      pill: 'videoTitle',
    },
    {
      pill: 'publishedAt',
    },
    {
      pill: 'viewCount',
    },
    {
      pill: 'position',
    },
  ];

  const bg = 'bg-secondary';
  const collectingVideo = [
    {
      pillola: 'vid1',
      colore: bg,
    },
    {
      pillola: 'vid2',
      colore: bg,
    },
    {
      pillola: 'vid3',
      colore: bg,
    },
    {
      pillola: 'vid4',
      colore: bg,
    },
  ];

  const collectingFrames = [
    {
      pillola: 'frame1',
      colore: bg,
    },
    {
      pillola: 'frame2',
      colore: bg,
    },
    {
      pillola: 'frame3',
      colore: bg,
    },
    {
      pillola: 'frame4',
      colore: bg,
    },
    {
      pillola: 'frame5',
      colore: bg,
    },
  ];

  const {
    scraping, urlsCreation1, urlsCreation2, renaming, downloadVideo1, downloadVideo2, downloadVideo3, frameExtraction1, frameExtraction2, creationVector1, creationVector2, creationVector3, annotate,
  } = quartaColonna;
  return (
    <div className="row ">
      <div className="col-3 padding">
        {
                  steps.map(({
                    step,
                  }, i) => (
                    <div style={{ height: '5rem' }} className="col-12 border-end border-secondary border-bottom border-top bg-primary px-2" key={i}>
                      <span className="fw-bold">{step}</span>
                    </div>
                  ))
              }
      </div>
      <div className="col-3 padding">
        {
                  whats.map(({
                    what,
                  }, i) => (
                    <div style={{ height: '5rem' }} className="col-12 border-end border-secondary border-bottom border-top bg-primary px-2" key={i}>
                      {what}
                    </div>
                  ))
              }
      </div>
      <div className="col-3 padding">
        {
                  tools.map(({
                    tool, sfondo, arrow, quadre,
                  }, i) => (
                    <div style={{ height: '5rem' }} className={`col-12 border-end border-secondary border-bottom border-top bg-primary px-2 ${sfondo}`} key={i}>
                      <span className="fw-bold">{tool}</span>
                      {arrow}
                      {quadre}
                    </div>
                  ))
              }
      </div>
      <div className="col-3 padding">

        <div style={{ height: '5rem' }} className="bianco col-12 border-end border-secondary border-bottom border-top bg-primary px-2">
          {scraping}
        </div>

        <div style={{ height: '5rem' }} className="col-12 border-end border-secondary border-bottom border-top bg-primary px-2">
          {
              dataExploration.map(({
                pill,
              }, i) => (
                <span className="badge rounded-pill bg-light text-dark mx-2">{pill}</span>
              ))
            }
        </div>

        <div style={{ height: '5rem' }} className="col-12 border-end border-secondary border-bottom border-top bg-primary px-2" />

        <div style={{ height: '5rem' }} className="bianco col-12 border-end border-secondary border-bottom border-top bg-primary px-2">
          <p>{urlsCreation1}</p>
          <p>{urlsCreation2}</p>
        </div>

        <div style={{ height: '5rem' }} className="col-12 border-end border-secondary border-bottom border-top bg-primary px-2">
          <span className="badge rounded-pill bg-light text-dark mx-2">{renaming}</span>
        </div>

        <div style={{ height: '5rem' }} className="display-5 bianco col-12 border-end border-secondary border-bottom border-top bg-primary px-2">
          <p className="text-decoration-underline ">{downloadVideo1}</p>
          <p className="text-decoration-underline pt-1">{downloadVideo2}</p>
          <p className="text-decoration-underline pt-1">{downloadVideo3}</p>
        </div>

        <div style={{ height: '5rem' }} className="col-12 border-end border-secondary border-bottom border-top bg-primary px-2">
          <p className="fw-bold">Rename the videos inside the folder like this:</p>
          {
            collectingVideo.map(({
              pillola, colore,
            }, i) => (
              <span className={`badge rounded-pill text-dark mx-2 ${colore}`}>{pillola}</span>
            ))
          }

        </div>

        <div style={{ height: '5rem' }} className="display-5 bianco col-12 border-end border-secondary border-bottom border-top bg-primary px-2">
          <p className="text-decoration-underline">{frameExtraction1}</p>
          <p className="text-decoration-underline pt-1">{frameExtraction2}</p>
        </div>

        <div style={{ height: '5rem' }} className="col-12 border-end border-secondary border-bottom border-top bg-primary px-2">
          <p className="fw-bold">Rename the frames inside the folder like this:</p>
          {
            collectingFrames.map(({
              pillola, colore,
            }, i) => (
              <span className={`badge rounded-pill text-dark mx-2 ${colore}`}>{pillola}</span>
            ))
          }

        </div>

        <div style={{ height: '5rem' }} className="display-5 bianco col-12 border-end border-secondary border-bottom border-top bg-primary px-2">
          <p className="text-decoration-underline">{creationVector1}</p>
          <p className="text-decoration-underline pt-1">{creationVector2}</p>
          <p className="text-decoration-underline pt-1">{creationVector3}</p>
        </div>

        <div style={{ height: '5rem' }} className="col-12 border-end border-secondary border-bottom border-top bg-primary px-2" />

        <div style={{ height: '5rem' }} className="col-12 border-end border-secondary border-bottom border-top bg-primary px-2" />

        <div style={{ height: '5rem' }} className="display-5 bianco col-12 border-end border-secondary border-bottom border-top bg-primary px-2">
          <p className="text-decoration-underline">{annotate}</p>

        </div>

      </div>
    </div>
  );
}
