
import React from 'react'
import { Card, CardProps } from '../Card/Card';

export interface CardGridProps {
  items: Array<{
    id: string;
    object: CardProps
  }>;
  shadow?: boolean;
  containerStyle?: React.CSSProperties;
}

export const CardGrid: React.FC<CardGridProps> = ({ items, shadow, containerStyle }) => {
  return (
    <div style={containerStyle}>
      {items.map(item => (
        <div
          key={item.id}
          style={{ boxShadow: shadow ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none' }}
        >
          <Card
            variant={item.object.variant}
            image={item.object.image}
            button={item.object.button}
            description={item.object.description}
          />
        </div>
      ))}
    </div>
  )
}
