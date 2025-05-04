import React from 'react';

import './description.css'

export type VariantProps = 'primary' | 'secondary'

export interface DescriptionProps {
    variant?: VariantProps;
    label: string
}

export const Description: React.FC<DescriptionProps> = ({
  label,
  variant= 'primary',
  ...props
}: DescriptionProps) => {
  return (
    <p
        className={[`description--${variant}`].join(' ')}
      {...props}
    >
      {label}
    </p>
  );
};
