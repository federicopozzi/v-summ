import React from 'react';
import HeaderPages from '../components/HeaderPages';
import '../scss/style.scss';
import Methodology from '../components/Methodology';
import Ch05Index from '../components/ch05/ch05Index';
import Ch05Tab from '../components/ch05/ch05Tab';
import Seo from '../components/Seo';

export default function Chapter05() {
  return (
    <div>
      <Seo />
      <HeaderPages />
      <Ch05Index />
      <Ch05Tab />
      <Methodology />
    </div>
  );
}
