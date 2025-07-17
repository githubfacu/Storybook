import { Image, ImageProps } from './Image';
import { createRender } from '../../../test/helpers';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Image', () => {

    let defaultProps: ImageProps;

    beforeEach(() => {
        defaultProps = {
            src: 'https://example.com/image.jpg',
            alt: 'Example image',
        };
    });

    const ImageRender = createRender(Image);

    it('renders the image with the correct src and alt attributes', () => {
        ImageRender({ ...defaultProps });
        const image = screen.getByAltText(/example image/i);
        expect(image).toBeDefined();
        expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
        expect(image).toHaveAttribute('alt', 'Example image');
    });

    it('applies the rounded variant with correct border radius', () => {
        ImageRender({ ...defaultProps, variant: 'rounded', roundedSize: 'medium' });
        const image = screen.getByAltText(/example image/i);
        expect(image).toHaveStyle('border-radius: 16px');
    });

    it('onMouseOver is called when image is hovered', () => {
        const onMouseOver = vi.fn();
        ImageRender({ ...defaultProps, onMouseOver });
        const image = screen.getByAltText(/example image/i);
        fireEvent.mouseOver(image);
        expect(onMouseOver).toHaveBeenCalled();
    });
});