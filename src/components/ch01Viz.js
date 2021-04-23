import React from 'react';
import data from '../data';
import '../scss/style.scss';

export default function Ch01Viz() {
  let index = 0;
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);

    index = typeof params.get('selected') !== 'undefined' ? params.get('selected') : 0;
  }
  const visualization = data[index];

  const { viz } = visualization;
  return (
    <img
      src={viz}
      className="img-fluid"
      alt="Responsive image"
      height="100"
    />
  );
}
