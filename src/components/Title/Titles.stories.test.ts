import { Default } from "./Title.stories";

describe('Title.stories', () => {
    it('Default story should have label "Title"', () => {
        expect(Default.args?.label).toBe('Title');
    });
});