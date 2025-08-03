import { Default } from "./Poster.stories";

describe('Poster.stories', () => {
    it('Default story should render with correct title', () => {
        expect(Default.args?.title?.label).toBe('Poster Title');
    });

    it('Default story should render with correct image URL', () => {
        expect(Default.args?.imageUrl?.src).toBe('https://u-static.haozhaopian.net/uid_0815f06c44d4491f8c45e04c14bfcec0/aiImage/4fc0a9999457478e85170e44ca8a4061.jpg');
    });

    it('Default story should render with correct description', () => {
        expect(Default.args?.description?.label).toBe('This is a poster description.');
    });

    it('Default story should render form with correct status', () => {
        expect(Default.args?.form?.status).toBe('typing');
    });
});
