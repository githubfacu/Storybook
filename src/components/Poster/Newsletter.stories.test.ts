import { Default, Success } from "./Newsletter.stories";

describe('Newsletter.stories', () => {
    it('Default story should render with correct title', () => {
        expect(Default.args?.title?.label).toBe('Newsletter Title');
    });

    it('Default story should render with correct image URL', () => {
        expect(Default.args?.imageUrl?.src).toBe('https://u-static.haozhaopian.net/uid_0815f06c44d4491f8c45e04c14bfcec0/aiImage/e99c5d11f54346bba7edba15604bb289.jpg');
    });

    it('Default story should render with correct description', () => {
        expect(Default.args?.description?.label).toBe('This is a Newsletter description.');
    });

    it('Default story should render form with correct status', () => {
        expect(Default.args?.form?.status).toBe('typing');
    });

    it('Default story should render form with correct status', () => {
        expect(Default.args?.form?.status).toBe('typing');
    });

    it('Success story should render with correct title', () => {
        expect(Success.args?.title?.label).toBe('Newsletter Title');
    });

    it('Success story should render with correct image URL', () => {
        expect(Success.args?.imageUrl?.src).toBe('https://u-static.haozhaopian.net/uid_0815f06c44d4491f8c45e04c14bfcec0/aiImage/e99c5d11f54346bba7edba15604bb289.jpg');
    });

    it('Success story should render with correct description', () => {
        expect(Success.args?.description?.label).toBe('This is a Newsletter description.');
    });

    it('Success story should render form with correct status', () => {
        expect(Success.args?.form?.status).toBe('success');
    });

    it('Success story should render form with correct status', () => {
        expect(Success.args?.form?.status).toBe('success');
    });
});
