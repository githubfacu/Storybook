import type { Meta, StoryObj } from '@storybook/react';

import { Description } from './Description';

const meta: Meta<typeof Description> = {
  title: 'Atoms/Description',
  component: Description,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
        options: ['primary', 'secondary'],
        description: 'visual style of Description',
        control: {type : 'radio'}
    },
  }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, magnam dicta assumenda vel et impedit quas minus corrupti obcaecati iusto dignissimos rem, nostrum quo sapiente corporis. Ex quibusdam eum accusamus.',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, magnam dicta assumenda vel et impedit quas minus corrupti obcaecati iusto dignissimos rem, nostrum quo sapiente corporis. Ex quibusdam eum accusamus.',
  },
};