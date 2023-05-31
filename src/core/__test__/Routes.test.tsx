import { render } from '@testing-library/react';
import Route from '../Route';
import Routes from '../Routes';
import React from 'react';
import { RouterContext } from '../../context';

describe('Routes', () => {
  it('should render the current route (no params)', () => {
    const path = '/';
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <RouterContext.Provider value={{ path, changePath: jest.fn }}>
        {children}
      </RouterContext.Provider>
    );

    const { getByText } = render(
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/product/:productId" element={<div>Product</div>} />
        <Route
          path="/product/:productId/user/:userId"
          element={<div>Product User</div>}
        />
      </Routes>,
      { wrapper },
    );

    expect(getByText('Home')).toBeInTheDocument();
  });

  it('should render the current route (1 params)', () => {
    const path = '/product/123';
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <RouterContext.Provider value={{ path, changePath: jest.fn }}>
        {children}
      </RouterContext.Provider>
    );

    const { getByText } = render(
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/product/:productId" element={<div>Product</div>} />
        <Route
          path="/product/:productId/user/:userId"
          element={<div>Product User</div>}
        />
      </Routes>,
      { wrapper },
    );

    expect(getByText('Product')).toBeInTheDocument();
  });

  it('should render the current route (n params)', () => {
    const path = '/product/123/user/456';
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <RouterContext.Provider value={{ path, changePath: jest.fn }}>
        {children}
      </RouterContext.Provider>
    );

    const { getByText } = render(
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/product/:productId" element={<div>Product</div>} />
        <Route
          path="/product/:productId/user/:userId"
          element={<div>Product User</div>}
        />
      </Routes>,
      { wrapper },
    );

    expect(getByText('Product User')).toBeInTheDocument();
  });
});
