import { Button, ButtonProps } from './Button';
import { createRender } from '../../../test/helpers';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Button', () => {

    let defaultProps: ButtonProps

    beforeEach(() => {
        defaultProps = {
            children: <span>Click me</span>,
            onClick: vi.fn(),
        };
    });

    const ButtonRender = createRender(Button);

    it('renders the button with the correct text', () => {
        ButtonRender({ ...defaultProps });
        const button = screen.getByRole('button', { name: /click me/i });
        expect(button).toBeDefined();
        expect(button).toHaveTextContent('Click me');
    });

    it('applies the primary class by default', () => {
        ButtonRender({ ...defaultProps });
        const button = screen.getByRole('button', { name: /click me/i });
        expect(button.getAttribute('class')).toContain('storybook-buttonA--primary');
    });

    it('applies the secondary class when specified', () => {
        ButtonRender({ variant: 'secondary', children: <span>Click me</span> });
        const button = screen.getByRole('button', { name: /click me/i });
        expect(button).toHaveClass('storybook-buttonA--secondary');
    });

    it('onClick is called when button is clicked', () => {
        ButtonRender({ ...defaultProps });
        const button = screen.getByRole('button', { name: /click me/i });
        fireEvent.click(button);
        expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
    });
});