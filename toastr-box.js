import React, { Component } from 'react';
import slds from './slds';
import Icon from './icon';

class ToastrBox extends Component {
  static defaultProps = {
    timeout: 5000,
  };

  componentDidMount() {
    setTimeout(() => {
      this.props.onExpire(this.props.id);
    }, this.props.timeout);
  }

  render() {
    const { kind, title, children } = this.props;

    return (
      <div className={slds(`notify notify--toast theme--${kind}`)}>
        {/* <span className={slds(`assistive-text`)}>Error</span> */}

        <button title="Close" className={slds(`button notify__close button--icon-inverse`)}>
          <Icon className={slds(`button__icon button__icon--large`)} type="utility" icon="close" />

          <span className={slds(`assistive-text`)}>Close</span>
        </button>
        <div className={slds(`notify__content grid`)}>
          <Icon className={slds(`icon icon--small m-right--small col no-flex`)} type="utility" icon={kind} />

          <div className={slds(`col align-middle`)}>
            <h2 className={slds(`text-heading--small`)}>
              {title}
            </h2>
            {children && (<p>{children}</p>)}
          </div>
        </div>
      </div>
    )
  }
}

export default ToastrBox;
