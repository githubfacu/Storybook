import React from 'react';

export type VariantProps = 'rounded' | 'square'

export interface ImageProps {
    variant?: VariantProps;
    src: string;
    alt: string;
    roundedSize?: 'small' | 'medium' | 'large' | 'full';
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
    roundedSize,
    variant,
    onMouseOver,
  }: ImageProps) => {
    const borderRadiusStyle =
    variant === 'rounded' ? sizeStyles[roundedSize ?? 'full'] : '0px';
  
    return (
      <div style={{ margin: '0px', overflow: 'hidden' }}>
        <img
          src={src}
          alt={alt}
          onMouseOver={onMouseOver}
          style={{ maxWidth: '100%', borderRadius: borderRadiusStyle }}
        />
      </div>
    );
  };
  
  export default Image;