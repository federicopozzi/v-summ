import React from 'react';
import HeaderPages from '../components/HeaderPages';
import '../scss/style.scss';
import Ch02Index from '../components/ch02/ch02Index';
import Methodology from '../components/Methodology';

export default function Chapter02() {
  return (
    <div>
      <HeaderPages />
      <Ch02Index />
      <Methodology />
    </div>
  );
}
