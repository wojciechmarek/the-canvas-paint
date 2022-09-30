import { render } from '@testing-library/react';

import FeatureTopMenu from './feature-top-menu';

describe('FeatureTopMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureTopMenu />);
    expect(baseElement).toBeTruthy();
  });
});
