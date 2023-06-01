import { useContext } from 'react';
import type { RouteConfig } from '../types';
import { RouterContext } from '../context';

/**
 * @description Returns the current route from the list of routes objects.
 */
const useCurrentRoute = (routes: RouteConfig[]): RouteConfig | undefined => {
  const { path } = useContext(RouterContext);
  return routes.find((route) => route.fragmentRegExp.test(path.pathname));
};

export default useCurrentRoute;
