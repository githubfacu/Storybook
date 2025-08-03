import { Meta, StoryObj } from "@storybook/react"
import { Poster } from "./Poster"

const meta : Meta<typeof Poster> = {
    title: "Components/Poster",
    component: Poster,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'object',
            description: 'Props for the title component',
            defaultValue: { label: 'Poster Title' },
        },
        imageUrl: {
            control: 'object',
            description: 'Props for the image component',
            defaultValue: { src: 'https://via.placeholder.com/150', alt: 'Poster Image' },
        },
        description: {
            control: 'object',
            description: 'Props for the description component',
            defaultValue: { label: 'This is a poster description.' },
        },
        form: {
            control: 'object',
            description: 'Props for the form component',
            defaultValue: { status: 'typing' },
        },
    },
}

export default meta

type Story = StoryObj<typeof Poster>

export const Default: Story = {
    args: {
        title: { label: 'Poster Title' },
        imageUrl: { src: 'https://u-static.haozhaopian.net/uid_0815f06c44d4491f8c45e04c14bfcec0/aiImage/4fc0a9999457478e85170e44ca8a4061.jpg', alt: 'Poster Image', variant: 'square', maxWidth: '600px' },
        description: { label: 'This is a poster description.' },
        form: { status: 'typing', input: { inputType: 'text', placeholder: 'email' }, button: { buttonType: 'submit', variant: 'primary', children: <span>Suscribirse</span> } },
    },
};
