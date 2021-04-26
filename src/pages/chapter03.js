import React from 'react';
import HeaderPages from '../components/HeaderPages';
import '../scss/style.scss';
import Methodology from '../components/Methodology';
import Ch03Tab from '../components/ch03/ch03Tab';
import Ch03Viz from '../components/ch03/ch03Viz';
import Seo from '../components/Seo';

export default function Chapter03() {
  return (
    <div>
      <Seo />
      <HeaderPages />
      <Ch03Viz />
      <Ch03Tab />
      <Methodology />
    </div>
  );
}
