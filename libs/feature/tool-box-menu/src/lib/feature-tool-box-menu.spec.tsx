import { render } from '@testing-library/react';

import FeatureToolsBoxMenu from './feature-tool-box-menu';

describe('FeatureToolsBoxMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureToolsBoxMenu />);
    expect(baseElement).toBeTruthy();
  });
});
