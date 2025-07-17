import '@testing-library/jest-dom';
import { vi } from 'vitest';

const renderMock = vi.fn();
const createRootMock = vi.fn(() => ({
  render: renderMock,
}));

vi.mock('react-dom/client', async (importOriginal) => {
  const actual = await importOriginal<typeof import('react-dom/client')>();
  return {
    ...actual,
    createRoot: createRootMock,
  };
});

describe('main.tsx', () => {
  it('debe renderizar App en el elemento root', async () => {
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);
    await import('./main');
  });
});