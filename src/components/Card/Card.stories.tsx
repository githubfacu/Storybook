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
        src: 'https://media.licdn.com/dms/image/v2/D4D35AQFQEHEr5wV2xQ/profile-framedphoto-shrink_400_400/B4DZZZuZanG0Ac-/0/1745262057410?e=1746910800&v=beta&t=nGK4qipUX4MfgmwGsG7DAfRBnF0wqvmZCfLHQB3o03I',
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