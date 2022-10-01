import { render } from '@testing-library/react';

import FeatureCanvas from './feature-canvas';

describe('FeatureCanvas', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureCanvas />);
    expect(baseElement).toBeTruthy();
  });
});
