import React from 'react';
import HeaderPages from '../components/HeaderPages';
import Ch01Viz from '../components/ch01/ch01Viz';
import Ch01Tab from '../components/ch01/ch01Tab';
import '../scss/style.scss';

export default function Chapter01() {
  return (
    <div>
      <HeaderPages />
      <Ch01Viz className="bg-primary" />
      <Ch01Tab />
    </div>
  );
}
