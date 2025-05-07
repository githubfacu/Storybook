import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Image } from './Image';

const meta: Meta<typeof Image> = {
  title: 'Atoms/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
        options: ['rounded', 'square'],
        description: 'visual style of image',
        control: {type : 'radio'}
    },
  },
  args: {onMouseOver: fn()}
}

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseImage : Story = {
    args: {
        src: 'https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9mMzg3NmFhZWE4NTNlZmM0YWMzZGQxOWVkMzA0MWYyOT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.lmYpvrh6x8iVAAcZzT8nDamkCK8r-Ab0WAwa7RPSwz0',
        alt: '',
    }
}

export const RoundedImage : Story = {
    args: {
        src: 'https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9mMzg3NmFhZWE4NTNlZmM0YWMzZGQxOWVkMzA0MWYyOT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.lmYpvrh6x8iVAAcZzT8nDamkCK8r-Ab0WAwa7RPSwz0',
        alt: '',
        variant: 'rounded'
    }
}