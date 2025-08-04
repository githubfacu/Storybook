import { Newsletter, NewsletterProps } from './Newsletter';
import { createRender } from '../../../test/helpers';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Poster', () => {

    let defaultProps: NewsletterProps;

    beforeEach(() => {
        defaultProps = {
            title: { label: 'Newsletter Title' },
            imageUrl: { src: 'https://via.placeholder.com/150', alt: 'Newsletter Image' },
            description: { label: 'This is a Newsletter description.' },
            form: { status: 'typing', input: { inputType: 'text', placeholder: 'email' }, button: { buttonType: 'submit', variant: 'primary', children: <span>Suscribe</span> } },
        };
    });

    const NewsletterRender = createRender(Newsletter);

    it('renders correctly', () => {
        NewsletterRender({ ...defaultProps });
        const poster = screen.getByRole('article');
        expect(poster).toBeDefined();
    });

    it('renders title', () => {
        NewsletterRender({ ...defaultProps });
        const title = screen.getByText(defaultProps.title.label);
        expect(title).toBeInTheDocument();
    });

    it('renders image', () => {
        NewsletterRender({ ...defaultProps });
        const image = screen.getByAltText(defaultProps.imageUrl.alt);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', defaultProps.imageUrl.src);
    });

    it('renders description', () => {
        NewsletterRender({ ...defaultProps });
        const description = screen.getByText(defaultProps.description.label);
        expect(description).toBeInTheDocument();
    });

    it('renders form', () => {
        NewsletterRender({ ...defaultProps });
        const form = screen.getByRole('form');
        expect(form).toBeInTheDocument();
    });

});
