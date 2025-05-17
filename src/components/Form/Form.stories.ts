import type { Meta, StoryObj } from '@storybook/react';
import { Form } from './Form';

const meta: Meta<typeof Form> = {
  title: 'Molecules/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Typing: Story = {
  args: {
    status: 'typing',
  },
};

export const Submitting: Story = {
  args: {
    status: 'submitting',
  },
};

export const Success: Story = {
  args: {
    status: 'success',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
  },
};