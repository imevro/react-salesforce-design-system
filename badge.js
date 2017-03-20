import React from 'react';
import cn from 'classnames';
import slds from './slds';
import s from './badge.css';

const aliases = {
  active: 'success',
  deleted: 'danger'
};

export default ({ kind, children}) => (
  <span className={cn(slds(`badge`), s[aliases[kind] || kind])}>
    {children}
  </span>
)
