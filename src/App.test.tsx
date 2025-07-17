import { createRender } from '../test/helpers';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
    const AppRender = createRender(App);

    it('renders the app without crashing', () => {
        AppRender({});
        const appElement = screen.getByTestId('app-container');
        expect(appElement).toBeInTheDocument();
    });
});