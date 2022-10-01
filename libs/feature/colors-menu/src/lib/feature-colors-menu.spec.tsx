import { render } from '@testing-library/react';

import FeatureColorsMenu from './feature-colors-menu';

describe('FeatureColorsMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureColorsMenu />);
    expect(baseElement).toBeTruthy();
  });
});
