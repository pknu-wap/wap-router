import Route from '../Route';
import createRoutesFromElements from '../createRoutesFromElements';
import React from 'react';

describe('createRoutesFromElements', () => {
  it('should create routes from elements', () => {
    expect(
      createRoutesFromElements(
        <>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/product/:productId" element={<div>Product</div>} />
          <Route
            path="/product/:productId/user/:userId"
            element={<div>Product User</div>}
          />
          <Route path="/*" element={<div>Not Found</div>} />
        </>,
      ),
    ).toEqual([
      {
        element: <div>Home</div>,
        path: '/',
      },
      {
        element: <div>About</div>,
        path: '/about',
      },
      {
        element: <div>Product</div>,
        path: '/product/:productId',
      },
      {
        element: <div>Product User</div>,
        path: '/product/:productId/user/:userId',
      },
      {
        element: <div>Not Found</div>,
        path: '/*',
      },
    ]);
  });
});
