import React from 'react';

import './button.css';

export type VariantProps = 'primary' | 'secondary' | 'success'

export interface ButtonProps {
    variant?: VariantProps;
    children: JSX.Element
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  size,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={['storybook-buttonA', `storybook-buttonA--${variant}`, `storybook-buttonA--${size}`].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
};
