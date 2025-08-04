import { CardGridProps } from "./CardGrid"

export const data: Partial<CardGridProps> = {
  items: [
    {
      id: '1',
      object: {
        variant: 'primary',
        image: {
          src: 'https://u-static.haozhaopian.net/uid_0815f06c44d4491f8c45e04c14bfcec0/aiImage/0b897de9714d402bb52a842632f40e65.jpg@400w_400h_1l.src',
          alt: 'Image 1',
          variant: 'rounded',
        },
        button: {
          children: <>Button 1</>,
        },
        description: {
          label: 'Description for card 1',
        },
      },
    },
    {
      id: '2',
      object: {
        variant: 'primary',
        image: {
          src: 'https://u-static.haozhaopian.net/uid_0815f06c44d4491f8c45e04c14bfcec0/aiImage/a12ff18fd528493ab67285f4deb0bcd9.jpg@400w_400h_1l.src',
          alt: 'Image 2',
          variant: 'rounded',
        },
        button: {
          children: <>Button 2</>,
        },
        description: {
          label: 'Description for card 2',
        },
      },
    },
        {
      id: '3',
      object: {
        variant: 'primary',
        image: {
          src: 'https://u-static.haozhaopian.net/uid_0815f06c44d4491f8c45e04c14bfcec0/aiImage/29bb823a5096412b83300d95f2833e54.jpg@400w_400h_1l.src',
          alt: 'Image 3',
          variant: 'rounded',
        },
        button: {
          children: <>Button 3</>,
        },
        description: {
          label: 'Description for card 3',
        },
      },
    },
  ],
};