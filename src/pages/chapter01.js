import React from 'react';
import HeaderPages from '../components/HeaderPages';
import Ch01Viz from '../components/ch01/ch01Viz';
import Ch01Tab from '../components/ch01/ch01Tab';
import '../scss/style.scss';
import { ReactComponent as ArrowD } from '../assets/svg/arrowD.svg';
import Methodology from '../components/Methodology';
import Seo from '../components/Seo';

export default function Chapter01() {
  return (
    <div>
      <Seo />
      <HeaderPages />
      <div className="bg-primary"><Ch01Viz /></div>
      <Ch01Tab />
      <Methodology />
    </div>
  );
}
