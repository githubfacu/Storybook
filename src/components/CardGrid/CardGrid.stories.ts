import type { Meta, StoryObj } from '@storybook/react';
import { CardGrid } from './CardGrid'
import { data } from './CardGridMock';

const meta: Meta<typeof CardGrid> = {
  title: 'Components/CardGrid',
  component: CardGrid,
  tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        items: {
            control: {
                type: 'object',
            },
        },
        shadow: {
            control: {
                type: 'boolean',
            },
        },
        containerStyle: {
            control: 'object',
        },
    },
}

export default meta

export const Default: StoryObj = {
  args: {
    ...data,
    shadow: true,
    containerStyle: {
      display: 'grid',
      gap: '1.5rem',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      padding: '2rem',
    },
  },
};

export const ScrollableRow: StoryObj = {
  args: {
    ...data,
    shadow: true,
    containerStyle: {
      display: 'flex',
      gap: '1rem',
      overflowX: 'auto',
      padding: '1rem',
    },
  },
};