import { Primary, Secondary } from "./Description.stories";

describe('Description.stories', () => {
    it('Primary story should have variant "primary"', () => {
        expect(Primary.args?.variant).toBe('primary');
    });

    it('Secondary story should have variant "secondary"', () => {
        expect(Secondary.args?.variant).toBe('secondary');
    });
});