import { Title } from './Title.tsx';
import { createRender } from '../../../test/helpers';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TitleProps } from './Title';

describe('Title', () => {
    let defaultProps : TitleProps

    beforeEach(() => {
        defaultProps = {
            label: 'Title',
        };
    });

    const TitleRender = createRender(Title);

    it('renders the title with the correct text', () => {
        TitleRender({ ...defaultProps });
        const title = screen.getByText(/title/i);
        expect(title).toBeDefined();
    });

    it('does not throw an error when rendering the title', () => {
        expect(() => {
            TitleRender({ ...defaultProps });
        }).not.toThrow();
    });
});