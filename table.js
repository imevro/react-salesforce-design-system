import React, { PropTypes } from 'react';
import slds from './slds';

// TODO: add title & propTypes
export const Cell = ({ children }) => (
  <td>
    <span className={slds('truncate')}>
      {children}
    </span>
  </td>
);

export const Row = ({ children }) => (
  <tr>
    {children}
  </tr>
);

// TODO: add title
export const HCell = ({ scope, width, children }) => (
  <th className={slds('text-title--caps')} width={width} scope={scope}>
    <span className={slds('truncate')}>
      {children}
    </span>
  </th>
);

HCell.defaultProps = {
  scope: 'col'
};

// TODO: props for children
HCell.propTypes = {
  scope: PropTypes.string.isRequired
};

export const Table = ({ children }) => (
  <table className={slds('table table--bordered table--cell-buffer')}>
    {children}
  </table>
);

Table.propTypes = {
  children: PropTypes.node.isRequired
};
