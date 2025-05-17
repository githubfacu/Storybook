import React from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export interface FormProps {
  status: 'typing' | 'submitting' | 'success' | 'error';
}

export const Form: React.FC<FormProps> = ({ status }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
        onSubmit={handleSubmit}
        style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}
    >
      <Input
        inputType="text"
        placeholder="Escribe algo..."
        disabled={status === 'submitting' || status === 'success'}
      />
      <Button
        buttonType="submit"
        disabled={status === 'submitting' || status === 'success'}
        variant='primary'
      >
        <span>Enviar</span>
      </Button>
      {status === 'error' && (
        <p style={{ color: 'red', marginTop: '8px' }}>
          Hubo un error al enviar.
        </p>
      )}
      {status === 'success' && (
        <p style={{ color: 'green', marginTop: '8px' }}>
          Enviado correctamente.
        </p>
      )}
    </form>
  );
};