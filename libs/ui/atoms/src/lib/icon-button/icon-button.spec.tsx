import { render } from '@testing-library/react';

import { IconButton } from './icon-button';

describe('Atoms - Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IconButton></IconButton>);
    expect(baseElement).toBeTruthy();
  });
});
