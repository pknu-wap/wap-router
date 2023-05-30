import createRoutesFromElements from '../core/createRoutesFromElements';
import type { RouteConfig } from '../types';

const ROUTE_PARAMETER_REGEXP = /:(\w+)/g;
const URL_REGEXP = '([^\\/]+)';

const parseUrlRoutes = (children: React.ReactNode): RouteConfig[] => {
  const routes: RouteConfig[] = [];
  createRoutesFromElements(children).forEach((route) => {
    const params: string[] = [];
    const parsedFragment = route.path
      .replace(ROUTE_PARAMETER_REGEXP, (_match, paramName) => {
        params.push(paramName);
        return URL_REGEXP;
      })
      .replace(/\//g, '\\/');

    routes.push({
      fragmentRegExp: new RegExp(`^${parsedFragment}$`),
      element: route.element,
      params,
    });
  });

  return routes;
};

export default parseUrlRoutes;
