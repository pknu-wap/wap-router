import parseUrlRoutes from '../parseUrlRoutes';
import React from 'react';

describe('parseUrlRoutes', () => {
  it('should return the correct routes', () => {
    const routeObjects = [
      {
        path: '/',
        element: <div>Root</div>,
      },
      {
        path: '/about/:id',
        element: <div>About</div>,
      },
      {
        path: '/contact/:contactId/user/:userId',
        element: <div>Contact</div>,
      },
      {
        path: '/category/:categoryName/:categoryId',
        element: <div>Category</div>,
      },
    ];

    expect(parseUrlRoutes(routeObjects)).toEqual([
      {
        element: <div>Root</div>,
        fragmentRegExp: /^\/$/,
        params: [],
      },
      {
        element: <div>About</div>,
        fragmentRegExp: /^\/about\/([^\\/]+)$/,
        params: ['id'],
      },
      {
        element: <div>Contact</div>,
        fragmentRegExp: /^\/contact\/([^\\/]+)\/user\/([^\\/]+)$/,
        params: ['contactId', 'userId'],
      },
      {
        element: <div>Category</div>,
        fragmentRegExp: /^\/category\/([^\\/]+)\/([^\\/]+)$/,
        params: ['categoryName', 'categoryId'],
      },
    ]);
  });
});
