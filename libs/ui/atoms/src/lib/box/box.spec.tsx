import { render } from '@testing-library/react';

import { Box } from './box';

describe('Atoms - Box', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Box>Hello</Box>);
    expect(baseElement).toBeTruthy();
  });
});
