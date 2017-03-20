import React, { PropTypes as PT } from 'react';
import slds from './slds';
import Button from './button';
import Section from './section';

// group
export const FormGroup = ({ label, hasError, errorMessage, children }) => (
  // TODO: add .has-error if hasError
  <Section bottom="small">
    <div className={slds(`form-element`)}>
      <label className={slds(`form-element__label`)}>{label}</label>

      {children}

      {hasError && (
        <div className={slds(`form-element__help`)}>{errorMessage}</div>
      )}
    </div>
  </Section>
);

FormGroup.propTypes = {
  label: PT.string.isRequired
};

// input
export const FormInput = ({ onChange, ...props }) => (
  <div className={slds(`form-element__control`)}>
    <input {...props} className={slds(`input`)} onChange={e => onChange(props.name, e.target.value)} />
  </div>
);

export const FormFooter = ({ isCancelDisabled, isSubmitDisabled, onCancel, onSubmit }) => (
  <div className={slds(`docked-form-footer`)}>
    <Button type="button" disabled={isCancelDisabled} kind="neutral" onClick={onCancel}>Cancel</Button>
    <Button type="submit" disabled={isSubmitDisabled} kind="brand" onClick={onSubmit}>Save</Button>
  </div>
);

export const ReduxFormed = (Component) => ({ input, meta, ...props }) => (
  <Component {...input} {...props} onChange={(name, value) => input.onChange(value)} />
)

// default form
export const Form = ({ children, title, ...props }) => (
  // TODO: add horizontal, inline, stacked, compound from props.kind
  <form {...props} className={slds(`form--stacked`)}>
    {children}
  </form>
);

export default Form;
