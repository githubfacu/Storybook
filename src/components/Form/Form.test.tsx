import { Form, FormProps } from './Form';
import { createRender } from '../../../test/helpers';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Form', () => {
    let defaultProps: FormProps;

    beforeEach(() => {
        defaultProps = {
            status: 'typing',
            input: {
                inputType: 'text',
                placeholder: 'email',
            },
            button: {
                buttonType: 'submit',
                variant: 'primary',
                children: <span>Enviar</span>,
            },
        };
    });

    const FormRender = createRender(Form);

    it('renders children correctly', () => {
        FormRender({ ...defaultProps });
        const form = screen.getByRole('form');
        expect(form).toBeDefined();
    });

    it('attributes are applied correctly', () => {
        FormRender({ ...defaultProps });
        const form = screen.getByRole('form');
        expect(form).toHaveAttribute('aria-label', 'formulario');
    });

    it('form submission avails the submit button', () => {
        FormRender({ ...defaultProps });
        const btn = screen.getByRole('button', { name: /Enviar/i });
        fireEvent.click(btn);
        expect(btn).toBeEnabled();
    });

    it('status text is displayed correctly', () => {
        FormRender({ ...defaultProps, status: 'error' });
        const errorText = screen.getByText('Hubo un error al enviar.');
        expect(errorText).toBeInTheDocument();
    });

    it('status text is displayed correctly', () => {
        FormRender({ ...defaultProps, status: 'success' });
        const successText = screen.getByText('Enviado correctamente.');
        expect(successText).toBeInTheDocument();
    });

    it('input placeholder is applied correctly', () => {
        FormRender({ ...defaultProps });
        const input = screen.getByPlaceholderText('email');
        expect(input).toBeInTheDocument();
    });

    it('button text is applied correctly', () => {
        FormRender({ ...defaultProps });
        const button = screen.getByRole('button', { name: /Enviar/i });
        expect(button).toBeInTheDocument();
    });

});