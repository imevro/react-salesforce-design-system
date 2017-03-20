import React, { Component, PropTypes } from 'react';
import Heading from './heading';
import Icon from './icon';
import Button from './button';
import slds from './slds';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCollapsed: props.isCollapsed
    }
  }

  onToggle(e) {
    if (this.props.isCanBeCollapsed) {
      this.setState(({ isCollapsed }) => ({
        isCollapsed: !isCollapsed
      }));
    }
  }

  render() {
    const { children, title, description } = this.props;

    return (
      <article className={slds('card')}>
        {title && (
          <div className={slds('card__header grid')} onClick={this.onToggle.bind(this)}>
            <header className={slds('media media--center has-flexi-truncate')}>
              <div className={slds('media__body')}>
                <Heading size="small" noMargin>
                  {title}
                </Heading>
                <p className={slds('text-color--weak')}>
                  {description}
                </p>
              </div>
            </header>

          <div className={slds('no-flex')}>
            <Button kind="icon-border-filled" className={slds('button--icon-x-small')}>
              <Icon type="utility" icon="down" className={slds('button__icon')} />
            </Button>
          </div>
        </div>
        )}
        {!this.state.isCollapsed && (
          <div className={slds('card__body')}>
            <div className={slds('card__body--inner')}>
              {children}
            </div>
          </div>
        )}
      </article>
    );
  }
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]),
  title: PropTypes.string,
};

export default Card;
