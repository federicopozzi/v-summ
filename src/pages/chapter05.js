import React from 'react';
import HeaderPages from '../components/HeaderPages';
import '../scss/style.scss';
import Methodology from '../components/Methodology';
import Ch05Index from '../components/ch05/ch05Index';

export default function Chapter05() {
  return (
    <div>
      <HeaderPages />
      <Ch05Index />
      <Methodology />
    </div>
  );
}
