import React, { useContext } from 'react';
import { RouteContext, RouterContext } from '../context';
import type { RouteConfig } from '../types';
import { getParams, parseUrlRoutes } from '../utils';
import { useCurrentRoute } from '../hooks';

interface RoutesProps {
  children: React.ReactNode;
}

const Routes = ({ children }: RoutesProps) => {
  const { path } = useContext(RouterContext);

  const routes: RouteConfig[] = parseUrlRoutes(children);

  const currentRoute = useCurrentRoute(routes);

  if (!currentRoute || !currentRoute.element) {
    return null;
  }

  const params = currentRoute.params.length
    ? getParams(currentRoute, path)
    : {};

  return (
    // RouteContext.Provider를 통해 현재 route의 params를 전달
    // useParams() hook을 통해 현재 route의 params를 사용할 수 있음
    <RouteContext.Provider value={{ params }}>
      {currentRoute.element}
    </RouteContext.Provider>
  );
};

export default Routes;
