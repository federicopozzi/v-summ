import React from 'react';
import HeaderPages from '../components/HeaderPages';
import '../scss/style.scss';
import Methodology from '../components/Methodology';
import Ch01Viz from '../components/ch01/ch01Viz';
import Ch04Tab from '../components/ch04/ch04Tab';

export default function Chapter04() {
  return (
    <div>
      <HeaderPages />
      <div className="bg-primary"><Ch01Viz /></div>

      <Ch04Tab />
      <Methodology />
    </div>
  );
}
