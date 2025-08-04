import { Primary, Secondary, Success, Disabled } from './Button.stories';

describe('Button.stories', () => {

    it('Primary story should have variant "primary"', () => {
        expect(Primary.args?.variant).toBe('primary');
    });

    it('Secondary story should have variant "secondary"', () => {
        expect(Secondary.args?.variant).toBe('secondary');
    });

    it('Success story should have variant "success"', () => {
        expect(Success.args?.variant).toBe('success');
    });

    it('Disabled story should have disabled set to true', () => {
        expect(Disabled.args?.disabled).toBe(true);
    });
});