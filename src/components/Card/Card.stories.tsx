import type { Meta, StoryObj } from '@storybook/react';

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
    image: {
        src: 'https://u-static.haozhaopian.net/uid_0815f06c44d4491f8c45e04c14bfcec0/aiImage/93f3f22b3d4942b88a344de8ab1b1e98.jpg@400w_400h_1l.src',
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