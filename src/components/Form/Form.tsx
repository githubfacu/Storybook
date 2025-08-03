import React from 'react';
import { Input, InputProps } from '../Input/Input';
import { Button, ButtonProps } from '../Button/Button';

export interface FormProps {
  status: 'typing' | 'submitting' | 'success' | 'error';
  input: InputProps;
  button: ButtonProps
  errorMessage?: string;
  successMessage?: string;
}

export const Form: React.FC<FormProps> = ({ status, input, button, errorMessage, successMessage }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
        role="form"
        aria-label="formulario"
        onSubmit={handleSubmit}
        style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}
    >
      <Input
        {...input}
        disabled={status === 'submitting' || status === 'success'}
      />
      <Button
        {...button}
        disabled={status === 'submitting' || status === 'success'}
      />
      {status === 'error' && (
        <p style={{ color: 'red', marginTop: '8px' }}>
          {errorMessage || 'Hubo un error al enviar.'}
        </p>
      )}
      {status === 'success' && (
        <p style={{ color: 'green', marginTop: '8px' }}>
          {successMessage || 'Enviado correctamente.'}
        </p>
      )}
    </form>
  );
};