import React, { PropTypes } from 'react';
import slds from './slds';

const Tile = ({ title, items }) => (
  <div className={slds('tile m-bottom--medium')}>
    {items.map(({ label, value }, index) => {
      return (
        <dl key={index} className={slds('list--horizontal wrap')}>
          <dt className={slds('item--label text-color--weak truncate')} title={label}>{label}:</dt>
          <dd className={slds('item--detail truncate')}>{value}</dd>
        </dl>
      )
    })}
  </div>
);

Tile.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.string.isRequired
      ])
    })
  )
};

export default Tile;
