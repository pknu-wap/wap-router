import React, { useContext } from 'react';
import { RouteContext, RouterContext } from '../context';
import type { RouteConfig, RouteObject } from '../types';
import { getParams, parseUrlRoutes } from '../utils';
import { useCurrentRoute } from '../hooks';
import createRoutesFromElements from './createRoutesFromElements';

interface RoutesProps {
  children: React.ReactNode;
}

/**
 * @description
 * RouteContext.Provider를 통해 현재 route의 params를 전달하고
 * REGEXP를 통해 일치하는 route를 찾아 해당 route의 element를 반환
 *
 */
const Routes = ({ children }: RoutesProps) => {
  const { path } = useContext(RouterContext);

  // children을 통해 routeObjects를 생성
  const routeObjects: RouteObject[] = createRoutesFromElements(children);

  // routeObjects를 통해 routeConfigs를 생성 (regexp, params, element를 포함)
  const routeConfigs: RouteConfig[] = parseUrlRoutes(routeObjects);

  // REGEXP를 통해 일치하는 route를 찾음
  const currentRoute = useCurrentRoute(routeConfigs);

  if (!currentRoute || !currentRoute.element) {
    return null;
  }

  // 현재 route를 통해 params의 키와 값을 가져옴
  const params = currentRoute.params.length
    ? getParams(currentRoute, path.pathname)
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
