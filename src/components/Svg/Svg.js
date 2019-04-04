import React from 'react';

export default ({ svgName, myClass }) => (
  <svg className={`icon ${myClass}`} aria-hidden="true">
    <use xlinkHref={`#icon-my-${svgName}`} />
  </svg>
);
