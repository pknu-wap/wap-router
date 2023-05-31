import { render } from '@testing-library/react';
import Route from '../Route';
import React from 'react';

describe('Route', () => {
  test('renders without crashing', () => {
    const props = {
      path: '/example',
      element: <div>Example</div>,
    };

    expect(() => render(<Route {...props} />)).not.toThrow();
  });
});
