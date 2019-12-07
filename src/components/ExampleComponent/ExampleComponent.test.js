import React from 'react';
import { render } from '@testing-library/react';

import ExampleComponent from './index';

describe('Components - ExampleComponent', () => {
  it('should be render correctly', () => {
    const { container } = render(<ExampleComponent />);

    expect(container).toBeDefined();
  });
});
