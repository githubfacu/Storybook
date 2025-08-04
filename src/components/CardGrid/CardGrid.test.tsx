import { CardGrid, CardGridProps } from './CardGrid';
import { createRender } from '../../../test/helpers';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { data } from './CardGridMock';

describe('Card', () => {
    let defaultProps: CardGridProps;

    beforeEach(() => {
    defaultProps = {
        items: [
        {
            id: '1',
            object: {
            variant: 'primary',
            image: {
                src: 'https://example.com/image1.jpg',
                alt: 'Image 1',
                variant: 'rounded',
            },
            button: {
                children: <>Click Me</>,
            },
            description: {
                label: 'Card Description',
            },
            },
        },
        ],
        shadow: true,
    };
    });

    const CardRender = createRender(CardGrid);

    it('renders children correctly', () => {
        CardRender(defaultProps);
        expect(screen.getByText('Card Description')).toBeInTheDocument();
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    it('renders all cards with correct data', () => {
        CardRender({ ...(data as CardGridProps), shadow: true });

        expect(screen.getByText('Description for card 1')).toBeInTheDocument();
        expect(screen.getByText('Description for card 2')).toBeInTheDocument();
        expect(screen.getByText('Description for card 3')).toBeInTheDocument();

        expect(screen.getByText('Button 1')).toBeInTheDocument();
        expect(screen.getByText('Button 2')).toBeInTheDocument();
        expect(screen.getByText('Button 3')).toBeInTheDocument();

        expect(screen.getByAltText('Image 1')).toHaveAttribute('src', expect.stringContaining('Image/0b897de9714'));
        expect(screen.getByAltText('Image 2')).toHaveAttribute('src', expect.stringContaining('Image/a12ff18fd5'));
        expect(screen.getByAltText('Image 3')).toHaveAttribute('src', expect.stringContaining('Image/29bb823a50'));
    });

});