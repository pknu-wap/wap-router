import type { RouteConfig, RouteObject } from '../types';

const parseUrlRoutes = (routeObjects: RouteObject[]): RouteConfig[] => {
  const routes: RouteConfig[] = [];
  routeObjects.forEach((route) => {
    const params: string[] = [];
    let parsedFragment = route.path
      // ":"로 시작하는 문자열을 찾아서 params에 저장하고, URL_REGEXP로 치환
      .replace(/:(\w+)/g, (_match, paramName) => {
        params.push(paramName);
        // URL에서 "/"를 제외한 문자열을 의미
        return '([^\\/]+)';
      })
      // 정규식으로 사용하기 위해 "/"를 "\/"로 치환
      .replace(/\//g, '\\/');

    if (parsedFragment.endsWith('*')) {
      // "*"로 끝나는 경우, \/(.*)$로 치환 (정규식에서 .*는 모든 문자열을 의미)
      parsedFragment = parsedFragment.replace(/\*$/, '(.*)');
    }

    routes.push({
      // 정규식으로 사용하기 위해 "^"와 "$"를 추가
      fragmentRegExp: new RegExp(`^${parsedFragment}$`),
      element: route.element,
      params,
    });
  });

  return routes;
};

export default parseUrlRoutes;
