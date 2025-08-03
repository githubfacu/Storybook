import type { Meta, StoryObj } from '@storybook/react';
import { Form } from './Form';

const meta: Meta<typeof Form> = {
  title: 'Molecules/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['typing', 'submitting', 'success', 'error'],
      description: 'Current status of the form',
      defaultValue: 'typing',
    },
    input: {
      control: 'object',
      description: 'Props for the input component',
      defaultValue: { inputType: 'text', placeholder: 'Escribe algo...' },
    },
    button: {
      control: 'object',
      description: 'Props for the button component',
      defaultValue: { buttonType: 'submit', variant: 'primary' },
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display when status is "error"',
      defaultValue: 'Hubo un error al enviar.',
    },
    successMessage: {
      control: 'text',
      description: 'Success message to display when status is "success"',
      defaultValue: 'Enviado correctamente.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Typing: Story = {
  args: {
    status: 'typing',
    input: { inputType: 'text', placeholder: 'Escribe algo...' },
    button: { buttonType: 'submit', variant: 'primary', children: 'Enviar' },
  },
};

export const Submitting: Story = {
  args: {
    status: 'submitting',
    input: { inputType: 'text', placeholder: 'Escribe algo...' },
    button: { buttonType: 'submit', variant: 'primary', children: 'Enviar' },
  },
};

export const Success: Story = {
  args: {
    status: 'success',
    input: { inputType: 'text', placeholder: 'Escribe algo...' },
    button: { buttonType: 'submit', variant: 'primary', children: 'Enviar' },
    successMessage: 'Formulario enviado correctamente.',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    input: { inputType: 'text', placeholder: 'Escribe algo...' },
    button: { buttonType: 'submit', variant: 'primary', children: 'Enviar' },
    errorMessage: 'Error al enviar el formulario.',
  },
};