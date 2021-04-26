import React from 'react';
import HeaderPages from '../components/HeaderPages';
import '../scss/style.scss';
import Methodology from '../components/Methodology';

import Seo from '../components/Seo';
import Ch06Viz from '../components/ch06/ch06Viz';

export default function Chapter05() {
  return (
    <div>
      <Seo />
      <HeaderPages />
      <Ch06Viz />
      <Methodology />
    </div>
  );
}
