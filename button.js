import React from 'react';
import cn from 'classnames';
import slds from './slds';

export default ({ kind, children, className, ...props }) => (
  <button type={props.type || 'button'} className={cn(slds(`button button--${kind}`), className)} {...props}>
    {children}
  </button>
)
