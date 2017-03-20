// WIP

import React, { Component, PropTypes } from 'react';
import slds, { icons } from './slds';
import genUniqueCounter from '../gen-unique-counter';

const HTML_NODE = document.documentElement;

const PicklistItem = ({ title, description, selected, onClick }) => {
  const id = 'PicklistItem-' + genUniqueCounter();

  return (
    <li role="presentation" className={selected ? slds('is-selected') : null}>
      <span className={slds('lookup__item-action lookup__item-action--label')} role="option" tabindex="-1">
        <svg className={slds('icon icon--selected icon--x-small icon-text-default m-right--x-small shrink-none')} aria-hidden={true}>
          <use xlinkHref={icons.utility + '#check'} />
        </svg>
        <span className={slds('truncate')} title={description}>
          {title} {/* TODO assistive text */}
        </span>
      </span>
    </li>
  );
};

const PicklistItemProps = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
  // value TODO null
};

PicklistItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  ...PicklistItemProps
};

class Picklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      unfocusCb: null,
      justFocused: false
    };
  }

  componentWillUnmount() {
    const { unfocusCb } = this.state;
    if (unfocusCb !== null) {
      document.documentElement.removeEventListener('click', unfocusCb);
      this.setState({ unfocusCb: null });
    }
  }

  render() {
    return (
      <div className={slds('picklist dropdown-trigger dropdown')}>
        <div className={slds('form-element')}>
          <label className={slds('form-element__label')} htmlFor={id}>
            {label}
          </label>
          <div className={slds('form-element__control')}>
            <div className={slds('input-has-icon input-has-icon--right')}>
              <svg className={slds('input__icon')} aria-hidden="true">
                <use xlinkHref={icons.utility + '#search'}></use>
              </svg>
              <input type="search"
                     id={id}
                     className={slds('input')}
                     placeholder={placeholder}
                     onInput={(eent) => this.input(event)}
                     onFocus={() => this.inputFocused(true)}
                     value={this.state.inputValue} />
            </div>
          </div>
        </div>

        <div className={slds('dropdown dropdown--left dropdown--length-5')} role="listbox">
          <ul id={id} className={slds('dropdown__list')} role="group"> {/* aria-label */}

            {this.filterOptions(options).map(option => <PicklistItem {...option} onClick={item => console.log(item)} />)}

          </ul>
        </div>

      </div>
    );
  }
}
