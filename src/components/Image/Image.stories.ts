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
        src: 'https://media.licdn.com/dms/image/v2/D4D16AQGOP4Mony9fFA/profile-displaybackgroundimage-shrink_350_1400/B4DZZaOS90GgAY-/0/1745270420697?e=1751500800&v=beta&t=C9pQmBUnFn4SiHXsLcU-OF1J2lCU_x3U-SvwtxD9k0M',
        alt: '',
    }
}

export const RoundedImage : Story = {
    args: {
        src: 'https://media.licdn.com/dms/image/v2/D4D16AQGOP4Mony9fFA/profile-displaybackgroundimage-shrink_350_1400/B4DZZaOS90GgAY-/0/1745270420697?e=1751500800&v=beta&t=C9pQmBUnFn4SiHXsLcU-OF1J2lCU_x3U-SvwtxD9k0M',
        alt: '',
        variant: 'rounded'
    }
}