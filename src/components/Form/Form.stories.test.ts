import { Typing, Submitting, Success, Error } from './Form.stories';

describe('Form.stories', () => {
    it('Typing story should have status "typing"', () => {
        expect(Typing.args?.status).toBe('typing');
    });

    it('Submitting story should have status "submitting"', () => {
        expect(Submitting.args?.status).toBe('submitting');
    });

    it('Success story should have status "success"', () => {
        expect(Success.args?.status).toBe('success');
    });

    it('Error story should have status "error"', () => {
        expect(Error.args?.status).toBe('error');
    });
});