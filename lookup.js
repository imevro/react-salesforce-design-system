import React, { Component, PropTypes } from 'react';
import ClickOutside from 'react-click-outside';

import slds from './slds';
import Icon from './icon';
import Button from './button';

class LookupItem extends Component {
  render() {
    const { title, description, onClick } = this.props;

    return (
      <li role="presentation" onClick={onClick}>
        <span className={slds('lookup__item-action media')} role="option">
          <div className={slds('media__body')}>
            <div className={slds('lookup__result-text')}>
              {title}
            </div>
            <span className={slds('lookup__result-meta text-body--small')}>
              {description}
            </span>
          </div>
        </span>
      </li>
    );
  }
}

const LookupItemProps = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
  // value: PropTypes.any.isRequired TODO null
};

LookupItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  ...LookupItemProps
};

class Lookup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      isOpened: false
    };
  }

  toggle(isOpened = !this.state.isOpened) {
    this.setState({ isOpened });
  }

  open() {
    this.toggle(true);
  }

  close() {
    this.toggle(false);
  }

  onClick(item) {
    const { name, onChange, value, multiple } = this.props;

    if (multiple) {
      onChange(name, [...value, item.value]);
    } else {
      onChange(name, item.value);

      this.close();
    }
  }

  onReset() {
    this.props.onChange(this.props.name, null);
  }

  input(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  filterOptionsBySelected(options, selected) {
    if (this.props.multiple) {
      return options.filter(option => selected.indexOf(option.value) < 0);
    } else {
      return options;
    }
  }

  filterOptionsByInput(list) {
    const { inputValue } = this.state;

    if (inputValue === '') {
      return list;
    } else {
      return list.filter(item => (new RegExp(inputValue, 'i')).test(item.title));
    }
  }

  get hasValue() {
    const { multiple, value } = this.props;

    if (multiple) return value && value.length > 0;

    return value !== null && value.length > 0; // empty string
  }

  render() {
    const { placeholder, options, value, multiple } = this.props;

    let className = slds('lookup');
    if (this.state.isOpened) className += ' ' + slds('is-open');

    const hasValue = !!this.hasValue;
    const isMultiple = !!multiple;

    const canRenderSearch = isMultiple || (!isMultiple && !hasValue);

    const description = this.state.inputValue ? `${this.state.inputValue}...` : placeholder;

    return (
      <ClickOutside className={className} onClickOutside={() => this.close()}>
        {canRenderSearch && (
          <div className={slds('input-has-icon input-has-icon--right')}>
            <Icon className={slds('input__icon')} type="utility" icon="search" />

            <input type="search"
                   className={slds('input')}
                   placeholder={placeholder}
                   onInput={(event) => this.input(event)}
                   onFocus={() => this.open()}
                   value={this.state.inputValue}
                 />
          </div>
        )}

        {/* Render value is not multiple */}
        {!canRenderSearch && (
          <div className={slds('pill_container')}>
            <span className={slds('pill size--1-of-1')}>
              <span className={slds('pill__label')} title={value}>
                {value}
              </span>
              <Button kind="icon" className={slds('pill__remove')} title="Remove" onClick={() => this.onReset()}>
                <Icon className={slds('button__icon')} type="utility" icon="close" />
              </Button>
            </span>
          </div>
        )}

        {/* Render menu */}
        <div className={slds('lookup__menu')}>
          <div className={slds('lookup__item--label text-body--small')}>
            {description}
          </div>
          <ul className={slds('lookup__list')} role="listbox">
            {this.filterOptionsByInput(this.filterOptionsBySelected(options, value)).map(item => (
              <LookupItem {...item} key={item.value} onClick={() => this.onClick(item)} />
            ))}
          </ul>
        </div>

        {/* Render selected values if multiple */}
        {hasValue && isMultiple && (
          <div className={slds('pill_container pill_container--bare')}>
            {value.map(value => (
              <span className={slds('pill')} key={value}>
                <span className={slds('pill__label')} title={value}>
                  {value}
                </span>
                <Button kind="icon" className={slds('pill__remove')} title="Remove" onClick={() => this.props.onChange(name, this.props.value.filter(cur => cur !== value))}>
                  <Icon className={slds('button__icon')} type="utility" icon="close" />
                </Button>
              </span>
            ))}
          </div>
        )}
      </ClickOutside>
    );
  }
}

Lookup.defaultProps = {
  placeholder: '',
  multiple: false
};

Lookup.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape(LookupItemProps)
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  multiple: PropTypes.bool.isRequired
  // value: PropTypes.any.isRequired // null
  /*value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object // TODO: null
  ]).isRequired*/
};

export default Lookup;
