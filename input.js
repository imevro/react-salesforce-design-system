import React, { PropTypes } from 'react';
import slds from './slds';
import genUniqueCounter from '../gen-unique-counter';

const Input = ({ label, placeholder }) => {
  const id = 'Input-' + genUniqueCounter();

  return (
    <div className={slds('form-element')}>
      <label className={slds('form-element__label')} htmlFor={id}>
        {label}
      </label>
      <div className={slds('form-element__control')}>
        <input type="text" id={id} className={slds('input')} placeholder={placeholder} />
      </div>
    </div>
  );
};

Input.defaultProps = {
  placeholder: ''
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

export default Input;
