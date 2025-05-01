import React from 'react';
import type { Props } from './Buttont.props';

import './button.css';

export const Button: React.FC<Props> = ({
  variant,
  textColor,
  children,
  size,
  onClick,
  ...props
}: Props) => {
  return (
    <button
      type="button"
      className={['storybook-buttonA', `storybook-buttonA--${variant}`, `storybook-buttonA--${size}`].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
};
