import { render } from '@testing-library/react';

import FeatureBottomMenu from './feature-bottom-menu';

describe('FeatureBottomMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureBottomMenu />);
    expect(baseElement).toBeTruthy();
  });
});
