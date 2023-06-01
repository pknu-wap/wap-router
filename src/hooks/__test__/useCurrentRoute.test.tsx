import React from 'react';
import { renderHook } from '@testing-library/react';
import { RouterContext } from '../../context';
import useCurrentRoute from '../useCurrentRoute';
import type { RouteConfig } from '../../types';

describe('useCurrentRoute', () => {
  const home: RouteConfig = {
    fragmentRegExp: /\/home/,
    params: [],
    element: <div>home</div>,
  };

  const post: RouteConfig = {
    fragmentRegExp: /\/post\/([^/]+)/,
    params: ['postId'],
    element: <div>post</div>,
  };

  const category = {
    fragmentRegExp: /^\/main\/category\/([^\\/]+)\/sub\/([^\\/]+)$/,
    params: ['category', 'sub'],
    element: <div>category sub</div>,
  };

  const routes = [home, post, category];

  it('should return current route based on path', () => {
    const path = {
      pathname: '/home',
      hash: '',
      search: '',
    };
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <RouterContext.Provider value={{ path, changePath: jest.fn }}>
        {children}
      </RouterContext.Provider>
    );

    const { result } = renderHook(() => useCurrentRoute(routes), { wrapper });
    expect(result.current).toBe(home);
  });

  it('should return current route base on params path', () => {
    const path = {
      pathname: '/post/456',
      hash: '',
      search: '',
    };
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <RouterContext.Provider value={{ path, changePath: jest.fn }}>
        {children}
      </RouterContext.Provider>
    );

    const { result } = renderHook(() => useCurrentRoute(routes), { wrapper });
    expect(result.current).toBe(post);
  });

  it('should return current route base on two params path', () => {
    const path = {
      pathname: '/main/category/456/sub/789',
      hash: '',
      search: '',
    };
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <RouterContext.Provider value={{ path, changePath: jest.fn }}>
        {children}
      </RouterContext.Provider>
    );

    const { result } = renderHook(() => useCurrentRoute(routes), { wrapper });
    expect(result.current).toBe(category);
  });

  it('should return undefined if no current route found', () => {
    const path = { pathname: '/unknown', hash: '', search: '' };
    const changePath = jest.fn();
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <RouterContext.Provider value={{ path, changePath }}>
        {children}
      </RouterContext.Provider>
    );

    const { result } = renderHook(() => useCurrentRoute(routes), { wrapper });
    expect(result.current).toBeUndefined();
  });
});
