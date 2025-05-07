import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Card } from './Card'

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
        options: ['primary', 'secondary'],
        description: 'visual style of card',
        control: {type : 'radio'}
    },
  },
  args: {
    onMouseOver: fn(),
    image: {
        src: 'https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9mMzg3NmFhZWE4NTNlZmM0YWMzZGQxOWVkMzA0MWYyOT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.lmYpvrh6x8iVAAcZzT8nDamkCK8r-Ab0WAwa7RPSwz0',
        alt: 'Example Image',
        variant: 'rounded',
      },
      description: {
        label: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, magnam dicta assumenda vel et impedit quas minus corrupti obcaecati iusto dignissimos rem, nostrum quo sapiente corporis. Ex quibusdam eum accusamus.',
      },
      button: {
        children: <>Click Me</>,
      },
  }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};