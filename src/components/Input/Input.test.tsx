import { Input, InputProps } from './Input';
import { createRender } from '../../../test/helpers';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Input', () => {
    let defaultProps: InputProps;

    beforeEach(() => {
        defaultProps = {
            placeholder: 'Enter text',
            value: '',
            onChange: vi.fn(),
        };
    });

    const InputRender = createRender(Input);

    it('renders the input with the correct placeholder', () => {
        InputRender({ ...defaultProps });
        const input = screen.getByPlaceholderText(/enter text/i);
        expect(input).toBeDefined();
    });

    it('calls onChange when the input value changes', () => {
        InputRender({ ...defaultProps });
        const input = screen.getByPlaceholderText(/enter text/i);
        fireEvent.change(input, { target: { value: 'New value' } });
        expect(defaultProps.onChange).toHaveBeenCalledWith('New value');
    });

    it('applies the disabled attribute when disabled prop is true', () => {
        InputRender({ ...defaultProps, disabled: true });
        const input = screen.getByPlaceholderText(/enter text/i);
        expect(input).toBeDisabled();
    });
});