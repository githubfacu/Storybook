import { Subtitle } from './Subtitle.tsx';
import { createRender } from '../../../test/helpers.tsx';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SubtitleProps } from './Subtitle.tsx';

describe('Subtitle', () => {
    let defaultProps : SubtitleProps

    beforeEach(() => {
        defaultProps = {
            label: 'Subtitle',
        };
    });

    const TitleRender = createRender(Subtitle);

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