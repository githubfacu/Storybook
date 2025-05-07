import React from 'react';

export type VariantProps = 'rounded' | 'square'
export type RoundedSize = 'small' | 'medium' | 'large' | 'full'

export interface ImageProps {
    variant?: VariantProps;
    src: string;
    alt: string;
    maxWidth?: string;
    roundedSize?: RoundedSize;
    onMouseOver?: () => void;
}

const sizeStyles = {
    small: '8px',
    medium: '16px',
    large: '24px',
    full: '9999px',
  };

  export const Image: React.FC<ImageProps> = ({
    src,
    alt,
    maxWidth = '1024px',
    roundedSize,
    variant,
    onMouseOver,
  }: ImageProps) => {
    const borderRadiusStyle =
    variant === 'rounded' ? sizeStyles[roundedSize ?? 'full'] : '0px';
  
    return (
      <img
        src={src}
        alt={alt}
        onMouseOver={onMouseOver}
        style={{ maxWidth: maxWidth, borderRadius: borderRadiusStyle, objectFit: 'cover', width: '100%', height: '100%'}}
      />
    );
  };
  
  export default Image;