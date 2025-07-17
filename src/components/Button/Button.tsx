import React from 'react';

import './button.css';

export type VariantProps = 'primary' | 'secondary' | 'success'

export interface ButtonProps {
    variant?: VariantProps;
    children: JSX.Element;
    buttonType?: 'button' | 'submit';
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  disabled = false,
  buttonType = 'button',
  size,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={buttonType}
      onClick={onClick}
      disabled={disabled}
      style={{ 
        opacity: `${disabled ? '.6' : ''}`
      }}
      className={['storybook-buttonA', `storybook-buttonA--${variant}`, `storybook-buttonA--${size}`].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
};
