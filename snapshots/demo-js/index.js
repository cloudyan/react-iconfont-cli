/* eslint-disable */

import React from 'react';
import IconAlipay from './IconAlipay';
import IconUser from './IconUser';
import IconSetup from './IconSetup';
export { default as IconAlipay } from './IconAlipay';
export { default as IconUser } from './IconUser';
export { default as IconSetup } from './IconSetup';

const IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-alipay':
      return <IconAlipay {...rest} />;
    case 'icon-user':
      return <IconUser {...rest} />;
    case 'icon-setup':
      return <IconSetup {...rest} />;

  }

  return null;
};

export default IconFont;
