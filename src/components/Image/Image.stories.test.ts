import { BaseImage, RoundedImage } from "./Image.stories";

describe('Image.stories', () => {
    it('BaseImage story should be defined', () => {
        expect(BaseImage).toBeDefined();
    });

    it('RoundedImage story should have variant "rounded"', () => {
        expect(RoundedImage.args?.variant).toBe('rounded');
    });
});
