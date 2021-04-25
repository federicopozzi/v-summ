import React from 'react';
import '../../scss/style.scss';
import ch03 from '../../images/Frame 26.png';

export default function VizHorizontal() {
  return (
    <div
      className="row"
      style={{
        maxWidth: '200%', width: '200%', overflow: 'auto',
      }}
    >
      <img
        src={ch03}
        width="2000px"
      />
    </div>
  );
}
