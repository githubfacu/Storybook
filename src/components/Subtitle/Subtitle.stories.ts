import { Meta, StoryObj } from "@storybook/react"
import { Subtitle } from "./Subtitle"

const meta : Meta<typeof Subtitle> = {
  title: 'Atoms/Subtitle',
  component: Subtitle,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: 'The text content of the Subtitle',
            defaultValue: 'Subtitle',
        },
    },
}

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Subtitle',
  },
};