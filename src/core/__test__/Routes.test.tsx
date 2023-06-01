import { render } from '@testing-library/react';
import Route from '../Route';
import Routes from '../Routes';
import React from 'react';
import { RouterContext } from '../../context';

describe('Routes', () => {
  it('should render the current route (no params)', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <RouterContext.Provider
        value={{
          path: { pathname: '/', hash: '', search: '' },
          changePath: jest.fn,
        }}
      >
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
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <RouterContext.Provider
        value={{
          path: { pathname: '/product/123', hash: '', search: '' },
          changePath: jest.fn,
        }}
      >
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
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <RouterContext.Provider
        value={{
          path: { pathname: '/product/123/user/456', hash: '', search: '' },
          changePath: jest.fn,
        }}
      >
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

  it('should render not found route', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <RouterContext.Provider
        value={{
          path: { pathname: '/unknown', hash: '', search: '' },
          changePath: jest.fn,
        }}
      >
        {children}
      </RouterContext.Provider>
    );

    const { getByText } = render(
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/product/:productId" element={<div>Product</div>} />
        <Route path="/*" element={<div>Not Found</div>} />
      </Routes>,
      { wrapper },
    );

    expect(getByText('Not Found')).toBeInTheDocument();
  });
});
