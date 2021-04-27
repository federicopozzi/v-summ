import React from 'react';
import { Helmet } from 'react-helmet';

import cover from '../images/cover.png';

function Seo() {
  return (
    <div className="App">
      <Helmet>

        <title>
          VSUMM TOOLKIT
        </title>
        <meta
          name="title"
          content="VSUMM TOOLKIT"
        />
        <meta
          name="description"
          content="Which visual methods can be designed to facilitate the analysis and synthesis of video collections from the web? How can these methods be communicated so that they can be replicated by other researchers? In response to these questions comes Video summarisation toolkit, an opensource platform created to collect and communicate nine different methods designed for the analysis and visualisation of video collections from the web. "
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://videosummarisationtoolkit.it/" />
        <meta property="og:title" content="VSUMM TOOLKIT" />
        <meta
          property="og:description"
          content="Which visual methods can be designed to facilitate the analysis and synthesis of video collections from the web? How can these methods be communicated so that they can be replicated by other researchers? In response to these questions comes Video summarisation toolkit, an opensource platform created to collect and communicate nine different methods designed for the analysis and visualisation of video collections from the web. "
        />
        <meta property="og:image" content={cover} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://videosummarisationtoolkit.it/" />
        <meta property="twitter:title" content="VSUMM TOOLKIT" />
        <meta
          property="twitter:description"
          content="Which visual methods can be designed to facilitate the analysis and synthesis of video collections from the web? How can these methods be communicated so that they can be replicated by other researchers? In response to these questions comes Video summarisation toolkit, an opensource platform created to collect and communicate nine different methods designed for the analysis and visualisation of video collections from the web. "
        />
        <meta property="twitter:image" content={cover} />

      </Helmet>
    </div>
  );
}

export default Seo;
