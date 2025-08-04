import { Meta, StoryObj } from "@storybook/react"
import { Newsletter } from "./Newsletter"

const meta : Meta<typeof Newsletter> = {
    title: "Components/Newsletter",
    component: Newsletter,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'object',
            description: 'Props for the title component',
            defaultValue: { label: 'Newsletter Title' },
        },
        imageUrl: {
            control: 'object',
            description: 'Props for the image component',
            defaultValue: { src: 'https://via.placeholder.com/150', alt: 'Newsletter Image' },
        },
        description: {
            control: 'object',
            description: 'Props for the description component',
            defaultValue: { label: 'This is a Newsletter description.' },
        },
        form: {
            control: 'object',
            description: 'Props for the form component',
            defaultValue: { status: 'typing' },
        },
    },
}

export default meta

type Story = StoryObj<typeof Newsletter>

export const Default: Story = {
    args: {
        title: { label: 'Newsletter Title' },
        imageUrl: { src: 'https://u-static.haozhaopian.net/uid_0815f06c44d4491f8c45e04c14bfcec0/aiImage/e99c5d11f54346bba7edba15604bb289.jpg', alt: 'Newsletter Image', variant: 'square', maxWidth: '600px' },
        description: { label: 'This is a Newsletter description.' },
        form: { status: 'typing', input: { inputType: 'text', placeholder: 'email' }, button: { buttonType: 'submit', variant: 'primary', children: <span>Suscribe</span> }, errorMessage: 'Error sending subscription.', successMessage: 'Subscription successful.'},
    },
};

export const Success: Story = {
    args: {
        title: { label: 'Newsletter Title' },
        imageUrl: { src: 'https://u-static.haozhaopian.net/uid_0815f06c44d4491f8c45e04c14bfcec0/aiImage/e99c5d11f54346bba7edba15604bb289.jpg', alt: 'Newsletter Image', variant: 'square', maxWidth: '600px' },
        description: { label: 'This is a Newsletter description.' },
        form: { status: 'success', input: { inputType: 'text', placeholder: 'email' }, button: { buttonType: 'submit', variant: 'primary', children: <span>Suscribe</span> }, errorMessage: 'Error sending subscription.', successMessage: 'Subscription successful.'},
    },
};