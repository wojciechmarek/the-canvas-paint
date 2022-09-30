import { render } from '@testing-library/react';

import { Button } from './button';

describe('Atoms - Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button>Hello</Button>);
    expect(baseElement).toBeTruthy();
  });
});
