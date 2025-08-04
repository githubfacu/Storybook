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
        src: 'https://u-static.haozhaopian.net/uid_0815f06c44d4491f8c45e04c14bfcec0/aiImage/e9e6c3e41693403a9bb31cd018fe7783.jpg',
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