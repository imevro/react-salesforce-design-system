import React from 'react';
import slds from './slds';

const Section = ({ around, top, right, bottom, left, align, children }) => {
  let className = '';

  if (around) className += `m-around--${around}`;
  if (top) className += ` m-top--${top}`;
  if (right) className += ` m-right--${right}`;
  if (bottom) className += ` m-bottom--${bottom}`;
  if (left) className += ` m-left--${left}`;
  if (align === 'center') className += ' align--absolute-center';

  return (
    <div className={slds(className)}>
      {children}
    </div>
  )
}

export default Section;
