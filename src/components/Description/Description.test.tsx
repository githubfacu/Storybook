import { Description, DescriptionProps } from './Description';
import { createRender } from '../../../test/helpers';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Description', () => {

    let defaultProps: DescriptionProps;

    beforeEach(() => {
        defaultProps = {
            label: 'This is a description',
        };
    });

    const DescriptionRender = createRender(Description);

    it('renders the description with the correct text', () => {
        DescriptionRender({ ...defaultProps });
        const description = screen.getByText(/this is a description/i);
        expect(description).toBeDefined();
        expect(description).toHaveTextContent('This is a description');
    });

    it('applies the primary class by default', () => {
        DescriptionRender({ ...defaultProps });
        const description = screen.getByText(/this is a description/i);
        expect(description.getAttribute('class')).toContain('description--primary');
    });

    it('applies the secondary class when specified', () => {
        DescriptionRender({ variant: 'secondary', label: 'This is a secondary description' });
        const description = screen.getByText(/this is a secondary description/i);
        expect(description).toHaveClass('description--secondary');
    });
});