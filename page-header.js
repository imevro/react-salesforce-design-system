import React from 'react';

import slds from './slds';

const PageHeader = ({ title, children, abstract }) => (
  <div className={slds('page-header')}>
    <h1 className={slds('page-header__title truncate')}>
      {children || title}
    </h1>
  </div>
);

export default PageHeader;
