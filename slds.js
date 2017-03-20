import classNames from 'classnames';
import cssNames from '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css';
import action from '@salesforce-ux/design-system/assets/icons/action-sprite/svg/symbols.svg';
import custom from '@salesforce-ux/design-system/assets/icons/custom-sprite/svg/symbols.svg';
import doctype from '@salesforce-ux/design-system/assets/icons/doctype-sprite/svg/symbols.svg';
import standard from '@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg';
import utility from '@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg';

export const icons = {
  action,
  custom,
  doctype,
  standard,
  utility
};

export default function slds(bemDescriptors) {
  return classNames(
    bemDescriptors
      .split(' ')
      .filter(className => !!className)
      .map(className => {
        className = 'slds-' + className;
        if (className in cssNames === false) {
          throw new Error(`Can't find '${className}' in slds.css!`);
        }
        return cssNames[className];
      })
  );
}
