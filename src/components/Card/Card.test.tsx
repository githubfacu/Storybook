import { Card, CardProps } from './Card';
import { createRender } from '../../../test/helpers';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Card', () => {
    let defaultProps: CardProps;

    beforeEach(() => {
        defaultProps = {
            image: {
                src: 'https://example.com/image.jpg',
                alt: 'Example image',
            },
            button: {
                children: <span>Click me</span>,
                onClick: vi.fn(),
            },
            description: {
                label: 'This is a card description',
            },
        };
    });

    const CardRender = createRender(Card);

    it('renders children correctly', () => {
        CardRender({ ...defaultProps });
        const card = screen.getByRole('article');
        expect(card).toBeDefined();
    });

});