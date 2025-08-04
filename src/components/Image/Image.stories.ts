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
        src: 'https://u-static.fotor.com/images/text-to-image/result/PRO-3c09bbc16b0048408d6c76f9bb161665.jpg',
        alt: '',
        maxWidth: '500px',
    }
}

export const RoundedImage : Story = {
    args: {
        src: 'https://u-static.fotor.com/images/text-to-image/result/PRO-3c09bbc16b0048408d6c76f9bb161665.jpg',
        alt: '',
        variant: 'rounded',
        maxWidth: '500px',
    }
}