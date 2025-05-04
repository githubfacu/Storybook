import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
        options: ['primary', 'secondary', 'success'],
        description: 'visual style of button',
        control: {type : 'radio'}
    },
  },
  args: {onClick: fn()}
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Success: Story = {
    args: {
      variant: 'success',
      children: 'Success',
    },
};

export const Add: Story = {
    args: {
      variant: 'primary',
      children: 'Add',
      size: 'large'
    },
};