import { Poster, PosterProps } from './Poster';
import { createRender } from '../../../test/helpers';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Poster', () => {

    let defaultProps: PosterProps;

    beforeEach(() => {
        defaultProps = {
            title: { label: 'Poster Title' },
            imageUrl: { src: 'https://via.placeholder.com/150', alt: 'Poster Image' },
            description: { label: 'This is a poster description.' },
            form: { status: 'typing', input: { inputType: 'text', placeholder: 'email' }, button: { buttonType: 'submit', variant: 'primary', children: <span>Suscribirse</span> } },
        };
    });

    const PosterRender = createRender(Poster);

    it('renders correctly', () => {
        PosterRender({ ...defaultProps });
        const poster = screen.getByRole('article');
        expect(poster).toBeDefined();
    });

    it('renders title', () => {
        PosterRender({ ...defaultProps });
        const title = screen.getByText(defaultProps.title.label);
        expect(title).toBeInTheDocument();
    });

    it('renders image', () => {
        PosterRender({ ...defaultProps });
        const image = screen.getByAltText(defaultProps.imageUrl.alt);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', defaultProps.imageUrl.src);
    });

    it('renders description', () => {
        PosterRender({ ...defaultProps });
        const description = screen.getByText(defaultProps.description.label);
        expect(description).toBeInTheDocument();
    });

    it('renders form', () => {
        PosterRender({ ...defaultProps });
        const form = screen.getByRole('form');
        expect(form).toBeInTheDocument();
    });

});
