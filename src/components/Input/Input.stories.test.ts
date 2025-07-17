import { Default, Disabled } from './Input.stories';

describe('Input.stories', () => {
    it('Default story should be defined', () => {
        expect(Default).toBeDefined();
    });

    it('Disabled story should be defined', () => {
        expect(Disabled).toBeDefined();
    });

    it('Default story should have inputType "text"', () => {
        expect(Default.args?.inputType).toBe('text');
    });

    it('Default story should have placeholder "Escribe aquí..."', () => {
        expect(Default.args?.placeholder).toBe('Escribe aquí...');
    });

    it('Default story should have disabled set to false', () => {
        expect(Default.args?.disabled).toBe(false);
    });

    it('Disabled story should have disabled set to true', () => {
        expect(Disabled.args?.disabled).toBe(true);
    });
});     