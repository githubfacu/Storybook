/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Default, ScrollableRow } from './CardGrid.stories';

describe('CardGrid.stories', () => {
  it('Default story has correct container styles', () => {
    // @ts-ignore
    expect(Default.args?.containerStyle).toMatchObject({
      display: 'grid',
      gap: '1.5rem',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      padding: '2rem',
    });
  });
  it('ScrollableRow story has correct container styles', () => {
    // @ts-ignore
    expect(ScrollableRow.args?.containerStyle).toMatchObject({
      display: 'flex',
      gap: '1rem',
      overflowX: 'auto',
      padding: '1rem',
    });
  });

});
