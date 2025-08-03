import { Meta, StoryObj } from "@storybook/react"
import { Title } from "./Title"

const meta : Meta<typeof Title> = {
  title: 'Atoms/Title',
  component: Title,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: 'The text content of the title',
            defaultValue: 'Title',
        },
    },
}

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Title',
  },
};