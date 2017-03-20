import React from 'react';
import slds from './slds';

const Heading = ({ size, noMargin, ...props }) => {
  let className = `text-heading--${size}`;
  if (!noMargin) className += ` m-bottom--${size}`;

  return (
    <h1 {...props} className={slds(className)}>
      {props.children}
    </h1>
  );
}

Heading.defaultProps = {
  size: 'small'
}

export default Heading;
