import React from 'react'

import './card.css';
import Image, { ImageProps } from '../Image/Image';
import { Description, DescriptionProps } from '../Description/Description';
import { Button, ButtonProps } from '../Button/Button';

export type CardVariant = 'primary' | 'secondary'

export interface CardProps {
    variant?: CardVariant;
    image: ImageProps;
    button: ButtonProps;
    description: DescriptionProps;
}

export const Card: React.FC<CardProps> = ({
  variant = 'primary',
  image,
  button,
  description,
  ...props
}: CardProps) => {
  return (
    <article
      className={['storybook-card', `storybook-card--${variant}`].join(' ')}
      {...props}
    >
        <picture className='storybook-card--pic'>
            <Image src={image.src} alt={image.alt} variant={image.variant}/>
        </picture>
        <Description label={description.label} variant={description.variant}/>
        <Button children={button.children} variant={button.variant}/>
    </article>
  );
};
