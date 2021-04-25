import React from 'react';
import HeaderPages from '../components/HeaderPages';
import '../scss/style.scss';
import Methodology from '../components/Methodology';
import Ch051Index from '../components/ch05/ch051Index';

export default function Chapter051() {
  return (
    <div>
      <HeaderPages />
      <Ch051Index />
      <Methodology />
    </div>
  );
}
