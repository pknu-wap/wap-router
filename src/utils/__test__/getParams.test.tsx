import React from 'react';
import getParams from '../getParams';
import type { RouteConfig } from '../../types';

describe('getParams', () => {
  const Home = () => <div>Home</div>;
  const route: RouteConfig = {
    fragmentRegExp: /\/user\/([^/]+)\/post\/([^/]+)/,
    element: <Home />,
    params: ['userId', 'postId'],
  };

  it('should extract params from path', () => {
    const path = '/user/123/post/456';
    const params = getParams(route, path);

    expect(params).toEqual({
      userId: '123',
      postId: '456',
    });
  });

  it('should return empty object if no matches', () => {
    const path = '/user/123';
    const params = getParams(route, path);

    expect(params).toEqual({});
  });
});
