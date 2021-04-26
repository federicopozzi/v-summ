import React from 'react';
import HeaderPages from '../components/HeaderPages';
import '../scss/style.scss';
import Methodology from '../components/Methodology';
import Ch051Index from '../components/ch05/ch051Index';
import Ch05Tab from '../components/ch05/ch05Tab';
import Seo from '../components/Seo';

export default function Chapter051() {
  return (
    <div>
      <Seo />
      <HeaderPages />
      <Ch051Index />
      <Ch05Tab />
      <Methodology />
    </div>
  );
}
