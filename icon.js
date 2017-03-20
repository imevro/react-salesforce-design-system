import React from 'react';
import { icons } from './slds';

export default ({ type, icon, ...props}) => (
  <svg {...props}>
    <use xlinkHref={`${icons[type]}#${icon}`} />
  </svg>
)
