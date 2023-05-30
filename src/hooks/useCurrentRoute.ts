import { useContext } from 'react';
import type { RouteConfig } from '../types';
import { RouterContext } from '../context';

const useCurrentRoute = (routes: RouteConfig[]): RouteConfig | undefined => {
  const { path } = useContext(RouterContext);
  return routes.find((route) => route.fragmentRegExp.test(path));
};

export default useCurrentRoute;
