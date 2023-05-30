import { useContext } from 'react';
import type { Route } from '../types';
import { RouterContext } from '../context';

const useCurrentRoute = (routes: Route[]): Route | undefined => {
  const { path } = useContext(RouterContext);
  return routes.find((route) => route.fragmentRegExp.test(path));
};

export default useCurrentRoute;
