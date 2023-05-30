import React from 'react';
import getParams from '../getParams';
import { Route } from '../../types';

describe('getParams', () => {
  const Home = () => <div>Home</div>;
  const route: Route = {
    fragmentRegExp: /\/user\/([^/]+)\/post\/([^/]+)/,
    params: ['userId', 'postId'],
    element: <Home />,
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
