import { Default } from "./Subtitle.stories";

describe('Subtitle.stories', () => {
    it('Default story should have label "Subtitle"', () => {
        expect(Default.args?.label).toBe('Subtitle');
    });
});